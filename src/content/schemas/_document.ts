import { z } from "astro:content";

export const documentSchema = z.object({
  draft: z.boolean().default(false),
  dateCreated: z.date().transform((str) => new Date(str)),
  dateLastModified: z.date().transform((str) => new Date(str)),
  title: z.string(),
  slugLink: z.string().trim(),
  summary: z.string(),
  pic: z.string().url(),
  category: z.enum(["post", "project"]),
  tags: z.array(z.string()),
});

export type Document = z.infer<typeof documentSchema>;
