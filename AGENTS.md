# AGENTS.md

Marketing website for **Sunesis**. Next.js 16 (App Router) + React 19 + Tailwind 4, statically exported (`output: 'export'`) and deployed on Netlify. Bilingual: every route exists under `/en/…` and `/sl/…`.

See [README.md](README.md) for the full stack and project structure.

## Adding an Insights article

An article is **one Markdown file**. Add it, commit it, push it — the build does the rest. Never hand-edit anything under `src/content/insights/*.generated.ts`.

### 1. File name

```
src/content/insights/posts/YYYY-MM-DD-slug.md
```

- The **date prefix is the publish date**. It comes from the filename, not from the front matter.
- The **slug is the URL**: `2026-09-09-skupna-ai-platforma.md` → `/en/insights/skupna-ai-platforma/`.
- Use lowercase ASCII in the slug — letters, digits and hyphens only. No spaces, no Slovenian diacritics (`č`, `š`, `ž`), no underscores.
- The extension must be `.md` (`.markdown` is accepted for the legacy posts). A file that does not match this pattern is **silently skipped** with a warning in the build log — it will not appear on the site.

### 2. Front matter

Every file opens with a `---` fenced YAML block, before any body text:

```markdown
---
layout: post
title: 'Zakaj potrebujete skupno platformo za AI agente'
date: 2026-09-09
author: ezupancic
categories: [AgenticAI, Kumuluz]
tags: [AI, KumuluzAI, agenti]
---
```

| Field        | Required | Notes                                                              |
| ------------ | -------- | ------------------------------------------------------------------ |
| `layout`     | yes      | Always `post`. Vestigial Jekyll field, kept for consistency.       |
| `title`      | yes      | In double quotes. Escape any inner quotes as `\"`.                 |
| `date`       | yes      | `YYYY-MM-DD`, matching the filename. Cosmetic — the filename wins. |
| `author`     | yes      | A key from `src/content/insights/posts/authors.yml`.               |
| `author2`    | no       | Second author, same key format. Renders as "A & B".                |
| `categories` | yes      | Inline array. Must use the exact spellings below.                  |
| `tags`       | yes      | Inline array. Free-form; keep them short and reuse existing ones.  |

**Valid `author` keys** (see [authors.yml](src/content/insights/posts/authors.yml) for the full list): `ezupancic`, `gregorgabrovsek`, `rokra`, `matjazbj`, `tfaga`, `zvoneg`, `benjamink`, `mihaj`, `urbim`, `jmezna`. An unknown key does not fail the build — it is just capitalised and printed as-is, which looks wrong on the site.

**Valid `categories`** — exact spelling and casing, a post normally has two or more:

```
AgenticAI
Kumuluz
API & Integration
Cloud-native & DevOps
Open Source
Research & Innovation
Company
```

A misspelled category does not fail the build either; it silently creates a new filter tab on the Insights page. The list and its display order live in [src/content/insights/index.ts](src/content/insights/index.ts) — add a new category there (and its English and Slovenian label) before using it.

### 3. Body

```markdown
Uvodni odstavek. Ta postane izvleček na seznamu člankov.

<!--more-->

## Prvi razdelek

Vsebina…
```

- The text **above `<!--more-->`** becomes the listing excerpt, trimmed to 200 characters. Always include the marker — without it the excerpt is taken from the top of the whole article and usually reads badly.
- Start body headings at `##`. The `title` from the front matter is rendered as the page's `<h1>`; do not repeat it in the body.
- Standard GitHub-flavoured Markdown. Fenced code blocks with a language tag.
- Articles are written in one language and shown unchanged under both `/en/` and `/sl/` — there is no translation layer. Only the surrounding chrome is localised.

### 4. Images

Put image files in a folder named after the post slug:

```
public/images/insights/<post-slug>/
```

Grouping per post keeps generic filenames (`diagram.png`, `screenshot.png`) from colliding. Reference them from the Markdown with a root-absolute path — `public/` is served at the site root:

```markdown
![Anatomija AI agenta](/images/insights/skupna-ai-platforma/anatomija-agenta.png)
```

- Always write a real `alt` description; it is the only text a screen reader gets.
- The enforced CSP is `img-src 'self'` — **images must be local files**. Hotlinked external images will not load.
- Do not add a header or cover image. Each post's card thumbnail is assigned automatically from `src/components/thumbnails/` by hashing the slug, and stays fixed for the life of the post.

Legacy posts reference `{{site.baseurl}}/assets/images/…`; the generator strips that prefix at build time. Leave those alone — the path above is for new posts.

### 5. Commit

Commit **only** the Markdown file and any images:

```bash
git add src/content/insights/posts/YYYY-MM-DD-slug.md public/images/insights/slug/
```

`src/content/insights/posts.generated.ts` and `bodies.generated.ts` are build output and are git-ignored. They are regenerated by `npm run insights`, which runs automatically before `dev`, `build` and `lint`, and on Netlify via `npm run build`.

## Commands

```bash
npm run dev       # dev server at localhost:3000 (regenerates insights on start)
npm run build     # static export to out/
npm run insights  # regenerate insights bundles; prints category counts and warns
                  # about posts missing an excerpt or categories
npm run lint      # eslint
npm run format    # prettier --write
```

Run `npm run lint` and `npm run format:check` before committing. The dev server regenerates insights once at startup — restart it after editing a post's front matter.
