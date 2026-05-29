import { fileURLToPath, URL } from 'node:url'
import { defineConfig, configDefaults } from 'vitest/config'

// Tells @storybook/addon-vitest's getInitialGlobals server command to return
// { a11y: { manual: true } }, disabling the addon's automatic afterEach axe run.
// Our createA11yPlay helper runs axe directly inside play functions instead.
process.env.VITEST_STORYBOOK = 'true'

import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
import type { Plugin } from 'vite'
import { existsSync, rmSync } from 'node:fs'
import { join } from 'node:path'
import { createSnapshotCommands } from './vitest.snapshot-commands'

// When VITEST_STORYBOOK=true, storybookTest's workspace-name-override plugin renames
// every project to `storybook:${configDir}`. Since both storybook projects share the
// same configDir, their names (and browser instance names) collide. This post-order
// plugin restores the names we want after all other config hooks have run.
function overrideProjectName(name: string): Plugin {
	return {
		name: 'vitest:project-name-override',
		config: {
			// Must be 'pre' so this hook runs before vitest:project:name (which has no
			// hook order = normal). vitest:project:name reads test.name to build the
			// workspaceNames filter list; if it reads the storybook:${dir} value the
			// --project=<name> filter fails even though we later override the name.
			order: 'pre',
			handler() {
				// storybook:workspace-name-override (also pre order, but listed earlier in
				// the plugins array so it runs first) has set test.name = 'storybook:${dir}'.
				// Restore it to the desired name so vitest:project:name picks up the right value.
				return { test: { name } }
			},
		},
	}
}

const projectRoot = fileURLToPath(new URL('.', import.meta.url))
const snapshotsDir = join(projectRoot, '__snapshots__')
const snapshotsDiffDir = join(projectRoot, '__snapshots_diff__')
const snapshotsModifiedDir = join(projectRoot, '__snapshots_modified__')

// Clear diff and modified directories at the start of each run so only
// current failures are visible — no stale images from previous runs.
for (const dir of [snapshotsDiffDir, snapshotsModifiedDir]) {
	if (existsSync(dir)) rmSync(dir, { recursive: true, force: true })
}

const { compareSnapshot, prepareForSnapshot, captureStoryScreenshot } = createSnapshotCommands({
	snapshots: snapshotsDir,
	modified: snapshotsModifiedDir,
	diff: snapshotsDiffDir,
})

// Shared browser config injected into both storybook projects.
const snapshotBrowserCommands = { compareSnapshot, prepareForSnapshot, captureStoryScreenshot }

// These flags produce consistent cross-platform rendering so screenshots taken
// on Windows match those taken in the Linux Docker container:
//   --disable-lcd-text                  no ClearType sub-pixel antialiasing
//   --disable-font-subpixel-positioning  no sub-pixel font placement
//   --force-device-scale-factor=1        hard DPR=1 (overrides HiDPI displays)
const chromiumInstance = {
	browser: 'chromium',
	launch: {
		args: [
			'--disable-lcd-text',
			'--disable-font-subpixel-positioning',
			'--force-device-scale-factor=1',
		],
	},
	context: { deviceScaleFactor: 1 },
}

export default defineConfig({
	plugins: [vue(), vueJsx()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	test: {
		exclude: [...configDefaults.exclude, 'e2e/**'],
		root: fileURLToPath(new URL('./', import.meta.url)),
		// Vitest sets updateSnapshot='none' automatically when process.env.CI is set,
		// so CI never creates or updates built-in text snapshots. Our custom PNG
		// comparison uses process.env.CI and UPDATE_SNAPSHOTS for the same effect.
		projects: [
			{
				// Composable unit tests in jsdom
				plugins: [vue(), vueJsx()],
				resolve: {
					alias: {
						'@': fileURLToPath(new URL('./src', import.meta.url)),
					},
				},
				test: {
					name: 'unit',
					include: ['src/**/*.test.ts'],
					exclude: ['src/**/*.ssr.test.ts'],
					environment: 'jsdom',
				},
			},
			{
				// Unit tests for the snapshot browser commands (Node.js environment)
				test: {
					name: 'snapshot-utils',
					include: ['vitest.snapshot-commands.test.ts'],
					environment: 'node',
				},
			},
			{
				// Server-side rendering smoke tests — pure Node, no DOM.
				// Catches "document is not defined" regressions for components that
				// teleport or otherwise touch the DOM, before they hit Nuxt consumers.
				plugins: [vue(), vueJsx()],
				resolve: {
					alias: {
						'@': fileURLToPath(new URL('./src', import.meta.url)),
					},
				},
				test: {
					name: 'ssr',
					include: ['src/**/*.ssr.test.ts'],
					environment: 'node',
				},
			},
			{
				// Storybook interaction + a11y tests (tag: test-only)
				plugins: [
					vue(),
					vueJsx(),
					storybookTest({ tags: { include: ['test-only'] } }),
					overrideProjectName('storybook'),
				],
				resolve: {
					alias: {
						'@': fileURLToPath(new URL('./src', import.meta.url)),
					},
				},
				test: {
					name: 'storybook',
					browser: {
						enabled: true,
						headless: true,
						provider: 'playwright',

						instances: [chromiumInstance],
						commands: snapshotBrowserCommands,
					},
					setupFiles: ['.storybook/vitest.setup.ts'],
				},
			},
			{
				// Storybook visual snapshot tests (tag: snapshot)
				plugins: [
					vue(),
					vueJsx(),
					storybookTest({ tags: { include: ['snapshot'] } }),
					overrideProjectName('storybook-snapshots'),
				],
				resolve: {
					alias: {
						'@': fileURLToPath(new URL('./src', import.meta.url)),
					},
				},
				test: {
					name: 'storybook-snapshots',
					// Each afterEach takes 3 viewport screenshots; allow extra time under load.
					hookTimeout: 90_000,
					browser: {
						enabled: true,
						headless: true,
						provider: 'playwright',

						instances: [chromiumInstance],
						commands: snapshotBrowserCommands,
					},
					setupFiles: ['.storybook/vitest.setup.ts'],
				},
			},
		],
	},
})
