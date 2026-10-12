#!/usr/bin/env node

/**
 * Build verification script for public AI resources.
 * Validates that static export artifacts in `out/` exist, are non-empty,
 * are served as Markdown / plain text rather than HTML, contain required
 * English markers, have valid links, and do not leak internal dev instructions.
 */

import { readdirSync, readFileSync, existsSync, statSync } from 'node:fs'
import { join, resolve } from 'node:path'

const rootDir = resolve(process.cwd())
const outDir = join(rootDir, 'out')
const publicDir = join(rootDir, 'public')
const publicAiDir = join(publicDir, 'ai')
const outAiDir = join(outDir, 'ai')

console.log('--- Verifying Public AI Resources in out/ ---')

if (!existsSync(outDir)) {
  console.error(`ERROR: Output directory does not exist: ${outDir}`)
  console.error('Run "npm run build" before running this verification script.')
  process.exit(1)
}

let errors = 0

function fail(msg) {
  console.error(`  FAIL: ${msg}`)
  errors++
}

function pass(msg) {
  console.log(`  PASS: ${msg}`)
}

// 1. Verify llms.txt in out/
const llmsPath = join(outDir, 'llms.txt')
if (!existsSync(llmsPath)) {
  fail('out/llms.txt does not exist')
} else {
  const content = readFileSync(llmsPath, 'utf8')
  if (content.length < 100) {
    fail('out/llms.txt is too short or empty')
  } else if (
    content.startsWith('<!DOCTYPE html') ||
    content.includes('<html')
  ) {
    fail('out/llms.txt contains HTML instead of plain text / markdown')
  } else if (!content.includes('# Sunesis')) {
    fail('out/llms.txt missing "# Sunesis" header')
  } else if (!content.includes('https://sunesis.si/agents.md')) {
    fail('out/llms.txt missing link to /agents.md')
  } else if (!content.includes('https://sunesis.si/ai/company.md')) {
    fail('out/llms.txt missing link to /ai/company.md')
  } else if (
    content.includes('npm run') ||
    content.includes('AGENTS.md conventions')
  ) {
    fail('out/llms.txt contains development instructions')
  } else {
    pass(`out/llms.txt verified (${statSync(llmsPath).size} bytes)`)
  }
}

// 2. Verify agents.md in out/
const agentsPath = join(outDir, 'agents.md')
if (!existsSync(agentsPath)) {
  fail('out/agents.md does not exist')
} else {
  const content = readFileSync(agentsPath, 'utf8')
  if (content.length < 500) {
    fail('out/agents.md is too short or empty')
  } else if (
    content.startsWith('<!DOCTYPE html') ||
    content.includes('<html')
  ) {
    fail('out/agents.md contains HTML instead of markdown')
  } else if (!content.includes('Public Company & Research Guide')) {
    fail('out/agents.md missing public research guide title')
  } else if (
    !content.includes('Distinction from Internal Development Instructions')
  ) {
    fail('out/agents.md missing explicit non-development disclaimer')
  } else if (
    content.includes('posts.generated.ts') ||
    content.includes('npm run insights')
  ) {
    fail('out/agents.md exposes internal repository instructions')
  } else {
    pass(`out/agents.md verified (${statSync(agentsPath).size} bytes)`)
  }
}

// 3. Dynamically discover all markdown files in public/ai/ and ensure every one is in out/ai/
if (!existsSync(publicAiDir)) {
  fail('public/ai directory does not exist')
} else {
  const publicFiles = readdirSync(publicAiDir).filter((f) => f.endsWith('.md'))
  if (publicFiles.length === 0) {
    fail('No markdown files found in public/ai')
  }

  const expectedCoreFiles = [
    'company.md',
    'agentic-ai.md',
    'cloud-native.md',
    'api-ecosystems.md',
    'devops.md',
    'selected-work.md',
    'research-open-source.md',
    'awards.md',
  ]

  for (const expected of expectedCoreFiles) {
    if (!publicFiles.includes(expected)) {
      fail(`Expected core file public/ai/${expected} is missing`)
    }
  }

  for (const file of publicFiles) {
    const outFile = join(outAiDir, file)
    if (!existsSync(outFile)) {
      fail(`out/ai/${file} is missing from export output`)
      continue
    }

    const content = readFileSync(outFile, 'utf8')
    const size = statSync(outFile).size

    if (size < 200) {
      fail(`out/ai/${file} is suspiciously small (${size} bytes)`)
    } else if (
      content.startsWith('<!DOCTYPE html') ||
      content.includes('<html')
    ) {
      fail(`out/ai/${file} is HTML, not Markdown`)
    } else if (!content.includes('sunesis.si')) {
      fail(`out/ai/${file} missing canonical sunesis.si link`)
    } else if (
      !content.includes('llms.txt') &&
      !content.includes('agents.md')
    ) {
      fail(`out/ai/${file} missing cross-reference to llms.txt or agents.md`)
    } else if (
      content.includes('npm run') ||
      content.includes('package.json')
    ) {
      fail(`out/ai/${file} contains development instructions`)
    } else {
      pass(`out/ai/${file} verified (${size} bytes)`)
    }
  }
}

// 4. Verify discovery links in generated HTML
const enIndexHtml = join(outDir, 'en', 'index.html')
if (existsSync(enIndexHtml)) {
  const html = readFileSync(enIndexHtml, 'utf8')
  if (
    !html.includes('rel="describedby"') ||
    !html.includes('https://sunesis.si/llms.txt')
  ) {
    fail(
      'out/en/index.html is missing <link rel="describedby" href="https://sunesis.si/llms.txt">',
    )
  } else {
    pass(
      'out/en/index.html contains rel="describedby" discovery link for llms.txt',
    )
  }

  if (
    !html.includes('rel="alternate"') ||
    !html.includes('type="text/markdown"')
  ) {
    fail(
      'out/en/index.html is missing <link rel="alternate" type="text/markdown">',
    )
  } else {
    pass(
      'out/en/index.html contains rel="alternate" type="text/markdown" discovery link',
    )
  }
} else {
  fail('out/en/index.html not found for discovery check')
}

// 5. Verify netlify.toml scoped headers configuration
const netlifyTomlPath = join(rootDir, 'netlify.toml')
if (existsSync(netlifyTomlPath)) {
  const toml = readFileSync(netlifyTomlPath, 'utf8')
  if (
    !toml.includes('for = "/llms.txt"') ||
    !toml.includes('text/plain; charset=utf-8')
  ) {
    fail('netlify.toml missing scoped Content-Type header for /llms.txt')
  } else if (
    !toml.includes('for = "/agents.md"') ||
    !toml.includes('text/markdown; charset=utf-8')
  ) {
    fail('netlify.toml missing scoped Content-Type header for /agents.md')
  } else if (
    !toml.includes('for = "/ai/*"') ||
    !toml.includes('text/markdown; charset=utf-8')
  ) {
    fail('netlify.toml missing scoped Content-Type header for /ai/*')
  } else {
    pass(
      'netlify.toml contains required scoped Content-Type headers for plain text & markdown',
    )
  }
} else {
  fail('netlify.toml not found')
}

console.log('---------------------------------------------')
if (errors > 0) {
  console.error(`Verification FAILED with ${errors} error(s).`)
  process.exit(1)
} else {
  console.log('All public AI resources verified successfully in out/ export!')
  process.exit(0)
}
