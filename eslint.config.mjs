// @ts-check
import withNuxt from "./.nuxt/eslint.config.mjs";

export default withNuxt({
  rules: {
    // allow element self-closing
    "vue/html-self-closing": "off",
  },
});
