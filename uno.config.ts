import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  transformerVariantGroup,
  transformerDirectives,
  presetWind4,
} from "unocss";

export default defineConfig({
  presets: [
    presetWind4({
      preflights: {
        reset: true,
      },
    }),
    presetAttributify(),
    presetTypography(),
    presetIcons({
      scale: 1.2,
      warn: true,
      extraProperties: {
        display: "inline-block",
        "vertical-align": "middle",
      },
    }),
  ],
  transformers: [
    transformerVariantGroup(), // 支援 hover:(bg-primary text-white)
    transformerDirectives(), // 讓你在 CSS 裡可以用 @apply
  ],

  theme: {
    font: {
      sans: ["var(--font-sans)"],
      inter: ["var(--font-inter)"],
    },

    colors: {
      primary: "var(--color-primary)",
      accent: "var(--color-accent)",

      surface: "var(--color-surface)",
      layer: "var(--color-layer)",
      component: "var(--color-component)",

      ink: {
        DEFAULT: "var(--color-ink)",
        alt: "var(--color-ink-alt)",
        muted: "var(--color-ink-muted)",
      },

      line: {
        DEFAULT: "var(--color-line)",
        muted: "var(--color-line-muted)",
      },
    },

    text: {
      body: { fontSize: "var(--text-body)" },
      caption: { fontSize: "var(--text-caption)" },
      title: { fontSize: "var(--text-title)" },
      subtitle: { fontSize: "var(--text-subtitle)" },
      h3: { fontSize: "var(--text-h3)" },
      h4: { fontSize: "var(--text-h4)" },
      h5: { fontSize: "var(--text-h5)" },
    },
  },
  shortcuts: [],
});
