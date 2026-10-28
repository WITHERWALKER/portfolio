// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Necesario para canonical, og:url, JSON-LD y sitemap.
  site: 'https://portfolio.witherwalker-dev.workers.dev',
  vite: {
    plugins: [tailwindcss()],
  },
});
