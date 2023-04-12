import { defineCollection } from "astro:content";
import { documentSchema } from "./schemas/_document";

const blogCollection = defineCollection({
  schema: documentSchema,
});

export const collections = {
  blog: blogCollection,
};
