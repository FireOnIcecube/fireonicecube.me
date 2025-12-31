// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/fonts",
    "@nuxt/hints",
    "@nuxt/icon",
    "@nuxt/image",
    "@unocss/nuxt",
    "unplugin-fonts/nuxt",
  ],
  devtools: { enabled: true },
  compatibilityDate: "2024-04-03",

  routeRules: {
    "/": { prerender: true },
  },
  css: ["@unocss/reset/tailwind.css", "./app/assets/css/main.css"],
  vite: {},

  unfonts: {
    google: {
      families: ["Noto Sans TC"],
    },
  },
});
