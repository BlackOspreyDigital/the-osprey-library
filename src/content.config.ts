// src/content.config.ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const crescendo = defineCollection({
    loader: glob({ base: './src/content/crescendo', pattern: '**/*.{md,mdx}' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        heroImage: z.string().optional(),
        status: z.string().optional(), // Adding this clears the error
    }),
});

export const collections = { crescendo };