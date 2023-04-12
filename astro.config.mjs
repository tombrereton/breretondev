import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";

import react from "@astrojs/react";

// https://astro.build/confiG
export default defineConfig({
  integrations: [tailwind(), image(), mdx(), react()],
  experimental: {
    assets: true
  }
});