import { fileURLToPath, URL } from 'node:url'
import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'

import { defineConfig, type UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig(async ({ mode }): Promise<UserConfig> => {
	const plugins = [vue(), vueJsx(), vueDevTools()]

	// Only add dts plugin for library builds, not for Storybook
	if (mode !== 'development') {
		const dts = (await import('vite-plugin-dts')).default
		plugins.push(
			dts({
				tsconfigPath: './tsconfig.app.json',
				entryRoot: 'src',
				outDir: 'dist',
				include: ['src/**/*.ts', 'src/**/*.vue'],
				exclude: ['src/**/*.stories.ts', 'src/**/__tests__/**'],
			}),
		)

		plugins.push({
			name: 'copy-npm-readme',
			closeBundle() {
				const source = resolve(__dirname, 'README-npm.md')
				const dest = resolve(__dirname, 'dist', 'README.md')
				copyFileSync(source, dest)
				console.log('✅ Copied README-npm.md to dist/README.md')
			},
		})
	}

	return {
		plugins,
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url)),
			},
		},
		build: {
			lib: {
				entry: 'src/index.ts',
				name: 'NeoMateria',
				formats: ['es'] as const,
			},
			rollupOptions: {
				external: ['vue'],
				output: {
					preserveModules: true,
					preserveModulesRoot: 'src',
					entryFileNames: '[name].js',
					globals: {
						vue: 'Vue',
					},
				},
			},
		},
	}
})
