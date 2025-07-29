import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import AutoImport from "astro-auto-import";
import { defineConfig } from "astro/config";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import cloudflare from "@astrojs/cloudflare";
import rehypePrettyCode from 'rehype-pretty-code';
import { transformerCopyButton } from '@rehype-pretty/transformers'

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: true,
    },
    // fallback: {
    //   // Si no se encuentra una traducción, usa el inglés
    //   en: {}
    // }
  },
  site: "https://retrievbit.com",
  base: "/",
  trailingSlash: "ignore",
  prefetch: {
    prefetchAll: true
  },
  adapter: cloudflare(),
  integrations: [react(), sitemap(), tailwind({
    config: {
      applyBaseStyles: false
    }
  }), AutoImport({
    imports: ["@components/common/Button.astro", "@shortcodes/Accordion", "@shortcodes/Notice", "@shortcodes/Youtube", "@shortcodes/Tabs", "@shortcodes/Tab"]
  }), mdx()],
  markdown: {
    remarkPlugins: [remarkToc, [remarkCollapse, {
      test: "Table of contents"
    }], remarkMath],
    rehypePlugins: [
      rehypeKatex,
      [rehypePrettyCode, {
        theme: {
          dark: 'github-dark-dimmed',
          light: 'github-light',
        },
        onVisitLine(node) {
          // Evita que se colapse el código
          if (node.children.length === 0) {
            node.children = [{ type: 'text', value: ' ' }];
          }
        },
        onVisitHighlightedLine(node) {
          node.properties.className.push('highlighted');
        },
        onVisitHighlightedWord(node) {
          node.properties.className = ['word'];
        },
        transformers: [
          transformerCopyButton({
            visibility: 'hover',
            feedbackDuration: 3_000,
          }),
        ],
      }]
    ],
    // shikiConfig: {
    //   themes: {
    //     light: "github-light",
    //     dark: "github-dark",
    //   } 
    // },
    extendDefaultPlugins: true
  },
});