// @ts-check
import sanity from '@sanity/astro';

import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    sanity({
      projectId: 'wfqtcpjl',
      dataset: 'production',
      useCdn: false,  // Set useCdn to false if you're building statically.
      studioBasePath: '/admin',
    }),
    react(),
  ],
  output: 'server',
});