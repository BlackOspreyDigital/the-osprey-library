import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
    // Load Markdown and MDX files in the `src/content/blog/` directory.
    loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
    // Type-check frontmatter using a schema
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            description: z.string(),
            pubDate: z.coerce.date(),
            updatedDate: z.coerce.date().optional(),
            heroImage: z.optional(image()),
        }),
});

// Our new Astro v5 Devlog Collection
const devlog = defineCollection({
    loader: glob({ base: './src/content/devlog', pattern: '**/*.{md,mdx}' }),
    schema: () =>
        z.object({
            title: z.string(),
            description: z.string(),
            date: z.coerce.date(), 
        }),
});

// Export BOTH collections so Astro can see them
export const collections = { blog, devlog };