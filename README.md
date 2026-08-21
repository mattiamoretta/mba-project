# Turn-Up

Turn-Up is verified hiring infrastructure for Italian hospitality: a public product story at `/` and a guided, authenticated product experience at `/app`.

## Experience architecture

- `/` is the public marketing surface, written in Italian for workers and hiring teams.
- `/app` is dynamic and protected by dispatch-owned Sign in with ChatGPT.
- The app supports worker and employer perspectives, a first-run guided tour, explained matches, activity tracking, profile/account controls, and responsive navigation.
- Generated brand imagery and the social card live in `public/`.

Turn-Up facilitates verified matching and contractual clarity. The employer remains responsible for the employment relationship, signature, and mandatory government communications.

## Stack

- React 19.2 and Next 16.3 on the Vinext/Cloudflare Sites runtime
- Motion 13 for interaction and transition choreography
- Tailwind CSS 4.3 build pipeline with product-specific CSS tokens
- Lucide 1.33 for the interface icon system
- TypeScript 5.9

The runtime integration packages that are pinned by Sites remain on the platform-verified versions.

## Local checks

Node.js `>=22.13.0` is required.

```sh
npm run lint
npm test
```

`npm test` builds the deployable artifact and verifies the rendered Turn-Up metadata and primary marketing message. `npm run dev` starts the Vite/Vinext development server.

## Authentication

`app/chatgpt-auth.ts` contains the approved helpers for dispatch-owned ChatGPT sign-in. The protected route calls `requireChatGPTUser("/app")`, while the public landing remains anonymous-compatible. The dispatcher owns `/signin-with-chatgpt`, `/signout-with-chatgpt`, and `/callback`.

Never add custom implementations for those reserved routes or expose authentication headers to the client beyond the minimal display name and email passed by the server route.
