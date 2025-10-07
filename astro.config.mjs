// astro.config.mjs
// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://erankawinda.github.io",
  vite: { plugins: [tailwindcss()] }
});