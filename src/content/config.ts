import { z, defineCollection } from 'astro:content';

const devlogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
  }),
});

export const collections = {
  'devlog': devlogCollection,
};