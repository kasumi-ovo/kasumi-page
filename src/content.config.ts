import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { tags } from './const';

const posts = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/posts" }),
    schema: z.object({
        title: z.string(),
        desc: z.string(),
        tags: z.array(z.enum([...tags])),
        pubDate: z.coerce.date(),
    })
});

export const collections = { posts };