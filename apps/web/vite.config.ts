import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'
import vueRouter from 'unplugin-vue-router/vite'
import Markdown from 'unplugin-vue-markdown/vite'

import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vueRouter({
      routesFolder: ['src/views'],
    }),
    vue({ include: [/\.vue$/, /\.md$/] }),
    Markdown({
      headEnabled: true,
    }),
    vueJsx(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@pkg/content': path.resolve(__dirname, '../../packages/content'),
    },
  },
})
