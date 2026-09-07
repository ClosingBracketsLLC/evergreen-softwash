// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Bare domain is primary — Render 301s www.evergreensoftwash.com here.
  site: 'https://evergreensoftwash.com',
  integrations: [
    sitemap({
      // Post-submit confirmation page — noindexed, so keep it out of the sitemap too.
      filter: (page) => !page.includes('/thanks/'),
    }),
  ],
  image: {
    // Generated marketing photography is remote-free; all images are local & optimized at build.
    responsiveStyles: true,
  },
  build: {
    // Inline all page CSS — the whole design system is small, and inlining
    // removes a render-blocking request on every page.
    inlineStylesheets: 'always',
  },
});
