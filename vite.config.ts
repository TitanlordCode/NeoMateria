import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig(async ({ mode }) => {
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
        entry: 'src/index.ts', // Ensure this points to your main export file
        name: 'NeoMateria',
        fileName: (format: string) => `neo-materia.${format}.js`,
      },
      rollupOptions: {
        external: ['vue'], // Mark Vue as external to prevent bundling it
        output: {
          globals: {
            vue: 'Vue',
          },
        },
      },
    },
  }
})
