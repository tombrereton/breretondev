/// <reference types="vitest" />
import { getViteConfig } from "astro/config";
import path from "path";

export default getViteConfig({
  test: {
    environment: "jsdom",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
