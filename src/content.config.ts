// 1. Import utilities from `astro:content`
import { z, defineCollection } from 'astro:content';

// 2. Import loader(s)
import { glob } from 'astro/loaders';

// 3. Define your collection(s)
const portfolio = defineCollection({
    loader: glob({ pattern: "*.md", base: "./src/pages/projects" }),
    schema: z.object({
        // url: z.string().url(),
        title: z.string(),
        client: z.string(),
        thumbnail: z.string(),
        image: z.string(),
        image_description: z.string(),
        status: z.string(),
        pubDate: z.coerce.date(),
        description: z.string(),
        workType: z.array(z.string()),
    })
});

// 4. Export a single `collections` object to register your collection(s)
export const collections = { portfolio };