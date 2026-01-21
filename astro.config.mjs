import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@tailwindcss/vite";
import { loadEnv } from "vite";

import vercel from "@astrojs/vercel";

import sitemap from "@astrojs/sitemap";

const env = loadEnv("all", process.cwd(), "");

export default defineConfig({
  site: "https://codigoacessivel.com.br",
  integrations: [react(), sitemap()],

  vite: {
    plugins: [tailwind()],
    define: {
      "import.meta.env.PUBLIC_CONVERTKIT_FORM_ID": JSON.stringify(
        env.PUBLIC_CONVERTKIT_FORM_ID,
      ),
    },
  },

  adapter: vercel(),
});
