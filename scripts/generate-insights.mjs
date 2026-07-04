import { readdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs'
import { join, dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { marked } from 'marked'

const HERE = dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = resolve(HERE, '..')

const CONTENT_DIR = resolve(REPO_ROOT, 'src', 'content', 'insights')
const postsDir = join(CONTENT_DIR, 'posts')

if (!existsSync(postsDir)) {
  console.error(`Post sources not found at ${postsDir}`)
  process.exit(1)
}

function parseAuthors() {
  const file = join(postsDir, 'authors.yml')
  const map = {}
  if (!existsSync(file)) return map
  const lines = readFileSync(file, 'utf8').split('\n')
  let current = null
  for (const line of lines) {
    if (/^#/.test(line.trim())) continue
    const top = line.match(/^([A-Za-z0-9_.-]+):\s*$/)
    if (top) {
      current = top[1]
      continue
    }
    const name = line.match(/^\s+name:\s*(.+?)\s*$/)
    if (name && current) {
      map[current] = name[1].replace(/^["']|["']$/g, '').trim()
    }
  }
  return map
}

const authorNames = parseAuthors()

function authorLabel(username) {
  if (!username) return 'Sunesis'
  const key = username.trim()
  if (authorNames[key]) return authorNames[key]
  return key.charAt(0).toUpperCase() + key.slice(1)
}

function splitFrontmatter(raw) {
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/)
  if (!match) return { fm: '', body: raw }
  return { fm: match[1], body: match[2] }
}

function fmValue(fm, key) {
  const m = fm.match(new RegExp(`^${key}:\\s*(.+?)\\s*$`, 'm'))
  return m ? m[1].trim() : ''
}

function unquote(value) {
  return value
    .replace(/^["']|["']$/g, '')
    .replace(/\\"/g, '"')
    .trim()
}

function parseCategories(fm) {
  const inline = fm.match(/^categories:\s*\[(.*)\]\s*$/m)
  if (inline) {
    return inline[1]
      .split(',')
      .map((c) => c.trim())
      .filter(Boolean)
  }
  const block = fm.match(/^categories:\s*\n((?:\s*-\s*.+\n?)+)/m)
  if (block) {
    return block[1]
      .split('\n')
      .map((l) => l.replace(/^\s*-\s*/, '').trim())
      .filter(Boolean)
  }
  return []
}

function buildExcerpt(body) {
  let text = body
  const moreIndex = text.indexOf('<!--more-->')
  if (moreIndex !== -1) text = text.slice(0, moreIndex)

  text = text
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/<!--[\s\S]*?-->/g, ' ')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, ' ')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/^\s{0,3}#{1,6}\s+/gm, '')
    .replace(/^\s{0,3}>\s?/gm, '')
    .replace(/^\s{0,3}[-*+]\s+/gm, '')
    .replace(/[*_~]/g, '')
    .replace(/\s+/g, ' ')
    .trim()

  const LIMIT = 200
  if (text.length <= LIMIT) return text
  const cut = text.slice(0, LIMIT)
  const lastSpace = cut.lastIndexOf(' ')
  return `${cut.slice(0, lastSpace > 0 ? lastSpace : LIMIT).trim()}…`
}

const SITE_PATH_RE = /\{\{\s*site\.(?:baseurl|url)\s*\}\}/g

const BLOG_PERMALINK_RE =
  /https?:\/\/blog\.sunesis\.si\/(?:[a-z0-9-]+\/)*\d{4}\/\d{2}\/\d{2}\/([a-zA-Z0-9-]+)(?:\.html)?/g

function bodyToHtml(body) {
  const markdown = body
    .replace(/<!--more-->/g, '')
    .replace(
      /\{%\s*highlight\s*([a-zA-Z0-9]*)\s*(?:linenos)?\s*%\}/g,
      '\n```$1\n',
    )
    .replace(/\{%\s*endhighlight\s*%\}/g, '\n```\n')
    .replace(SITE_PATH_RE, '')
    .replace(BLOG_PERMALINK_RE, '/en/insights/$1/')

  return marked
    .parse(markdown, { gfm: true, breaks: false, async: false })
    .trim()
}

function readingMinutes(html) {
  const words = html
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .filter(Boolean).length
  return Math.max(1, Math.round(words / 200))
}

const files = readdirSync(postsDir).filter((f) => /\.(md|markdown)$/i.test(f))

const posts = []
const bodies = []
for (const file of files) {
  const nameMatch = file.match(
    /^(\d{4})-(\d{1,2})-(\d{1,2})-(.+)\.(md|markdown)$/i,
  )
  if (!nameMatch) {
    console.warn(`Skipping unrecognised filename: ${file}`)
    continue
  }
  const [, year, rawMonth, rawDay, slug] = nameMatch
  const month = rawMonth.padStart(2, '0')
  const day = rawDay.padStart(2, '0')
  const raw = readFileSync(join(postsDir, file), 'utf8')
  const { fm, body } = splitFrontmatter(raw)

  const title = unquote(fmValue(fm, 'title')) || slug.replace(/-/g, ' ')
  const categories = parseCategories(fm)
  const author = authorLabel(fmValue(fm, 'author'))
  const author2 = fmValue(fm, 'author2')
  const authors = author2 ? `${author} & ${authorLabel(author2)}` : author
  const date = `${year}-${month}-${day}`
  const excerpt = buildExcerpt(body)
  const bodyHtml = bodyToHtml(body)
  const minutes = readingMinutes(bodyHtml)

  posts.push({ slug, title, date, authors, categories, excerpt, minutes })
  bodies.push([slug, bodyHtml])
}

posts.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0))

const header = `import type { InsightPost } from '../../views/insights/types'

export const insightPosts: InsightPost[] = ${JSON.stringify(posts, null, 2)}
`

const outFile = join(
  REPO_ROOT,
  'src',
  'content',
  'insights',
  'posts.generated.ts',
)
writeFileSync(outFile, header)

const bodyMap = Object.fromEntries(bodies)
const bodiesHeader = `export const articleBodies: Record<string, string> = ${JSON.stringify(bodyMap, null, 2)}
`
const bodiesFile = join(
  REPO_ROOT,
  'src',
  'content',
  'insights',
  'bodies.generated.ts',
)
writeFileSync(bodiesFile, bodiesHeader)

const categoryCounts = {}
for (const p of posts)
  for (const c of p.categories) categoryCounts[c] = (categoryCounts[c] || 0) + 1

console.log(`Wrote ${posts.length} posts -> ${outFile}`)
console.log(`Wrote ${bodies.length} bodies -> ${bodiesFile}`)
console.log('Categories:', categoryCounts)
const missing = posts.filter((p) => !p.excerpt || p.categories.length === 0)
if (missing.length) {
  console.log(`\n${missing.length} post(s) with missing excerpt or categories:`)
  for (const p of missing)
    console.log(
      `  - ${p.date} ${p.slug} (cats: ${p.categories.join(', ') || 'none'})`,
    )
}
