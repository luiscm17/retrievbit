import { defineCollection, reference, z } from "astro:content";
import { glob } from "astro/loaders";

const PATTERNS = {
  INDEX: "**/-index.{md,mdx}",
  REGULAR: "**/[^_]*.{md,mdx}",
} as const;

const createLoader = (collection: string, pattern: string) => {
  return glob({
    pattern: `*/${collection}/${pattern}`,
    base: `./src/content/`
  });
};

// May also need to update /src/types/index.d.ts when updating this file
// When updating the set of searchable collections, update collectionList in /src/pages/search.astro

const searchable = z.object({
  title: z.string(),
  description: z.string().optional(),
  autodescription: z.boolean().default(true),
  draft: z.boolean().default(false),
});

const social = z.object({
  discord: z.string().optional(),
  email: z.string().optional(),
  facebook: z.string().optional(),
  github: z.string().optional(),
  instagram: z.string().optional(),
  linkedIn: z.string().optional(),
  pinterest: z.string().optional(),
  tiktok: z.string().optional(),
  website: z.string().optional(),
  youtube: z.string().optional(),
});

const about = defineCollection({
  loader: createLoader("about", PATTERNS.INDEX),
  schema: ({ image }) =>
    searchable.extend({
      image: image().optional(),
      imageAlt: z.string().default(""),
    }),
});

const authors = defineCollection({
  loader: createLoader("authors", PATTERNS.REGULAR),
  schema: ({ image }) =>
    searchable.extend({
      email: z.string().optional(),
      image: image().optional(),
      imageAlt: z.string().default(""),
      social: social.optional(),
    }),
});

const blog = defineCollection({
  loader: createLoader("blog", PATTERNS.REGULAR),
  schema: ({ image }) =>
    searchable.extend({
      date: z.date().optional(),
      image: image().optional(),
      imageAlt: z.string().default(""),
      author: reference("authors").optional(),
      categories: z.array(z.string()).optional(),
      tags: z.array(z.string()).optional(),
      complexity: z.number().default(1),
      hideToc: z.boolean().default(false),
    }),
});

const docs = defineCollection({
  loader: createLoader("docs", PATTERNS.REGULAR),
  schema: ({ image }) =>
    searchable.extend({
      pubDate: z.date().optional(),
      modDate: z.date().optional(),
      image: image().optional(),
      imageAlt: z.string().default(""),
      hideToc: z.boolean().default(false),
      hideNav: z.boolean().default(false),
    }),
});

const home = defineCollection({
  loader: createLoader("home", PATTERNS.INDEX),
  schema: ({ image }) =>
    z.object({
      image: image().optional(),
      imageAlt: z.string().default(""),
      title: z.string(),
      content: z.string(),
      button: z
        .object({
          label: z.string(),
          link: z.string().optional(),
        })
        .optional(),
    }),
});

const indexCards = defineCollection({
  loader: createLoader("index-cards", PATTERNS.INDEX),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    cards: z.array(z.string()),
  }),
});

const poetry = defineCollection({
  loader: createLoader("poetry", PATTERNS.REGULAR),
  schema: ({ image }) =>
    searchable.extend({
      date: z.date().optional(),
      image: image().optional(),
      imageAlt: z.string().default(""),
      author: reference("authors").optional(),
    }),
});

const portfolio = defineCollection({
  loader: createLoader("portfolio", PATTERNS.INDEX),
  schema: searchable.extend({
    projects: z.array(
      z.object({
        title: z.string(),
        github: z.string().optional(),
        technologies: z.array(z.string()).optional(),
        content: z.array(z.string()).optional(),
      }),
    ),
  }),
});

const tutorials = defineCollection({
  loader: createLoader("tutorials", PATTERNS.REGULAR),
  schema: ({ image }) =>
    searchable.extend({
      date: z.date().optional(),
      image: image().optional(),
      imageAlt: z.string().default(""),
      author: reference("authors").optional(),
      prepTime: z.number().optional(),
      servings: z.number().optional(),
      diet: z.string().optional(),
      ingredients: z
        .object({
          list: z.array(z.string()),
          qty: z.array(z.string()),
        })
        .optional(),
      instructions: z.array(z.string()).optional(),
      notes: z.array(z.string()).optional(),
    }),
});

const terms = defineCollection({
  loader: createLoader("terms", PATTERNS.INDEX),
  schema: searchable,
});

// Export collections
export const collections = {
  about,
  authors,
  blog,
  docs,
  home,
  indexCards,
  poetry,
  portfolio,
  tutorials,
  terms,
};
