// Configures Astro to build static HTML and assets for local hosting and GitHub Pages.
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  // The Pages workflow sets these values. The local site runs at the root path.
  site: process.env.PAGES_SITE_ORIGIN || undefined,
  base: process.env.PAGES_BASE_PATH || '/',
});
