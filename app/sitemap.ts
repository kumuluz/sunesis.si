import type { MetadataRoute } from 'next'
import { insightPosts } from '@/content/insights/posts.generated'
import { buildPath, type LanguageCode, type Route } from '@/lib/router'
import { SITE_ORIGIN } from '@/lib/site'
import { EXPERTISE_SLUGS } from '@/views/expertise/types'
import { REFERENCE_SLUGS } from '@/views/references/types'
import { COMPANY_SLUGS } from '@/views/company/types'

// Required for `output: export` — emit as a static file at build time.
export const dynamic = 'force-static'

const LANGUAGES: LanguageCode[] = ['en', 'sl']

// Every real route in the app, in rough priority order.
const ROUTES: { route: Route; priority: number }[] = [
  { route: { name: 'landing' }, priority: 1 },
  ...EXPERTISE_SLUGS.map((slug) => ({
    route: { name: 'expertise', slug } as Route,
    priority: 0.9,
  })),
  { route: { name: 'references' }, priority: 0.8 },
  ...REFERENCE_SLUGS.map((slug) => ({
    route: { name: 'references', slug } as Route,
    priority: 0.7,
  })),
  { route: { name: 'company' }, priority: 0.7 },
  ...COMPANY_SLUGS.map((slug) => ({
    route: { name: 'company', slug } as Route,
    priority: 0.6,
  })),
  { route: { name: 'insights' }, priority: 0.7 },
  ...insightPosts.map((post) => ({
    route: { name: 'insights', slug: post.slug } as Route,
    priority: 0.5,
  })),
]

// Emitted as a static /sitemap.xml during the static export build. Each entry
// carries hreflang alternates for its English and Slovenian counterparts.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return ROUTES.flatMap(({ route, priority }) =>
    LANGUAGES.map((language) => ({
      url: SITE_ORIGIN + buildPath(language, route),
      lastModified,
      changeFrequency: 'monthly' as const,
      priority,
      alternates: {
        languages: {
          en: SITE_ORIGIN + buildPath('en', route),
          sl: SITE_ORIGIN + buildPath('sl', route),
          'x-default': SITE_ORIGIN + buildPath('en', route),
        },
      },
    })),
  )
}
