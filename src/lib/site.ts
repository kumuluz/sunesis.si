import type { LanguageCode } from './router'

// Canonical origin for the production site. Used for absolute URLs in metadata,
// canonicals, sitemap, robots and structured data.
export const SITE_ORIGIN = 'https://sunesis.si'

export const SITE_NAME = 'Sunesis'
export const LEGAL_NAME = 'SUNESIS Ltd.'

// Social sharing image. Replace with a dedicated 1200×630 raster (og-image.png)
// for best results on LinkedIn/X/Facebook — SVG previews are not universally
// rendered by social crawlers.
export const OG_IMAGE = '/sunesis-logo.svg'

export const ORG_SAME_AS = ['https://www.linkedin.com/company/sunesis']

// og:locale values per language.
export const OG_LOCALE: Record<LanguageCode, string> = {
  en: 'en_US',
  sl: 'sl_SI',
}

// Canonical, entity-consistent descriptions reused across metadata, structured
// data and llms.txt (see SEO positioning brief).
export const CANONICAL_DESCRIPTION =
  'Sunesis is a Slovenian enterprise software engineering and technology company founded in 2014. Sunesis designs, builds and operates AgenticAI solutions, API ecosystems, enterprise digital platforms, cloud-native architectures, DevOps foundations and Kumuluz platforms. The company works with organizations in banking, insurance, public sector, energy, manufacturing, blockchain infrastructure, open-source ecosystems and European research and innovation projects.'
