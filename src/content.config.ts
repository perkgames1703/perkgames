import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const games = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/games' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    cover: z.string(),
    screenshots: z.array(z.string()).default([]),
    platforms: z.array(z.enum(['yandex', 'android', 'web'])),
    genre: z.string(),
    playUrl: z.string().url().optional().or(z.literal('')),
    embedUrl: z.string().url().optional().or(z.literal('')),
    date: z.coerce.date(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { games };