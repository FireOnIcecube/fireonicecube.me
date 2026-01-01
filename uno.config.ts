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
  presets: [
    presetUno(),
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
    fontFamily: {
      sans: ["var(--font-sans)"],
    },

    backgroundColor: {
      surface: "var(--color-surface)",
      layer: "var(--color-layer)",
      component: "var(--color-component)",
    },

    borderWidth: {
      thin: "var(--border-thin)",
      medium: "var(--border-medium)",
      thick: "var(--border-thick)",
    },
    borderColor: {
      DEFAULT: "var(--color-line)",
      muted: "var(--color-line-muted)",
    },
    divideColor: {
      DEFAULT: "var(--color-line-muted)",
    },

    textColor: {
      ink: {
        DEFAULT: "var(--color-ink)",
        alt: "var(--color-ink-alt)",
        muted: "var(--color-ink-muted)",
      },
    },

    colors: {
      primary: "var(--color-primary)",
      accent: "var(--color-accent)",
      line: "var(--color-line)",
    },

    fontSize: {
      body: "var(--text-body)",
      caption: "var(--text-caption)",
      title: "var(--text-title)",
      subtitle: "var(--text-subtitle)",
      h3: "var(--text-h3)",
      h4: "var(--text-h4)",
      h5: "var(--text-h5)",
    },
  },
  shortcuts: [],
});
