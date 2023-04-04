import { z } from "astro:content";

export const documentSchema = z.object({
  draft: z.boolean().default(false),
  date: z.date().transform((str) => new Date(str)),
  title: z.string(),
  category: z.enum(["post", "project"]),
  tags: z.array(z.string()),
  share: z.string().url(),
});

export type Document = z.infer<typeof documentSchema>;
