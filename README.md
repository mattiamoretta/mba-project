# Best MBA Project Ever

A polished React single-page app that showcases the BestMbaProjectEver talent marketplace concept. The project is built with Vite + Tailwind CSS and mirrors a mobile-first product mockup while remaining production ready.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173 to explore the mockup.

## Build

```bash
npm run build
```

The generated production bundle lives in `dist/`.

To refresh the static bundle that GitHub Pages serves from the `docs/` folder run:

```bash
npm run build:pages
```

This command writes the production build to `docs/` with the correct `/mba-project/` base path so it can be published directly from the main branch.

## Deploying to GitHub Pages

The build is configured to publish to the `/mba-project/` subdirectory that GitHub Pages uses for the project site.

### Option 1: Serve from the `docs/` folder on `main`

1. Run `npm run build:pages` to regenerate `docs/`.
2. Commit and push the updated `docs/` folder.
3. Configure GitHub Pages to use the `docs/` folder on the `main` branch as the publishing source.

### Option 2: Deploy to the `gh-pages` branch

```bash
npm run build
npm run deploy
```

The deploy script pushes the compiled `dist/` folder to the `gh-pages` branch using `gh-pages`.
