import './assets/main.css'

import App from './App.vue'
import { ViteSSG } from 'vite-ssg'
import { createPinia } from 'pinia'
import routes from './router/routes' // 改成你拆分出的 routes 檔案

export const createApp = ViteSSG(App, { routes }, ({ app, router, initialState }) => {
  // 這裡可以註冊 Pinia
  const pinia = createPinia()
  app.use(pinia)

  if (import.meta.env.SSR) initialState.pinia = pinia.state.value
  else pinia.state.value = initialState.pinia || {}

  router.beforeEach((to, from, next) => {
    next()
  })

  // 如果有其他 plugin 也可以在這裡用
  // app.use(SomeOtherPlugin)
})
