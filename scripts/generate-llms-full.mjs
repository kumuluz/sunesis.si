#!/usr/bin/env node

/**
 * Generates public/llms-full.txt: the full text of every public/ai/*.md
 * brief in one file, as the llms.txt convention expects. Runs before
 * `dev` and `build`; never hand-edit the output.
 */

import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const HERE = dirname(fileURLToPath(import.meta.url))
const REPO_ROOT = resolve(HERE, '..')
const AI_DIR = join(REPO_ROOT, 'public', 'ai')
const OUT_FILE = join(REPO_ROOT, 'public', 'llms-full.txt')
const ORIGIN = 'https://sunesis.si'

// Reading order; any other public/ai/*.md files follow alphabetically.
const ORDER = [
  'company.md',
  'agentic-ai.md',
  'cloud-native.md',
  'api-ecosystems.md',
  'devops.md',
  'selected-work.md',
  'research-open-source.md',
  'awards.md',
]

const files = readdirSync(AI_DIR).filter((f) => f.endsWith('.md'))
const rank = (f) => (ORDER.includes(f) ? ORDER.indexOf(f) : ORDER.length)
files.sort((a, b) => rank(a) - rank(b) || a.localeCompare(b))

const header = [
  '# Sunesis — Full AI Resource Summary',
  '',
  '> Sunesis is a Slovenian enterprise software engineering and technology consulting company founded in 2014, based in Ljubljana, with branch offices in Maribor and Ptuj.',
  '',
  `This file contains the full text of every Sunesis Markdown brief listed in [llms.txt](${ORIGIN}/llms.txt), in one document. Each section starts with the URL of its source file. The research guide for AI agents is at ${ORIGIN}/agents.md.`,
  '',
].join('\n')

const sections = files.map((file) => {
  const text = readFileSync(join(AI_DIR, file), 'utf8').trim()
  if (!/^# /.test(text)) {
    console.error(`public/ai/${file} must start with a "# " heading`)
    process.exit(1)
  }
  // Demote every heading one level so the file keeps a single H1.
  const body = text.replace(/^(#{1,5}) /gm, '#$1 ')
  return `---\n\nSource: ${ORIGIN}/ai/${file}\n\n${body}\n`
})

writeFileSync(OUT_FILE, [header, ...sections].join('\n'))
console.log(`Wrote ${files.length} briefs -> ${OUT_FILE}`)
