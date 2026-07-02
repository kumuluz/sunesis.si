import type { Metadata } from 'next'
import { buildPath, type LanguageCode, type Route } from './router'
import { OG_IMAGE, OG_LOCALE, SITE_NAME, SITE_ORIGIN } from './site'

type Seo = { title: string; description: string }

export function buildPageMetadata(
  language: LanguageCode,
  route: Route,
  seo: Seo,
): Metadata {
  const canonical = SITE_ORIGIN + buildPath(language, route)
  const otherLanguage: LanguageCode = language === 'en' ? 'sl' : 'en'

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
