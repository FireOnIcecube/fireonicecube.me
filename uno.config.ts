import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  transformerVariantGroup,
  transformerDirectives,
} from "unocss";

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetTypography()],
  transformers: [
    transformerVariantGroup(), // 支援 hover:(bg-primary text-white)
    transformerDirectives(), // 讓你在 CSS 裡可以用 @apply
  ],
  theme: {
    colors: {
      surface: "var(--color-surface)",
      layer: "var(--color-layer)",
      component: "var(--color-component)",
      primary: "var(--color-primary)",
      accent: "var(--color-accent)",
      line: "var(--color-line)",
      ink: {
        DEFAULT: "var(--color-ink)",
        alt: "var(--color-ink-alt)",
        muted: "var(--color-ink-muted)",
      },
    },
  },
  shortcuts: [],
});
