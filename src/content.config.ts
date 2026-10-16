import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image().optional(),
      bgColor: z.string().optional(),
      tags: z.array(z.string()),
      order: z.number(),
    }),
});

const landings = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/landings' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image().optional(),
      bgColor: z.string().optional(),
      tags: z.array(z.string()),
      order: z.number(),
      demo: z.string().optional(),
      category: z.string().optional(),
    }),
});

export const collections = { projects, landings };
