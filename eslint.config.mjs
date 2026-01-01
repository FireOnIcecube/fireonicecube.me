// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import unocss from "@unocss/eslint-config/flat";

export default withNuxt([
  unocss,
  {
    rules: {
      // allow element self-closing
      "vue/html-self-closing": "off",
    },
  },
]);
