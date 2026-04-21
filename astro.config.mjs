import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://jevancousins.com',
  integrations: [
    tailwind(),
    sitemap(),
  ],
  vite: {
    ssr: {
      external: ['@resvg/resvg-js'],
    },
  },
});
