import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), vueDevTools()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: 'src/index.ts', // Ensure this points to your main export file
      name: 'NeoMateria',
      fileName: (format) => `neo-materia.${format}.js`,
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
})
