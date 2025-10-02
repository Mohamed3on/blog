import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config";

import cloudflare from "@astrojs/cloudflare";

import mdx from "@astrojs/mdx";
import { remarkAlert } from "remark-github-blockquote-alert";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  output: "server",
  adapter: cloudflare(),
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    sitemap(),
    mdx(),
  ],
  markdown: {
    remarkPlugins: [
      remarkToc,
      remarkAlert,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    shikiConfig: {
      // For more themes, visit https://shiki.style/themes
      themes: { light: "min-light", dark: "night-owl" },
      wrap: true,
    },
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
    ssr: {
      external: ["@resvg/resvg-js"],
    },
  },
  scopedStyleStrategy: "where",
});
