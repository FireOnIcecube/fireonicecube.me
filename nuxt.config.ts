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
  ],
  devtools: { enabled: true },
  compatibilityDate: "2024-04-03",

  routeRules: {
    "/": { prerender: true },
  },
  css: ["./app/assets/css/main.css"],
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
