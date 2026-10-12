import type { Metadata } from 'next'
import { buildPath, type LanguageCode, type Route } from './router'
import { OG_IMAGE, OG_LOCALE, SITE_NAME, SITE_ORIGIN } from './site'

type Seo = { title: string; description: string }

function getMarkdownAlternate(
  language: LanguageCode,
  route: Route,
): string | undefined {
  if (language !== 'en') return undefined

  if (route.name === 'landing') {
    return `${SITE_ORIGIN}/ai/company.md`
  }
  if (route.name === 'expertise') {
    switch (route.slug) {
      case 'agentic-ai':
        return `${SITE_ORIGIN}/ai/agentic-ai.md`
      case 'cloud-native-edge':
        return `${SITE_ORIGIN}/ai/cloud-native.md`
      case 'api-ecosystems-integrations':
        return `${SITE_ORIGIN}/ai/api-ecosystems.md`
      case 'devops-platform-engineering':
        return `${SITE_ORIGIN}/ai/devops.md`
      case 'digital-solutions':
        return `${SITE_ORIGIN}/ai/company.md`
      default:
        return undefined
    }
  }
  if (route.name === 'references') {
    if (route.slug === 'open-source' || route.slug === 'research-innovation') {
      return `${SITE_ORIGIN}/ai/research-open-source.md`
    }
    return `${SITE_ORIGIN}/ai/selected-work.md`
  }
  if (route.name === 'company') {
    if (route.slug === 'awards') {
      return `${SITE_ORIGIN}/ai/awards.md`
    }
    return `${SITE_ORIGIN}/ai/company.md`
  }
  return undefined
}

export function buildPageMetadata(
  language: LanguageCode,
  route: Route,
  seo: Seo,
): Metadata {
  const canonical = SITE_ORIGIN + buildPath(language, route)
  const otherLanguage: LanguageCode = language === 'en' ? 'sl' : 'en'
  const markdownAlternate = getMarkdownAlternate(language, route)

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical,
      languages: {
        en: SITE_ORIGIN + buildPath('en', route),
        sl: SITE_ORIGIN + buildPath('sl', route),
        'x-default': SITE_ORIGIN + buildPath('en', route),
      },
      ...(markdownAlternate
        ? {
            types: {
              'text/markdown': markdownAlternate,
            },
          }
        : {}),
    },
    openGraph: {
      type: 'website',
      url: canonical,
      siteName: SITE_NAME,
      title: seo.title,
      description: seo.description,
      locale: OG_LOCALE[language],
      alternateLocale: OG_LOCALE[otherLanguage],
      images: [{ url: OG_IMAGE, alt: SITE_NAME }],
    },
    twitter: {
      card: 'summary_large_image',
      title: seo.title,
      description: seo.description,
      images: [OG_IMAGE],
    },
  }
}
