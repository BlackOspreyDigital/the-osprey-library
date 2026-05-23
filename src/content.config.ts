// src/content.config.ts
import { defineCollection, z } from 'astro:content';

const crescendo = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        heroImage: z.string().optional(),
    }),
});

export const collections = { crescendo };