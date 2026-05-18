import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const crescendo = defineCollection({
  loader: glob({ base: './src/content/crescendo', pattern: '**/*.{md,mdx}' }),
  schema: () => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    module: z.enum(['renderer', 'physics', 'architecture', 'general']).default('general'),
  }),
});

const comms = defineCollection({
  loader: glob({ base: './src/content/comms', pattern: '**/*.{md,mdx}' }),
  schema: () => z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
  }),
});

export const collections = { crescendo, comms };