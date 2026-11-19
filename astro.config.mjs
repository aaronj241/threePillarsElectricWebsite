import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: process.env.PAGES_SITE_ORIGIN || undefined,
  base: process.env.PAGES_BASE_PATH || '/',
});
