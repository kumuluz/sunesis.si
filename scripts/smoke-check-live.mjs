#!/usr/bin/env node

/**
 * Smoke test for deployed public AI resources over HTTP.
 * Can be run against a Netlify Deploy Preview or production:
 *
 * Usage:
 *   node scripts/smoke-check-live.mjs https://deploy-preview-xxx--sunesis.netlify.app
 *   or:
 *   BASE_URL=https://sunesis.si node scripts/smoke-check-live.mjs
 */

const baseUrl = (process.argv[2] || process.env.BASE_URL || '').replace(
  /\/$/,
  '',
)

if (!baseUrl) {
  console.error('Usage: node scripts/smoke-check-live.mjs <BASE_URL>')
  console.error(
    'Example: node scripts/smoke-check-live.mjs https://deploy-preview-123--sunesis.netlify.app',
  )
  process.exit(1)
}

console.log(`--- Running Live HTTP Smoke Check against: ${baseUrl} ---`)

const resources = [
  {
    path: '/llms.txt',
    expectedContentType: 'text/plain',
    requiredMarker: '# Sunesis',
  },
  {
    path: '/agents.md',
    expectedContentType: 'text/markdown',
    requiredMarker: 'Public Company & Research Guide',
  },
  {
    path: '/ai/company.md',
    expectedContentType: 'text/markdown',
    requiredMarker: '# Sunesis — Company Overview',
  },
  {
    path: '/ai/agentic-ai.md',
    expectedContentType: 'text/markdown',
    requiredMarker: '# Sunesis — Enterprise AgenticAI Capabilities',
  },
  {
    path: '/ai/cloud-native.md',
    expectedContentType: 'text/markdown',
    requiredMarker: '# Sunesis — Cloud-native & Edge Architectures',
  },
  {
    path: '/ai/api-ecosystems.md',
    expectedContentType: 'text/markdown',
    requiredMarker: '# Sunesis — API Ecosystems & Integrations',
  },
  {
    path: '/ai/devops.md',
    expectedContentType: 'text/markdown',
    requiredMarker: '# Sunesis — DevOps & Platform Engineering',
  },
  {
    path: '/ai/selected-work.md',
    expectedContentType: 'text/markdown',
    requiredMarker: '# Sunesis — Selected Enterprise Work & References',
  },
  {
    path: '/ai/research-open-source.md',
    expectedContentType: 'text/markdown',
    requiredMarker: '# Sunesis — Open Source and Research & Innovation',
  },
  {
    path: '/ai/awards.md',
    expectedContentType: 'text/markdown',
    requiredMarker: '# Sunesis & Kumuluz — Awards and Industry Recognition',
  },
]

let failures = 0

for (const res of resources) {
  const url = `${baseUrl}${res.path}`
  try {
    const response = await fetch(url, {
      headers: { 'User-Agent': 'Sunesis-AI-Verification/1.0' },
    })
    const contentType = response.headers.get('content-type') || ''
    const body = await response.text()

    if (response.status !== 200) {
      console.error(`FAIL: ${url} returned HTTP ${response.status}`)
      failures++
      continue
    }

    if (!contentType.includes(res.expectedContentType)) {
      console.error(
        `FAIL: ${url} Content-Type is "${contentType}", expected "${res.expectedContentType}"`,
      )
      failures++
      continue
    }

    if (body.startsWith('<!DOCTYPE html') || body.includes('<html')) {
      console.error(
        `FAIL: ${url} returned HTML fallback instead of raw text/markdown`,
      )
      failures++
      continue
    }

    if (!body.includes(res.requiredMarker)) {
      console.error(
        `FAIL: ${url} missing expected marker "${res.requiredMarker}"`,
      )
      failures++
      continue
    }

    console.log(
      `PASS: ${res.path} (HTTP 200, Content-Type: ${contentType}, length: ${body.length})`,
    )
  } catch (err) {
    console.error(`ERROR: Failed to fetch ${url}: ${err.message}`)
    failures++
  }
}

console.log('---------------------------------------------------------')
if (failures > 0) {
  console.error(`Smoke check FAILED with ${failures} error(s).`)
  process.exit(1)
} else {
  console.log('All public AI resources responded correctly over HTTP!')
  process.exit(0)
}
