import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const cities = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/cities" }),
  schema: z.object({
    name: z.string(),
    state: z.string(),
    status: z.enum(["activa", "próximamente"]),
    shortDescription: z.string(),
    howToArrive: z.string(),
    mapEmbedUrl: z.string().url().optional(),
    heroImage: z.string().optional(),
    isPrimary: z.boolean().default(false),
  }),
});

const events = defineCollection({
  loader: glob({ pattern: "**/*.json", base: "./src/content/events" }),
  schema: z.object({
    citySlug: z.string(),
    date: z.coerce.date(),
    time: z.string(),
    venueName: z.string(),
    venueAddress: z.string(),
    notes: z.string().optional(),
    isFeatured: z.boolean().default(false),
  }),
});

const books = defineCollection({
  loader: file("src/content/books/books.json"),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    author: z.string(),
    note: z.string().optional(),
    language: z.enum(["es", "en"]),
    link: z.string().url().optional(),
    order: z.number().default(99),
    placeholder: z.boolean().default(false),
  }),
});

const links = defineCollection({
  loader: file("src/content/links/links.json"),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    url: z.string().url(),
    category: z.enum([
      "duelo",
      "tanatologia",
      "cuidados-paliativos",
      "linea-de-apoyo",
    ]),
    description: z.string().optional(),
    placeholder: z.boolean().default(false),
  }),
});

const podcast = defineCollection({
  loader: file("src/content/podcast/episodes.json"),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    description: z.string().optional(),
    publishDate: z.coerce.date().optional(),
    embedUrl: z.string().url().optional(),
    externalUrl: z.string().url().optional(),
    placeholder: z.boolean().default(false),
  }),
});

const cuentos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/cuentos" }),
  schema: z.object({
    title: z.string(),
    author: z.string().optional(),
    date: z.coerce.date(),
    excerpt: z.string(),
    citySlug: z.string().optional(),
    youtubeUrl: z.string().url().optional(),
    draft: z.boolean().default(false),
  }),
});

const articles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/articles" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    draft: z.boolean().default(false),
  }),
});

const legadoDigital = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/legado-digital" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    draft: z.boolean().default(false),
  }),
});

const ejemplos = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/ejemplos" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    draft: z.boolean().default(false),
  }),
});

const entierroEcologico = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/entierro-ecologico" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { cities, events, books, links, podcast, cuentos, articles, legadoDigital, ejemplos, entierroEcologico };
