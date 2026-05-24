import { fileURLToPath, URL } from 'node:url'
import { copyFileSync, readdirSync, readFileSync, statSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

import { defineConfig, type Plugin, type UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// Vite with `preserveModules` splits per-component CSS but does not wire the
// side-effect import — without this, `import { NeoButton }` skips NeoButton.css.
// Also rebuilds `dist/neo-materia.css` as a back-compat aggregator.
function wireSplitCssPlugin(): Plugin {
	return {
		name: 'neo-materia:wire-split-css',
		apply: 'build',
		closeBundle() {
			const distDir = resolve(__dirname, 'dist')
			const allCssFiles: string[] = []

			const walk = (dir: string) => {
				for (const entry of readdirSync(dir)) {
					const full = resolve(dir, entry)
					const stat = statSync(full)
					if (stat.isDirectory()) {
						walk(full)
						continue
					}
					if (entry.endsWith('.css')) allCssFiles.push(full)
					if (entry.endsWith('.vue.js') || entry.endsWith('.vue2.js')) {
						const source = readFileSync(full, 'utf8')
						if (!source.includes('/* empty css')) continue
						const componentName = entry.replace(/\.vue2?\.js$/, '')
						const cssSibling = resolve(dir, `${componentName}.css`)
						try {
							statSync(cssSibling)
						} catch {
							continue
						}
						const importLine = `import "./${componentName}.css";\n`
						const patched = importLine + source.replace(/\/\* empty css\s*\*\//g, '')
						writeFileSync(full, patched, 'utf8')
					}
				}
			}
			walk(distDir)

			const foundationsCss = resolve(distDir, 'assets/styles/globals.css')
			const ordered = allCssFiles
				.filter((path) => path !== foundationsCss)
				.sort((a, b) => a.localeCompare(b))
			const merged = [foundationsCss, ...ordered]
				.map((path) => {
					try {
						return readFileSync(path, 'utf8')
					} catch {
						return ''
					}
				})
				.join('\n')
			writeFileSync(resolve(distDir, 'neo-materia.css'), merged, 'utf8')
			const sizeKb = (merged.length / 1024).toFixed(1)
			console.log(
				`✅ Wired ${allCssFiles.length} per-component CSS imports and rebuilt dist/neo-materia.css (${sizeKb} KB) for back-compat`,
			)
		},
	}
}

// https://vite.dev/config/
export default defineConfig(async ({ mode }): Promise<UserConfig> => {
	const plugins = [vue(), vueJsx()]

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

		plugins.push(wireSplitCssPlugin())
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
			cssCodeSplit: true,
			rollupOptions: {
				external: ['vue'],
				output: {
					preserveModules: true,
					preserveModulesRoot: 'src',
					entryFileNames: '[name].js',
					assetFileNames: (assetInfo) => {
						if (assetInfo.name?.endsWith('.css')) {
							return '[name][extname]'
						}
						return 'assets/[name]-[hash][extname]'
					},
					globals: {
						vue: 'Vue',
					},
				},
			},
		},
	}
})
