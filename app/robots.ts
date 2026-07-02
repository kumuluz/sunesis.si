import type { MetadataRoute } from 'next'
import { SITE_ORIGIN } from '@/lib/site'

// Required for `output: export` — emit as a static file at build time.
export const dynamic = 'force-static'

// Emitted as a static /robots.txt during the static export build.
// AI crawlers are intentionally allowed so LLMs and AI search tools can read
// and recommend public Sunesis content.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: `${SITE_ORIGIN}/sitemap.xml`,
    host: SITE_ORIGIN,
  }
}
