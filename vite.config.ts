import { fileURLToPath, URL } from 'node:url'
import VueRouter from 'unplugin-vue-router/vite'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

import autoprefixer from 'autoprefixer'
import tailwind from 'tailwindcss'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    VueRouter(),
    vue({
      template: {
        compilerOptions: {
          isCustomElement: tag => tag.startsWith('iconify-icon')
        }
      }
    }),
    vueDevTools(),
  ],
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
