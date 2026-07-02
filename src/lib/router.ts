import { EXPERTISE_SLUGS, type ExpertiseSlug } from '../views/expertise/types'
import { REFERENCE_SLUGS, type ReferenceSlug } from '../views/references/types'
import { COMPANY_SLUGS, type CompanySlug } from '../views/company/types'

export type LanguageCode = 'en' | 'sl'

export type Route =
  | { name: 'landing' }
  | { name: 'kumuluz' }
  | { name: 'references'; slug?: ReferenceSlug }
  | { name: 'expertise'; slug: ExpertiseSlug }
  | { name: 'company'; slug?: CompanySlug }

const expertiseSlugSet = new Set<string>(EXPERTISE_SLUGS)
const referenceSlugSet = new Set<string>(REFERENCE_SLUGS)
const companySlugSet = new Set<string>(COMPANY_SLUGS)

export function getLanguageFromPath(pathname: string): LanguageCode {
  return pathname.startsWith('/sl') ? 'sl' : 'en'
}

export function parseRoute(pathname: string): Route {
  const match = pathname.match(/\/expertise\/([^/]+)/)

  if (match && expertiseSlugSet.has(match[1])) {
    return { name: 'expertise', slug: match[1] as ExpertiseSlug }
  }

  if (/\/kumuluz(\/|$)/.test(pathname)) {
    return { name: 'kumuluz' }
  }

  const referencesMatch = pathname.match(/\/references\/([^/]+)/)

  if (referencesMatch && referenceSlugSet.has(referencesMatch[1])) {
    return { name: 'references', slug: referencesMatch[1] as ReferenceSlug }
  }

  if (/\/references(\/|$)/.test(pathname)) {
    return { name: 'references' }
  }

  const companyMatch = pathname.match(/\/company\/([^/]+)/)

  if (companyMatch && companySlugSet.has(companyMatch[1])) {
    return { name: 'company', slug: companyMatch[1] as CompanySlug }
  }

  if (/\/company(\/|$)/.test(pathname)) {
    return { name: 'company' }
  }

  return { name: 'landing' }
}

export function buildPath(language: LanguageCode, route: Route): string {
  if (route.name === 'expertise') {
    return `/${language}/expertise/${route.slug}/`
  }

  if (route.name === 'kumuluz') {
    return `/${language}/kumuluz/`
  }

  if (route.name === 'references') {
    return route.slug
      ? `/${language}/references/${route.slug}/`
      : `/${language}/references/`
  }

  if (route.name === 'company') {
    return route.slug
      ? `/${language}/company/${route.slug}/`
      : `/${language}/company/`
  }

  return `/${language}/`
}
