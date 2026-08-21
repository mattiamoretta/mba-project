# Turn-Up

An interactive React prototype of the hiring infrastructure for Italian HoReCa. Turn-Up combines a portable verified worker identity, deterministic real-time matching, and a native compliance journey for workers and employers.

The prototype includes:

- worker and employer experiences, switchable from the header;
- multilingual worker onboarding entry points;
- explainable matches based on declared role, location, availability, and badge criteria;
- credential verification and portable reputation;
- vacancy posting, candidate unlock, messaging, and confirmed-hire flow;
- CCNL-aware contract summaries, pre-employment reminders, and a transparent hiring trail.

All data and transactions are demonstrative. The prototype does not sign contracts, submit mandatory communications, or make automated hiring decisions.

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
