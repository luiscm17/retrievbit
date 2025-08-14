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
import { transformerCopyButton } from '@rehype-pretty/transformers';
// https://astro.build/config
export default defineConfig({
  // Redirecciones personalizadas si son necesarias
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      prefixDefaultLocale: true,
      redirectDefaultLocale: true,
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
  integrations: [
    react(),
    sitemap(),
    tailwind({
    config: {
      applyBaseStyles: false
    }
  }), AutoImport({
    imports: ["@components/common/Button.astro", "@shortcodes/Accordion", "@shortcodes/Notice", "@shortcodes/Youtube", "@shortcodes/Tabs", "@shortcodes/Tab"]
  }), mdx()],
  markdown: {
    syntaxHighlight: false,
    remarkPlugins: [remarkToc, [remarkCollapse, {
      test: "Table of contents"
    }], remarkMath],
    rehypePlugins: [
      rehypeKatex,
      [rehypePrettyCode, {
        wrap: true,
        theme: 'one-dark-pro', // Usa solo un tema
        defaultLang: "plaintext",
        keepBackground: true,
        // Configuración del botón de copia
        transformers: [
          transformerCopyButton({
            visibility: 'hover',
            feedbackDuration: 3000,
            buttonAttrs: {
              class: 'copy-button'
            },
            feedbackAttrs: {
              class: 'copy-feedback'
            }
          }),
        ],
        // Configuración adicional para mejorar la experiencia
        onVisitLine(node) {
          if (node.children.length === 0) {
            node.children = [{ type: 'text', value: ' ' }];
          }
        },
        onVisitHighlightedLine(node) {
          node.properties.className = ['line', 'highlighted'];
        },
        onVisitHighlightedWord(node) {
          node.properties.className = ['word'];
        }
      }]
    ],
    // shikiConfig: {
    //   wrap: true,
    // },
    extendDefaultPlugins: true
  },
});

