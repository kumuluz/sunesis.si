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

| Script | Description |
| --- | --- |
| `npm run dev` | Start the Next.js dev server |
| `npm run build` | Build the static export (output in `out/`) |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npm run lint:fix` | Run ESLint with `--fix` |
| `npm run format` | Format with Prettier |
| `npm run format:check` | Check formatting without writing |
| `npm run doctor` | Run [react-doctor](https://www.npmjs.com/package/react-doctor) diagnostics |

## Internationalization

The site ships in two languages, keyed by the first path segment:

- `/en/…` — English (default)
- `/sl/…` — Slovenian

Copy lives in [src/content/](src/content/), split per language (`en.ts`, `sl.ts`) and per section. Routing between locales and named routes is handled by [src/lib/router.ts](src/lib/router.ts).

## Routes

The App Router pages under [app/](app/) are thin wrappers; page content and layout live in [src/views/](src/views/). Top-level routes:

- `/[lang]/` — landing page
- `/[lang]/expertise/[slug]/` — expertise areas (AgenticAI, cloud-native & edge, API ecosystems, DevOps & platform engineering, digital solutions)
- `/[lang]/references/[slug]/` — references (selected work, clients & industries, research & innovation, open source)
- `/[lang]/company/[slug]/` — company (about, awards, careers)
- `/[lang]/kumuluz/` — Kumuluz platform

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
