import './assets/main.css'

import App from './App.vue'
import { ViteSSG } from 'vite-ssg'
import { createPinia } from 'pinia'
import { routes } from 'vue-router/auto-routes'
import { createHead } from '@unhead/vue/client'

export const createApp = ViteSSG(App, { routes }, ({ app, router, initialState }) => {
  // Pinia
  const pinia = createPinia()
  app.use(pinia)

  // unhead
  const head = createHead()
  app.use(head)

  // 如果有其他 plugin 也可以在這裡用
  // app.use(SomeOtherPlugin)

  if (import.meta.env.SSR) initialState.pinia = pinia.state.value
  else pinia.state.value = initialState.pinia || {}

  router.beforeEach((to, from, next) => {
    next()
  })
})
