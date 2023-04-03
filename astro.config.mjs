import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";
import { Vitest } from "vitest";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), image(), mdx()],
  vite: {
    plugins: [Vitest()]
  },
  experimental: {
    assets: true
  }
});