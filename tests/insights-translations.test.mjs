import test from 'node:test'
import assert from 'node:assert/strict'
import { execFileSync } from 'node:child_process'
import { readFileSync } from 'node:fs'
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
