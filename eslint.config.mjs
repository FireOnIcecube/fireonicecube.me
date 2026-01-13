// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";
import unocss from "@unocss/eslint-config/flat";
import tseslint from "typescript-eslint";

export default withNuxt([
  unocss,
  tseslint.configs.recommended,

  {
    rules: {
      // allow element self-closing
      "vue/html-self-closing": "off",
    },
  },
]);
