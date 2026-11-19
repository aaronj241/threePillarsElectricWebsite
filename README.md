# Three Pillar Electric

An Astro website for Three Pillar Electric’s residential, commercial, EV charging, and solar electrical services.

## Local development

Use Node.js 22.23.4 or newer.

```sh
npm ci
npm run dev
```

Run `npm run build` to generate the static site in `dist/` and `npm run preview` to preview that build.

## GitHub Pages

In the GitHub repository, open **Settings → Pages** and select **GitHub Actions** as the publishing source. Push the website source and workflow to `main`. The [deployment workflow](.github/workflows/deploy-pages.yml) builds and publishes the site on every push to `main`. You can also run it manually from the **Actions** tab using the `main` branch.

The workflow gets the domain and base path from GitHub Pages, so links and images work under the repository URL or a configured custom domain.

## Project structure

- `src/pages/index.astro` — Homepage and section layout.
- `src/pages/project.astro` — Project planner page.
- `src/components/` — Brand, navigation, service cards, icons, and project planner.
- `src/content/company.ts` — Company information, contact settings, services, and approach.
- `src/layouts/SiteLayout.astro` — Shared page document, fonts, and metadata.
- `src/styles/global.css` — Design tokens, layout, and responsive styles.
- `public/images/` — Web-ready crops and compressed images used by the site.
- `imageAssets/` — Original supplied logos and stock photos.

The project request form displays a confirmation preview in the visitor’s browser. Add verified business contact details to `company.contact` in `src/content/company.ts` to show email and phone links beside it.
