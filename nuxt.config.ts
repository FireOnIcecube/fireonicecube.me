// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "@nuxt/eslint",
    "@nuxt/hints",
    "@nuxt/icon",
    "@nuxt/image",
    "@unocss/nuxt",
    "unplugin-fonts/nuxt",
    "@nuxtjs/i18n",
    "@nuxtjs/color-mode",
    "v-gsap-nuxt",
  ],

  i18n: {
    locales: [{ code: "en", name: "English", language: "en-US", dir: "ltr" }],
    strategy: "prefix_except_default",
    defaultLocale: "en",
  },

  devtools: { enabled: false },
  compatibilityDate: "2024-04-03",

  routeRules: {
    "/": { prerender: true },
  },
  css: ["./app/assets/css/preflight.tailwind.css", "./app/assets/css/main.css"],
  vite: {},

  unfonts: {
    google: {
      families: [
        "Noto Sans TC",
        {
          name: "Inter",
          styles: "wght@700;800;900",
        },
      ],
    },
  },
});