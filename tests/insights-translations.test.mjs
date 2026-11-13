import test from 'node:test'
import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { existsSync, readFileSync } from 'node:fs'
import {
  insightPostsForLanguage,
  insightTranslation,
} from '../src/content/insights/translations.ts'

execFileSync(process.execPath, ['scripts/generate-insights.mjs'])
const generated = readFileSync(
  new URL('../src/content/insights/posts.generated.ts', import.meta.url),
  'utf8',
)
const posts = JSON.parse(generated.slice(generated.indexOf('=') + 1))
const sl = posts.find(
  (post) => post.slug === 'avtonomna-agenticai-organizacija',
)
const en = posts.find(
  (post) => post.slug === 'autonomous-agenticai-organisation',
)

const translatedArchive = [
  ['duet-odeon-open-call', 'duet-odeon-napovedovanje-soncne-energije'],
  [
    'rikoai-agentic-system-for-complex-technology-projects',
    'rikoai-agentni-sistem-za-kompleksne-tehnoloske-projekte',
  ],
  [
    'si-geos-ai-colleague-for-official-data',
    'si-geos-ai-sodelavec-za-uradne-podatke',
  ],
  ['shared-ai-agent-platform', 'skupna-ai-platforma'],
  ['beyond-chatbots-multi-agent-architecture', 'agentna-arhitektura'],
  ['kumuluz-api-mcp-server', 'kumuluz-api-mcp'],
  ['insurance-digitalisation-with-kumuluzapi', 'api-sistemi-zavarovalnica'],
  ['integrating-energy-devices-with-ems-using-kumuluzapi', 'api-sistemi-ems'],
  ['crowdsensing-in-marketing', 'crowdsensing-marketing'],
  [
    'forecasting-ev-energy-consumption-with-kumuluzcrowdsensing',
    'napoved-porabe-energije-ev',
  ],
  ['five-lessons-building-ai-solutions-azure-ntk2024', 'ai-in-azure-ntk2024'],
]

test('translated articles generate reciprocal links without changing their URLs', () => {
  assert.deepEqual(insightTranslation(sl), { language: 'en', slug: en.slug })
  assert.deepEqual(insightTranslation(en), { language: 'sl', slug: sl.slug })
  assert.equal(sl.authors, 'Matjaz')
  assert.equal(en.authors, 'Matjaz')
})

test('each listing selects one card in the current language before pagination and topic filtering', () => {
  for (const [language, selected, excluded] of [
    ['sl', sl, en],
    ['en', en, sl],
  ]) {
    const listing = insightPostsForLanguage(posts, language)
    assert.ok(listing.includes(selected))
    assert.ok(!listing.includes(excluded))
    const topic = listing.filter((post) =>
      post.categories.includes('AgenticAI'),
    )
    assert.ok(topic.includes(selected))
    assert.ok(!topic.includes(excluded))
    assert.equal(
      listing.filter((post) => post.slug === sl.slug || post.slug === en.slug)
        .length,
      1,
    )
    assert.deepEqual(
      listing.filter((post) => !post.translations),
      posts.filter((post) => !post.translations),
    )
  }
})

test('untranslated articles remain visible even with an explicit language or an incomplete translation group', () => {
  const legacy = posts.find((post) => !post.language)
  const singleLanguage = { ...sl, translations: { sl: sl.slug } }
  const unlinked = { ...en, translations: undefined }
  const originals = [legacy, singleLanguage, unlinked]
  for (const language of ['en', 'sl']) {
    assert.deepEqual(insightPostsForLanguage(originals, language), originals)
  }
  for (const post of originals) {
    assert.equal(insightTranslation(post), undefined)
  }
})

test('the first page contains twelve distinct articles in the selected language and chronological order', () => {
  for (const [language, latest, index] of [
    ['en', en, 0],
    ['sl', sl, 1],
  ]) {
    const expected = [
      latest.slug,
      ...translatedArchive.map((pair) => pair[index]),
    ]
    const firstPage = insightPostsForLanguage(posts, language).slice(0, 12)
    assert.deepEqual(
      firstPage.map((post) => post.slug),
      expected,
    )
    assert.ok(firstPage.every((post) => post.language === language))
    assert.deepEqual(
      firstPage.map((post) => post.date),
      firstPage
        .map((post) => post.date)
        .sort()
        .reverse(),
    )
    assert.equal(firstPage.at(-1).date, '2024-09-19')

    const html = readFileSync(`out/${language}/insights/index.html`, 'utf8')
    const cards = [...html.matchAll(/<article\b[\s\S]*?<\/article>/g)]
    assert.equal(cards.length, 12)
    assert.deepEqual(
      cards.map(([card]) => card.match(/href="([^"]+)"/)?.[1]),
      expected.map((slug) => `/${language}/insights/${slug}/`),
    )
  }
})

test('all eleven archive translations export full articles, reciprocal links, SEO alternates and local images', () => {
  const sitemap = readFileSync('out/sitemap.xml', 'utf8')
  for (const [enSlug, slSlug] of translatedArchive) {
    const pair = [enSlug, slSlug].map((slug) =>
      posts.find((post) => post.slug === slug),
    )
    assert.ok(pair.every(Boolean), `Missing translation for ${enSlug}`)
    assert.equal(pair[0].date, pair[1].date)
    assert.equal(pair[0].authors, pair[1].authors)
    assert.deepEqual(pair[0].categories, pair[1].categories)

    for (const [index, post] of pair.entries()) {
      const other = pair[1 - index]
      const path = `/${post.language}/insights/${post.slug}/`
      const url = `https://sunesis.si${path}`
      const html = readFileSync(`out${path}index.html`, 'utf8')
      const article = html.match(/<article\b[\s\S]*?<\/article>/)?.[0]
      assert.ok(article, `Missing article at ${path}`)
      assert.ok(article.includes(`>${post.title}</h1>`))
      assert.ok(article.includes(`lang="${post.language}"`))
      assert.ok(
        article.includes(`href="/${other.language}/insights/${other.slug}/"`),
      )
      assert.deepEqual(insightTranslation(post), {
        language: other.language,
        slug: other.slug,
      })
      assert.ok(html.includes(`<link rel="canonical" href="${url}"`))
      for (const alternate of pair) {
        assert.ok(
          html.includes(
            `hrefLang="${alternate.language}" href="https://sunesis.si/${alternate.language}/insights/${alternate.slug}/"`,
          ),
        )
      }
      assert.ok(sitemap.includes(`<loc>${url}</loc>`))
      for (const [, src] of article.matchAll(/<img\b[^>]*src="([^"]+)"/g)) {
        assert.ok(src.startsWith('/') && !src.startsWith('//'))
        assert.ok(existsSync(`out${src}`), `Missing image ${src}`)
      }
      for (const locale of ['en', 'sl']) {
        assert.ok(
          existsSync(`out/${locale}/insights/${post.slug}/index.html`),
          `Existing URL must remain available: ${locale}/${post.slug}`,
        )
      }
    }
  }
})
