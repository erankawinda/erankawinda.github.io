# Eran Gamage Portfolio

Personal portfolio website for Eran Gamage, built with Astro and Tailwind CSS.

The site is intentionally minimal: dark background, compact navigation, simple cards, and content focused on applied AI, retrieval systems, NLP evaluation, energy analytics, privacy-preserving retrieval, and climate modelling.

## Stack

- Astro 5
- Tailwind CSS 4
- Vite
- GitHub Pages

## Project Structure

- `src/layouts/BaseLayout.astro` - shared HTML shell, navigation, footer, and font loading
- `src/styles/global.css` - Tailwind import, theme variables, reusable classes, and global styles
- `src/pages/index.astro` - homepage
- `src/pages/projects.astro` - selected project summaries
- `src/pages/about.astro` - background and research interests
- `src/pages/contact.astro` - contact links
- `src/pages/blog/` - short notes

## Commands

Install dependencies:

```sh
npm install
```

Start the local development server:

```sh
npm run dev
```

Build the static site:

```sh
npm run build
```

Preview the production build locally:

```sh
npm run preview
```

## Deployment

The Astro config sets the site URL to `https://erankawinda.github.io`. The repository is intended to deploy through GitHub Pages.
