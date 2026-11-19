// Builds internal URLs that work at the site root and under a GitHub Pages repository path.
const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');

// Pass a site-relative path without a leading slash. Fragments and query strings are kept intact.
export function sitePath(path: string): string {
  return `${basePath}/${path}`;
}
