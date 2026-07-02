import { buildPath, type LanguageCode, type Route } from './router'
import {
  CANONICAL_DESCRIPTION,
  LEGAL_NAME,
  ORG_SAME_AS,
  SITE_NAME,
  SITE_ORIGIN,
} from './site'
import type { ExpertiseSlug } from '../views/expertise/types'
import type { ReferenceSlug } from '../views/references/types'
import type { CompanySlug } from '../views/company/types'

const ORG_ID = `${SITE_ORIGIN}/#organization`
const WEBSITE_ID = `${SITE_ORIGIN}/#website`

function abs(language: LanguageCode, route: Route): string {
  return SITE_ORIGIN + buildPath(language, route)
}

// schema.org Organization — the Sunesis company entity. Referenced by @id from
// every other node so crawlers resolve one canonical organization.
export function organizationSchema(language: LanguageCode) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: SITE_NAME,
    legalName: LEGAL_NAME,
    url: abs(language, { name: 'landing' }),
    description: CANONICAL_DESCRIPTION,
    foundingDate: '2014',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Ulica gledališča BTC 2',
      addressLocality: 'Ljubljana',
      addressCountry: 'SI',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'general inquiries',
        email: 'info@sunesis.si',
      },
      {
        '@type': 'ContactPoint',
        contactType: 'careers',
        email: 'jobs@sunesis.si',
      },
    ],
    sameAs: ORG_SAME_AS,
  }
}

// schema.org WebSite — the site as a whole, published by the Organization.
export function websiteSchema(language: LanguageCode) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: SITE_NAME,
    url: abs(language, { name: 'landing' }),
    publisher: { '@id': ORG_ID },
    inLanguage: language,
  }
}

// Localized labels for breadcrumb section roots and leaves.
const homeLabel: Record<LanguageCode, string> = { en: 'Home', sl: 'Domov' }

const sectionLabel: Record<'expertise' | 'references' | 'company', Record<LanguageCode, string>> = {
  expertise: { en: 'Expertise', sl: 'Ekspertize' },
  references: { en: 'References', sl: 'Reference' },
  company: { en: 'Company', sl: 'Podjetje' },
}

const expertiseLabel: Record<ExpertiseSlug, Record<LanguageCode, string>> = {
  'agentic-ai': { en: 'AgenticAI Solutions', sl: 'AgenticAI rešitve' },
  'digital-solutions': {
    en: 'Digital Solutions Development',
    sl: 'Razvoj digitalnih rešitev',
  },
  'cloud-native-edge': {
    en: 'Cloud-native & Edge Architectures',
    sl: 'Cloud-native in edge arhitekture',
  },
  'api-ecosystems-integrations': {
    en: 'API Ecosystems & Integrations',
    sl: 'API ekosistemi in integracije',
  },
  'devops-platform-engineering': {
    en: 'DevOps & Platform Engineering',
    sl: 'DevOps in platformni inženiring',
  },
}

const referenceLabel: Record<ReferenceSlug, Record<LanguageCode, string>> = {
  'selected-work': { en: 'Selected Work', sl: 'Izbrani projekti' },
  'open-source': { en: 'Open Source', sl: 'Odprta koda' },
  'clients-industries': { en: 'Clients & Industries', sl: 'Stranke in panoge' },
  'research-innovation': {
    en: 'Research & Innovation',
    sl: 'Raziskave in inovacije',
  },
}

const companyLabel: Record<CompanySlug, Record<LanguageCode, string>> = {
  about: { en: 'About Sunesis', sl: 'O Sunesisu' },
  awards: { en: 'Awards', sl: 'Nagrade' },
  careers: { en: 'Careers', sl: 'Kariera' },
}

type Crumb = { name: string; route: Route }

function crumbsForRoute(language: LanguageCode, route: Route): Crumb[] {
  const crumbs: Crumb[] = [
    { name: homeLabel[language], route: { name: 'landing' } },
  ]

  if (route.name === 'expertise') {
    crumbs.push({ name: expertiseLabel[route.slug][language], route })
  } else if (route.name === 'kumuluz') {
    crumbs.push({ name: 'Kumuluz', route })
  } else if (route.name === 'references') {
    crumbs.push({
      name: sectionLabel.references[language],
      route: { name: 'references' },
    })
    if (route.slug) {
      crumbs.push({ name: referenceLabel[route.slug][language], route })
    }
  } else if (route.name === 'company') {
    crumbs.push({
      name: sectionLabel.company[language],
      route: { name: 'company' },
    })
    if (route.slug) {
      crumbs.push({ name: companyLabel[route.slug][language], route })
    }
  }

  return crumbs
}

// schema.org BreadcrumbList reflecting the URL hierarchy of the current page.
export function breadcrumbSchema(language: LanguageCode, route: Route) {
  const crumbs = crumbsForRoute(language, route)

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: abs(language, crumb.route),
    })),
  }
}

const serviceType: Record<ExpertiseSlug, string> = {
  'agentic-ai': 'Enterprise AgenticAI solutions',
  'digital-solutions': 'Enterprise digital solutions development',
  'cloud-native-edge': 'Cloud-native and edge architecture',
  'api-ecosystems-integrations': 'API ecosystems and integrations',
  'devops-platform-engineering': 'DevOps and platform engineering',
}

// schema.org Service for an expertise page, provided by the Organization.
export function serviceSchema(
  language: LanguageCode,
  slug: ExpertiseSlug,
  description: string,
) {
  const route: Route = { name: 'expertise', slug }

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${abs(language, route)}#service`,
    name: expertiseLabel[slug][language],
    serviceType: serviceType[slug],
    provider: { '@id': ORG_ID },
    description,
  }
}

// schema.org SoftwareApplication for the KumuluzAI platform.
export function kumuluzAiSchema(language: LanguageCode) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${abs(language, { name: 'kumuluz' })}#kumuluzai`,
    name: 'KumuluzAI Platform',
    applicationCategory: 'Enterprise AI Platform',
    applicationSubCategory: 'AgenticAI platform',
    description:
      'KumuluzAI is a governed AgenticAI platform for enterprise AI agents, assistants, RAG, tool use, model routing, approvals, auditability and centralized management.',
    creator: { '@id': ORG_ID },
  }
}
