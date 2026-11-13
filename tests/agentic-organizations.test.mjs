import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'

const locales = [
  {
    language: 'en',
    heading: 'Digital workers. Autonomous processes. AgenticAI organizations.',
    article: 'autonomous-agenticai-organisation',
  },
  {
    language: 'sl',
    heading: 'Digitalni delavci. Avtonomni procesi. AgenticAI organizacije.',
    article: 'avtonomna-agenticai-organizacija',
  },
]

function page(path) {
  const file = join('out', path, 'index.html')
  assert.ok(existsSync(file), `Missing ${file}; run npm run build first`)
  return readFileSync(file, 'utf8')
}

function links(html) {
  return [...html.matchAll(/<a\b[^>]*\bhref="([^"]*)"/g)].map(
    (match) => match[1],
  )
}

test('homepages link all six expertise cards to their own exported pages', () => {
  const slugs = [
    'agentic-ai',
    'agentic-organizations',
    'digital-solutions',
    'cloud-native-edge',
    'api-ecosystems-integrations',
    'devops-platform-engineering',
  ]

  for (const { language, article } of locales) {
    const html = page(language)
    const expertise = html.match(
      /<section\b[^>]*\bid="expertise"[^>]*>([\s\S]*?)<\/section>/,
    )?.[1]
    assert.ok(expertise, `${language} expertise section must render`)
    const cards = [...expertise.matchAll(/<article\b[\s\S]*?<\/article>/g)]
    assert.equal(cards.length, 6)
    assert.deepEqual(
      cards.flatMap(([card]) => links(card)),
      slugs.map((slug) => `/${language}/expertise/${slug}/`),
    )
    for (const slug of slugs) page(`${language}/expertise/${slug}`)
    assert.ok(links(html).includes(`/${language}/insights/${article}/`))
  }
})

test('new expertise exports localized content, discovery metadata and service schema', () => {
  const sitemap = readFileSync('out/sitemap.xml', 'utf8')
  for (const { language, heading } of locales) {
    const path = `/${language}/expertise/agentic-organizations/`
    const url = `https://sunesis.si${path}`
    const html = page(path)
    assert.equal(html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1], heading)
    assert.ok(html.includes(`<link rel="canonical" href="${url}"`))
    for (const alternate of ['en', 'sl']) {
      assert.ok(
        html.includes(
          `hrefLang="${alternate}" href="https://sunesis.si/${alternate}/expertise/agentic-organizations/"`,
        ),
        `${language} page must expose the ${alternate} alternate`,
      )
    }
    const schemas = [
      ...html.matchAll(
        /<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g,
      ),
    ].flatMap((match) => JSON.parse(match[1]))
    assert.ok(
      schemas.some(
        (schema) =>
          schema['@type'] === 'Service' && schema['@id'] === `${url}#service`,
      ),
    )
    assert.ok(sitemap.includes(`<loc>${url}</loc>`))
  }
})

test('offerings, articles and contact form have reciprocal locale-correct links', () => {
  for (const { language, article } of locales) {
    const offeringPath = `/${language}/expertise/agentic-organizations/`
    const aiPath = `/${language}/expertise/agentic-ai/`
    const articlePath = `/${language}/insights/${article}/`
    const offering = page(offeringPath)
    const aiMain = page(aiPath).match(/<main\b[\s\S]*?<\/main>/)?.[0]
    const articleMain = page(articlePath).match(/<main\b[\s\S]*?<\/main>/)?.[0]
    assert.ok(aiMain && articleMain)
    assert.ok(links(aiMain).includes(offeringPath))
    assert.ok(links(articleMain).includes(offeringPath))
    assert.ok(links(offering).includes(aiPath))
    assert.ok(links(offering).includes(articlePath))
    assert.ok(links(offering).includes(`/${language}/#contact`))
    assert.ok(page(language).includes('id="contact"'))
  }
})
