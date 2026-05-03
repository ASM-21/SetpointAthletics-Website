# Setpoint Athletics — Website

Marketing/info site for Setpoint Athletics, a startup building smart insoles for volleyball. Single-page Next.js app with a lightweight markdown-backed updates log.

## Stack

- Next.js 15 (App Router)
- React 18
- Tailwind CSS 4
- Markdown updates rendered with `markdown-to-jsx`

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Edit content

- **Hero, features, contact copy** → `src/app/page.jsx`
- **Navigation links** → `src/components/Nav.jsx`
- **Post a new update** → drop a new `.md` file into `content/updates/`:

  ```md
  ---
  title: Prototype v2 on the test bench
  date: 2026-05-12
  ---

  Short write-up in markdown. Entries are sorted newest-first by `date`.
  ```

## Deploy (Vercel)

1. Push this repo to GitHub.
2. Go to https://vercel.com/new and import the repo.
3. Framework auto-detects as Next.js — defaults are correct. Click Deploy.
4. Each push to `main` deploys to production; PRs get preview URLs.

No environment variables are required.

## Project layout

```
content/updates/      markdown log entries (one file per update)
src/app/              Next.js App Router (layout, home page)
src/components/       Nav, Hero, Features, Updates, Contact, Footer, Button
styles/globals.css    Tailwind + base styles
```
