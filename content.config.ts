import { defineContentConfig, defineCollection } from "@nuxt/content";
import { z } from "zod/v4";

export default defineContentConfig({
  collections: {
    blog: defineCollection({
      type: "page",
      source: "blog/*.md",
      schema: z.object({
        title: z.string(),
        tags: z.array(z.string()).optional(),
        date: z.date(),
      }),
    }),
    content: defineCollection({
      type: "page",
      source: "**",
    }),
  },
});
