# erankawinda.github.io

Personal research portfolio for Eran Dodampe Gamage.

Built with Astro 7 and Tailwind CSS 4 for deployment on GitHub Pages.

[View the live portfolio](https://erankawinda.github.io/)

## Focus

The site presents work and research interests across:

- URL-only ad generation and efficient language-model tuning
- scientific machine learning interests
- particle-physics research interests
- climate and drought modelling
- Australian energy-grid analytics
- retrieval-augmented generation
- machine-learning and retrieval evaluation

## Tech stack

- Astro 7
- Tailwind CSS 4
- GitHub Pages

## Development

Use Node.js 24 or newer:

```sh
npm ci
npm run check
npm run dev
```

Create the same static production build used by GitHub Pages:

```sh
npm run build
```

The deployment workflow uses Node.js 24, installs the locked dependency graph,
checks the Astro source, and publishes the generated `dist/` directory.

## Repository map

| Path | Purpose |
|---|---|
| [`src/data/projects.ts`](src/data/projects.ts) | Grouped project summaries, related implementations, contribution descriptions, and links |
| [`src/pages/`](src/pages/) | Home, work, about, and contact pages |
| [`src/components/`](src/components/) | Shared project, timeline, heading, and tag components |
| [`src/layouts/BaseLayout.astro`](src/layouts/BaseLayout.astro) | Page layout, navigation, and metadata |
| [`src/styles/global.css`](src/styles/global.css) | Shared site styles |
| [`public/`](public/) | Static assets |
| [`astro.config.mjs`](astro.config.mjs) | Site URL and build configuration |

## Content and reuse

The profile text describes completed study and selected work; links to team
projects identify the contribution boundary. No open-source licence is granted
for this repository's source or personal content. Linked projects and external
assets remain subject to their own terms.

Keep project summaries consistent with the linked repository's reviewed results.
Describe research interests separately from implemented work, and retain data
and evaluation limits when updating results.

## Public project coverage

The Work page presents six projects: AutoGate-QLoRA, SPEI drought forecasting,
Australian electricity demand forecasting, Investor Assistant RAG evaluation,
the Global Energy Transition Dashboard, and the Fashion Store Review App.
Research and machine learning appear first, followed by applications and
visualisation. Homepage highlights draw from the same project data.

Private AutoGate research uses a contact link. Public projects link to their
repositories and, where available, a live application. Earlier ad-generation
prototypes, introductory exercises, and the portfolio itself are not featured
as separate projects.

Notes content and navigation have been removed. Former `/blog/` and
`/blog/hello/` addresses redirect to Work through Astro's static redirect pages.

## Public CV

The editable LaTeX source is [documents/academic-cv.tex](documents/academic-cv.tex). The website serves the compiled [academic CV](public/cv/Eran-Dodampe-Gamage-CV.pdf); update both files together when revising it. Compile the source with LuaLaTeX or pdfLaTeX in a temporary build directory.
