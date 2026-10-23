import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// The legal pages are plain Markdown files in src/content/legal. Edit the text there.
const legal = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/legal' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    slug: z.string(),
  }),
});

export const collections = { legal };
