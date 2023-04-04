import { defineCollection } from "astro:content";
import { documentSchema } from "./schemas/documentSchema";

const blogCollection = defineCollection({
  schema: documentSchema,
});

export const collections = {
  blog: blogCollection,
};
