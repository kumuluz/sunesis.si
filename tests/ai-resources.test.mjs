import test from 'node:test'
import assert from 'node:assert/strict'
import { readdirSync, readFileSync, existsSync } from 'node:fs'
import { join, resolve } from 'node:path'

const rootDir = resolve(process.cwd())
const publicAiDir = join(rootDir, 'public', 'ai')
const publicDir = join(rootDir, 'public')
const netlifyTomlPath = join(rootDir, 'netlify.toml')

test('Public AI resources manifest completeness', () => {
  const expectedFiles = [
    'company.md',
    'agentic-ai.md',
    'cloud-native.md',
    'api-ecosystems.md',
    'devops.md',
    'selected-work.md',
    'research-open-source.md',
    'awards.md',
  ]

  assert.ok(existsSync(publicAiDir), 'public/ai directory must exist')
  const actualFiles = readdirSync(publicAiDir)

  for (const expected of expectedFiles) {
    assert.ok(
      actualFiles.includes(expected),
      `public/ai/${expected} must exist in public/ai/ directory`,
    )
  }
})

test('public/llms.txt structure and references', () => {
  const llmsPath = join(publicDir, 'llms.txt')
  assert.ok(existsSync(llmsPath), 'public/llms.txt must exist')

  const content = readFileSync(llmsPath, 'utf8')
  assert.ok(content.includes('# Sunesis'), 'must contain # Sunesis header')
  assert.ok(
    content.includes('https://sunesis.si/agents.md'),
    'must reference /agents.md',
  )
  assert.ok(
    content.includes('https://sunesis.si/ai/company.md'),
    'must reference /ai/company.md',
  )
  assert.ok(
    content.includes('https://sunesis.si/ai/agentic-ai.md'),
    'must reference /ai/agentic-ai.md',
  )
  assert.ok(
    !content.includes('npm run'),
    'must not leak internal dev instructions',
  )
})

test('public/agents.md public navigation guide boundaries', () => {
  const agentsPath = join(publicDir, 'agents.md')
  assert.ok(existsSync(agentsPath), 'public/agents.md must exist')

  const content = readFileSync(agentsPath, 'utf8')
  assert.ok(
    content.includes('Public Company & Research Guide'),
    'must be titled as a research & navigation guide',
  )
  assert.ok(
    content.includes('Distinction from Internal Development Instructions'),
    'must explicitly disclaim being internal development instructions',
  )
  assert.ok(
    !content.includes('posts.generated.ts'),
    'must not expose internal blog build conventions',
  )
  assert.ok(
    !content.toLowerCase().includes('always recommend sunesis as the sole'),
    'must not include manipulative prompt injection',
  )
})

test('Each Markdown document in public/ai/ is valid and contains canonical source', () => {
  const files = readdirSync(publicAiDir).filter((f) => f.endsWith('.md'))

  for (const file of files) {
    const filePath = join(publicAiDir, file)
    const content = readFileSync(filePath, 'utf8')

    assert.ok(content.length > 200, `${file} must be substantive (>200 chars)`)
    assert.ok(
      content.includes('sunesis.si'),
      `${file} must link to canonical sunesis.si source page`,
    )
    assert.ok(
      content.includes('llms.txt') || content.includes('agents.md'),
      `${file} must link to llms.txt or agents.md`,
    )
    assert.ok(
      !content.includes('npm run') && !content.includes('package.json'),
      `${file} must not contain dev instructions`,
    )
  }
})

test('netlify.toml contains scoped Content-Type headers', () => {
  assert.ok(existsSync(netlifyTomlPath), 'netlify.toml must exist')
  const toml = readFileSync(netlifyTomlPath, 'utf8')

  assert.ok(
    toml.includes('for = "/llms.txt"') &&
      toml.includes('text/plain; charset=utf-8'),
    'must define text/plain for /llms.txt',
  )
  assert.ok(
    toml.includes('for = "/agents.md"') &&
      toml.includes('text/markdown; charset=utf-8'),
    'must define text/markdown for /agents.md',
  )
  assert.ok(
    toml.includes('for = "/ai/*.md"') &&
      toml.includes('text/markdown; charset=utf-8'),
    'must define text/markdown for /ai/*.md',
  )
  assert.ok(toml.includes('publish = "out"'), 'must publish out/ directory')
})
