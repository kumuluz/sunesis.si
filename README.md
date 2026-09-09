# sunesis.si

Marketing website for **Sunesis** — a Slovenian enterprise software engineering company. A bilingual (English / Slovenian) site built with Next.js and statically exported to Netlify.

## Tech stack

- **[Next.js 16](https://nextjs.org/)** (App Router) with static HTML export (`output: 'export'`)
- **React 19** + **TypeScript**
- **[Tailwind CSS 4](https://tailwindcss.com/)** (via `@tailwindcss/postcss`)
- **[Motion](https://motion.dev/)** for animation
- **[three.js](https://threejs.org/)** + **[@firecms/neat](https://neat.firecms.co/)** for the animated background
- **[lucide-react](https://lucide.dev/)** icons
- ESLint + Prettier, deployed on **Netlify**

## Getting started

```bash
npm install
npm run dev
```

The dev server runs at [http://localhost:3000](http://localhost:3000). The bare root redirects to the default English locale (`/en/`).

### Scripts

| Script                 | Description                                                                |
| ---------------------- | -------------------------------------------------------------------------- |
| `npm run dev`          | Start the Next.js dev server                                               |
| `npm run build`        | Build the static export (output in `out/`)                                 |
| `npm run start`        | Serve the production build                                                 |
| `npm run lint`         | Run ESLint                                                                 |
| `npm run lint:fix`     | Run ESLint with `--fix`                                                    |
| `npm run format`       | Format with Prettier                                                       |
| `npm run format:check` | Check formatting without writing                                           |
| `npm run insights`     | Regenerate insights metadata and body bundles (runs automatically)         |
| `npm run doctor`       | Run [react-doctor](https://www.npmjs.com/package/react-doctor) diagnostics |

## Internationalization

The site ships in two languages, keyed by the first path segment:

- `/en/…` — English (default)
- `/sl/…` — Slovenian

Copy lives in [src/content/](src/content/), split per language (`en.ts`, `sl.ts`) and per section. Routing between locales and named routes is handled by [src/lib/router.ts](src/lib/router.ts).

### Insights posts

To publish a post, add a `.md` (or `.markdown`) file to [src/content/insights/posts/](src/content/insights/posts/) and commit it. That is the whole job — `npm run insights` runs automatically before `dev`, `build` and `lint`, and Netlify's build command goes through `npm run build`, so the post is live on the next deploy.

The filename carries the publish date and the URL, and must match `YYYY-MM-DD-slug.md`; files that don't are skipped with a warning. Front matter:

```markdown
---
layout: post
title: 'Naslov članka'
date: 2026-09-09
author: ezupancic
categories: [AgenticAI, Kumuluz]
tags: [AI, KumuluzAI, agenti]
---

Intro paragraph — this becomes the listing excerpt.

<!--more-->

## First section
```

- `author` is a key from [authors.yml](src/content/insights/posts/authors.yml); add `author2` for a co-author.
- `categories` must come from the taxonomy in [src/content/insights/index.ts](src/content/insights/index.ts): `AgenticAI`, `Kumuluz`, `API & Integration`, `Cloud-native & DevOps`, `Open Source`, `Research & Innovation`, `Company`. A misspelling silently creates a new filter tab.
- Everything above `<!--more-->` becomes the 200-character excerpt.
- Images go in `public/assets/images/posts-<slug>/` and may keep the Jekyll `{{site.baseurl}}` prefix; the generator strips it.

A card thumbnail is assigned automatically from [src/components/thumbnails/](src/components/thumbnails/) by hashing the slug, so a post keeps the same image for its lifetime and no image repeats within a page of results. Adding a post never changes an existing post's thumbnail.

`posts.generated.ts` and `bodies.generated.ts` are build output and are git-ignored — never commit them. The generated split is what keeps the article HTML out of the listing page's client bundle.

## Routes

The App Router pages under [app/](app/) are thin wrappers; page content and layout live in [src/views/](src/views/). Top-level routes:

- `/[lang]/` — landing page
- `/[lang]/expertise/[slug]/` — expertise areas (AgenticAI, cloud-native & edge, API ecosystems, DevOps & platform engineering, digital solutions)
- `/[lang]/references/[slug]/` — references (selected work, clients & industries, research & innovation, open source)
- `/[lang]/company/[slug]/` — company (about, awards, careers)

Kumuluz is linked as an external product site at `https://kumuluz.com`, not as a local page.

## Project structure

```
app/                 Next.js App Router entry points (routing + metadata only)
  [lang]/            Locale-scoped routes
  robots.ts          robots.txt generation
  sitemap.ts         sitemap.xml generation
src/
  components/        Shared UI (header, footer, cards, icons, background, ...)
  content/           Bilingual copy, organized per section
  lib/               Routing, SEO metadata, structured data, site constants
  views/             Page compositions and their sections
public/              Static assets
next.config.ts       Static export config (trailing slashes, unoptimized images)
netlify.toml         Build + edge redirect config
```

## SEO

Metadata, canonical URLs, JSON-LD structured data, sitemap and robots are generated from shared constants in [src/lib/site.ts](src/lib/site.ts) and helpers in [src/lib/metadata.ts](src/lib/metadata.ts) and [src/lib/structured-data.ts](src/lib/structured-data.ts).

## Deployment

Deployed on **Netlify** as a static site:

- Build command: `next build`
- Publish directory: `out`
- A CDN-edge redirect sends `/` → `/en/` (static export has no server/middleware)

See [netlify.toml](netlify.toml) for details.
