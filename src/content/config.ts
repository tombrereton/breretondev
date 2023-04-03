// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content";
// 2. Define your collection(s)
const blogCollection = defineCollection({
  schema: z.object({
    draft: z.boolean().default(false),
    date: z.date().transform((str) => new Date(str)),
    title: z.string(),
    type: z.enum(["post", "project"]),
    tags: z.array(z.string()).optional(),
    share: z
      .object({
        image: z.string().url().optional(),
        title: z.string(),
        description: z.string(),
      })
      .strict(),
  }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  blog: blogCollection,
};
