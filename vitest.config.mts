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
import { createRequire } from 'node:module'
import { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

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

// ─── Snapshot comparison command (runs on Node.js server side) ───────────────
//
// Uses two publicly exported paths from playwright-core (no internal bypasses):
//   - playwright-core/lib/utilsBundle  → PNG encode/decode (pngjs)
//   - playwright-core/lib/server/utils/image_tools/compare → SSIM pixel diff
const _require = createRequire(import.meta.url)
const projectRoot = fileURLToPath(new URL('.', import.meta.url))
const snapshotsDir = join(projectRoot, '__snapshots__')
const snapshotsDiffDir = join(projectRoot, '__snapshots_diff__')
const snapshotsModifiedDir = join(projectRoot, '__snapshots_modified__')

// Clear diff and modified directories at the start of each run so only
// current failures are visible — no stale images from previous runs.
for (const dir of [snapshotsDiffDir, snapshotsModifiedDir]) {
  if (existsSync(dir)) rmSync(dir, { recursive: true, force: true })
}

// Lazily resolved so the config file itself always loads, even in environments
// where playwright-core isn't installed.
let _PNG: { sync: { read: (buf: Buffer) => { data: Buffer; width: number; height: number }; write: (png: object) => Buffer }; new (opts: object): { data: Buffer } } | null = null
let _compare: ((actual: Buffer, expected: Buffer, diff: Buffer | null, w: number, h: number) => number) | null = null

function loadImageTools() {
  if (!_PNG) {
    _PNG = (_require('playwright-core/lib/utilsBundle') as { PNG: typeof _PNG }).PNG
    _compare = (_require('playwright-core/lib/server/utils/image_tools/compare') as { compare: typeof _compare }).compare
  }
}

type SnapshotStatus =
  | { status: 'created' }
  | { status: 'match' }
  | { status: 'mismatch'; modifiedPath: string; diffPath?: string }
  | { status: 'missing' }

const compareSnapshot = async (
  _context: unknown,
  storyId: string,
  viewportName: string,
  base64: string,
): Promise<SnapshotStatus> => {
  const snapshotPath = join(snapshotsDir, `${storyId}--${viewportName}.png`)
  const modifiedPath = join(snapshotsModifiedDir, `${storyId}--${viewportName}.png`)
  const diffPath = join(snapshotsDiffDir, `${storyId}--${viewportName}--diff.png`)
  const currentBuffer = Buffer.from(base64, 'base64')

  const isCI = Boolean(process.env.CI)
  // -u / --update stays in process.argv on the Vitest Node.js process.
  const shouldUpdate = process.argv.includes('--update') || process.argv.includes('-u')

  if (!existsSync(snapshotPath)) {
    if (isCI) return { status: 'missing' }
    mkdirSync(snapshotsDir, { recursive: true })
    writeFileSync(snapshotPath, currentBuffer)
    return { status: 'created' }
  }

  loadImageTools()
  const PNG = _PNG!
  const compare = _compare!

  const baselinePng = PNG.sync.read(readFileSync(snapshotPath))
  const currentPng = PNG.sync.read(currentBuffer)

  // Size mismatch — write new baseline if updating, otherwise save the
  // current screenshot to __snapshots_modified__ for manual review.
  if (baselinePng.width !== currentPng.width || baselinePng.height !== currentPng.height) {
    if (shouldUpdate) {
      writeFileSync(snapshotPath, currentBuffer)
      return { status: 'match' }
    }
    mkdirSync(snapshotsModifiedDir, { recursive: true })
    writeFileSync(modifiedPath, currentBuffer)
    return { status: 'mismatch', modifiedPath }
  }

  const diffPng = new PNG({ width: baselinePng.width, height: baselinePng.height })
  // compare() returns the number of differing pixels and writes red/gray diff
  // pixels into diffPng.data. 0 = pixel-perfect match.
  const diffPixels = compare(currentPng.data, baselinePng.data, diffPng.data, baselinePng.width, baselinePng.height)

  if (diffPixels === 0) return { status: 'match' }

  if (shouldUpdate) {
    writeFileSync(snapshotPath, currentBuffer)
    return { status: 'match' }
  }

  // Pixel mismatch — write the current screenshot and the pixel diff so the
  // user can drag accepted changes from __snapshots_modified__ → __snapshots__.
  mkdirSync(snapshotsModifiedDir, { recursive: true })
  writeFileSync(modifiedPath, currentBuffer)
  mkdirSync(snapshotsDiffDir, { recursive: true })
  writeFileSync(diffPath, PNG.sync.write(diffPng))

  return { status: 'mismatch', modifiedPath, diffPath }
}

// Freezes CSS animations/transitions in the story iframe and waits for all
// network activity (including external images) to settle before screenshots
// are taken. Without this, spinner rotations and external images produce
// non-deterministic pixels between runs.
//
// context.iframe is a Playwright FrameLocator (not Frame), so we use
// locator.evaluate() which executes the callback in the browser's frame context.
const prepareForSnapshot = async (context: unknown) => {
  const ctx = context as {
    iframe?: { locator: (sel: string) => { evaluate: (fn: () => Promise<void>) => Promise<void> } }
    provider?: { getPage?: (sessionId: string) => { waitForLoadState: (state: string, opts?: { timeout?: number }) => Promise<void> } }
    sessionId?: string
  }

  // Wait for network to go idle — catches external images, fonts, etc.
  const playwrightPage = ctx.provider?.getPage?.(ctx.sessionId ?? '')
  if (playwrightPage) {
    await playwrightPage.waitForLoadState('networkidle', { timeout: 10_000 }).catch(() => {
      // Timeout is non-fatal: best-effort wait, then proceed.
    })
  }

  if (!ctx.iframe) return
  await ctx.iframe.locator('html').evaluate(async () => {
    // Collapse all animations to their end state instantly (idempotent).
    if (!document.getElementById('__vt-freeze-animations__')) {
      const style = document.createElement('style')
      style.id = '__vt-freeze-animations__'
      style.textContent =
        // Hide scrollbar and its gutter so it never reduces content width.
        // This prevents layout shifts when story content slightly overflows
        // the viewport height (especially at mobile 375×667).
        'html { scrollbar-width: none !important; } ' +
        '::-webkit-scrollbar { display: none !important; } ' +
        '*, *::before, *::after { ' +
        'animation: none !important; ' +
        'transition-duration: 0ms !important; ' +
        'transition-delay: 0ms !important; }'
      document.head.appendChild(style)
    }
    // Belt-and-suspenders: also wait for any img still mid-load.
    await Promise.all(
      Array.from(document.images)
        .filter((img) => !img.complete)
        .map((img) => new Promise<void>((resolve) => { img.onload = img.onerror = () => resolve() })),
    )
    // Flush Vue's microtask queue so reactive DOM updates (e.g. NeoImage
    // removing its placeholder after onload) are committed before we return.
    // setTimeout(0) runs after all pending microtasks (including Vue's nextTick).
    await new Promise<void>((resolve) => setTimeout(resolve, 0))

    // Wait for all CSS animations and transitions to reach their final state.
    // After injecting the freeze CSS (0ms transitions, 0.001ms animations),
    // the browser needs at least one paint frame to apply the rules and fire
    // transitionend/animationend. We poll via getAnimations() until nothing
    // is still running (or we give up after 10 frames).
    for (let attempt = 0; attempt < 10; attempt++) {
      const running = document.getAnimations().filter((animation) => animation.playState === 'running')
      if (running.length === 0) break
      await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()))
    }
  })
}

// Shared browser config injected into both storybook projects.
const snapshotBrowserCommands = { compareSnapshot, prepareForSnapshot }


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
        resolve: {
          alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
          },
        },
        test: {
          name: 'unit',
          include: ['src/**/*.test.ts'],
          environment: 'jsdom',
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

            instances: [{ browser: 'chromium' }],
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

            instances: [{ browser: 'chromium' }],
            commands: snapshotBrowserCommands,
          },
          setupFiles: ['.storybook/vitest.setup.ts'],
        },
      },
    ],
  },
})
