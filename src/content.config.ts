import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { images } from './data/images';

const imageKeys = Object.keys(images) as [string, ...string[]];

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    category: z.enum(['Soft Washing', 'Pressure Washing', 'Detailing', 'Estate Care']),
    image: z.enum(imageKeys),
    imageAlt: z.string(),
  }),
});

export const collections = { blog };
