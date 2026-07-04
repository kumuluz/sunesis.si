import { buildPath, type LanguageCode } from './router'
import { type ExpertiseSlug } from '../views/expertise/types'
import { type ReferenceSlug } from '../views/references/types'
import { type CompanySlug } from '../views/company/types'

const slugByLabel: Record<string, ExpertiseSlug> = {
  'AgenticAI Solutions': 'agentic-ai',
  'Digital Solutions Development': 'digital-solutions',
  'Cloud-native & Edge Architectures': 'cloud-native-edge',
  'API Ecosystems & Integrations': 'api-ecosystems-integrations',
  'DevOps & Platform Engineering': 'devops-platform-engineering',
  'AgenticAI rešitve': 'agentic-ai',
  'Razvoj digitalnih rešitev': 'digital-solutions',
  'Cloud-native in edge arhitekture': 'cloud-native-edge',
  'API ekosistemi in integracije': 'api-ecosystems-integrations',
  'DevOps in platformni inženiring': 'devops-platform-engineering',
}

const referenceSlugByLabel: Record<string, ReferenceSlug> = {
  'Selected Work': 'selected-work',
  'Open Source': 'open-source',
  'Clients & Industries': 'clients-industries',
  'Research & Innovation': 'research-innovation',
  'Izbrani projekti': 'selected-work',
  'Odprta koda': 'open-source',
  'Stranke in panoge': 'clients-industries',
  'Raziskave in inovacije': 'research-innovation',
}

const companySlugByLabel: Record<string, CompanySlug> = {
  'About Sunesis': 'about',
  Awards: 'awards',
  Careers: 'careers',
  'O Sunesisu': 'about',
  Nagrade: 'awards',
  Kariera: 'careers',
}

function expertiseSlugForLabel(label: string): ExpertiseSlug | null {
  return slugByLabel[label] ?? null
}

function referenceSlugForLabel(label: string): ReferenceSlug | null {
  return referenceSlugByLabel[label] ?? null
}

function companySlugForLabel(label: string): CompanySlug | null {
  return companySlugByLabel[label] ?? null
}

export function topLevelNavHref(label: string): string | null {
  if (label === 'Kumuluz') {
    return KUMULUZ_SITE
  }

  return null
}

export function expertiseHrefForLabel(
  label: string,
  language: LanguageCode,
): string | null {
  const slug = expertiseSlugForLabel(label)

  return slug ? buildPath(language, { name: 'expertise', slug }) : null
}

export function insightsHref(language: LanguageCode): string {
  return buildPath(language, { name: 'insights' })
}

const KUMULUZ_SITE = 'https://kumuluz.com'

const kumuluzProductGroups: { labels: readonly string[]; slug: string }[] = [
  { labels: ['KumuluzAI Platform'], slug: 'kumuluz-ai' },
  { labels: ['Kumuluz API'], slug: 'kumuluz-api' },
  {
    labels: ['Kumuluz Business APIs', 'Kumuluz Business API-ji'],
    slug: 'business-apis',
  },
  { labels: ['Kumuluz Digital Platform'], slug: 'digital-platform' },
  { labels: ['Kumuluz Crowdsensing'], slug: 'crowdsensing' },
]

export function contactHref(language: LanguageCode): string {
  return `${buildPath(language, { name: 'landing' })}#contact`
}

const footerLinkGroups: {
  labels: readonly string[]
  href: (language: LanguageCode) => string
}[] = [
  {
    labels: ['AgenticAI Solutions', 'AgenticAI rešitve'],
    href: (l) => buildPath(l, { name: 'expertise', slug: 'agentic-ai' }),
  },
  {
    labels: ['Digital Solutions Development', 'Razvoj digitalnih rešitev'],
    href: (l) => buildPath(l, { name: 'expertise', slug: 'digital-solutions' }),
  },
  {
    labels: [
      'Cloud-native & Edge Architectures',
      'Cloud-native in edge arhitekture',
    ],
    href: (l) => buildPath(l, { name: 'expertise', slug: 'cloud-native-edge' }),
  },
  {
    labels: ['API Ecosystems & Integrations', 'API ekosistemi in integracije'],
    href: (l) =>
      buildPath(l, { name: 'expertise', slug: 'api-ecosystems-integrations' }),
  },
  {
    labels: [
      'DevOps & Platform Engineering',
      'DevOps in platformni inženiring',
    ],
    href: (l) =>
      buildPath(l, { name: 'expertise', slug: 'devops-platform-engineering' }),
  },
  ...kumuluzProductGroups.map((group) => ({
    labels: group.labels,
    href: (l: LanguageCode) => `${KUMULUZ_SITE}/${l}/products/${group.slug}/`,
  })),
  {
    labels: ['About Sunesis', 'O Sunesisu'],
    href: (l) => buildPath(l, { name: 'company', slug: 'about' }),
  },
  {
    labels: ['Awards', 'Nagrade'],
    href: (l) => buildPath(l, { name: 'company', slug: 'awards' }),
  },
  {
    labels: ['Careers', 'Kariera'],
    href: (l) => buildPath(l, { name: 'company', slug: 'careers' }),
  },
  {
    labels: ['References', 'Reference'],
    href: (l) => buildPath(l, { name: 'references' }),
  },
  {
    labels: ['Open source', 'Odprta koda'],
    href: (l) => buildPath(l, { name: 'references', slug: 'open-source' }),
  },
  {
    labels: ['Insights', 'Vsebine'],
    href: (l) => insightsHref(l),
  },
  {
    labels: ['Contact', 'Kontakt'],
    href: (l) => contactHref(l),
  },
]

const footerHrefByLabel = new Map<string, (language: LanguageCode) => string>(
  footerLinkGroups.flatMap((group) =>
    group.labels.map((label) => [label, group.href] as const),
  ),
)

export function footerLinkHref(
  label: string,
  language: LanguageCode,
): string | null {
  return footerHrefByLabel.get(label)?.(language) ?? null
}

export function dropdownLinkHref(
  label: string,
  language: LanguageCode,
): string | null {
  const expertiseSlug = expertiseSlugForLabel(label)

  if (expertiseSlug) {
    return buildPath(language, { name: 'expertise', slug: expertiseSlug })
  }

  const referenceSlug = referenceSlugForLabel(label)

  if (referenceSlug) {
    return buildPath(language, { name: 'references', slug: referenceSlug })
  }

  const companySlug = companySlugForLabel(label)

  if (companySlug) {
    return buildPath(language, { name: 'company', slug: companySlug })
  }

  return null
}
