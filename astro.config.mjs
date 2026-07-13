import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import cloudflare from '@astrojs/cloudflare';
import rehypeMermaid from 'rehype-mermaid'; // Import the new processor

export default defineConfig({
  integrations: [mdx()],
  output: 'static',
  adapter: cloudflare(),
  
  markdown: {
    // Tell Shiki to ignore mermaid blocks
    syntaxHighlight: {
      type: 'shiki',
      excludeLangs: ['mermaid'], 
    },
    // Inject the mermaid processor into your build pipeline
    rehypePlugins: [
      [rehypeMermaid, { 
        strategy: 'img-svg', 
        dark: true // Forces the SVG text to render white, ideal for dark mode blogs
      }]
    ],
  },
});