// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // TODO: define `site` con el dominio de producción antes de desplegar.
  // Sin él, Layout.astro omite <link rel="canonical">, og:url y la url del
  // JSON-LD, y no se puede generar sitemap.
  // site: 'https://tu-dominio.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
