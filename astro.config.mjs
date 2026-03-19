import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, passthroughImageService } from 'astro/config';

export default defineConfig({
  site: 'https://theospreylibrary.com',
  integrations: [mdx(), sitemap()],
  image: {
    service: passthroughImageService()
  }
});