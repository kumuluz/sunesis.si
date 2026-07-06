import type { LucideIcon } from 'lucide-react'
import { Blocks, CloudCog, Network, ShieldCheck, Sparkles } from 'lucide-react'
import type { LanguageCode } from './router'

const KUMULUZ_SITE = 'https://kumuluz.com'

export type ProductSlug =
  | 'kumuluz-ai'
  | 'digital-platform'
  | 'kumuluz-api'
  | 'business-apis'
  | 'crowdsensing'

// Canonical Kumuluz product-family order (matches kumuluz.com).
const FAMILY_ORDER: readonly ProductSlug[] = [
  'kumuluz-ai',
  'digital-platform',
  'kumuluz-api',
  'business-apis',
  'crowdsensing',
]

const productSlugByLabel: Record<string, ProductSlug> = {
  KumuluzAI: 'kumuluz-ai',
  'KumuluzAI Platform': 'kumuluz-ai',
  'Kumuluz Digital Platform': 'digital-platform',
  'Kumuluz API': 'kumuluz-api',
  'Kumuluz Business APIs': 'business-apis',
  'Kumuluz Business API-ji': 'business-apis',
  'Kumuluz Crowdsensing': 'crowdsensing',
}

// Per-product colors, hardcoded as full Tailwind class strings so the scanner
// picks them up (dynamic `text-${color}-200` would be tree-shaken away).
// Family order: indigo, red, amber, emerald, purple.
export type CardColorClasses = {
  iconBox: string
  label: string
  cardHover: string
  titleHover: string
}

const cardColors: Record<ProductSlug, CardColorClasses> = {
  'kumuluz-ai': {
    iconBox: 'bg-indigo-500/15 text-indigo-200',
    label: 'text-indigo-200',
    cardHover: 'hover:border-indigo-400/70 hover:bg-indigo-500/10',
    titleHover: 'group-hover:text-indigo-100',
  },
  'digital-platform': {
    iconBox: 'bg-red-500/15 text-red-200',
    label: 'text-red-200',
    cardHover: 'hover:border-red-400/70 hover:bg-red-500/10',
    titleHover: 'group-hover:text-red-100',
  },
  'kumuluz-api': {
    iconBox: 'bg-amber-500/15 text-amber-200',
    label: 'text-amber-200',
    cardHover: 'hover:border-amber-400/70 hover:bg-amber-500/10',
    titleHover: 'group-hover:text-amber-100',
  },
  'business-apis': {
    iconBox: 'bg-emerald-500/15 text-emerald-200',
    label: 'text-emerald-200',
    cardHover: 'hover:border-emerald-400/70 hover:bg-emerald-500/10',
    titleHover: 'group-hover:text-emerald-100',
  },
  crowdsensing: {
    iconBox: 'bg-purple-500/15 text-purple-200',
    label: 'text-purple-200',
    cardHover: 'hover:border-purple-400/70 hover:bg-purple-500/10',
    titleHover: 'group-hover:text-purple-100',
  },
}

const iconBySlug: Record<ProductSlug, LucideIcon> = {
  'kumuluz-ai': ShieldCheck,
  'digital-platform': Sparkles,
  'kumuluz-api': Network,
  'business-apis': Blocks,
  crowdsensing: CloudCog,
}

function productSlugForLabel(title: string): ProductSlug | null {
  return productSlugByLabel[title] ?? null
}

// Kumuluz products live on kumuluz.com, so family cards link out to the
// external product pages there. Returns null when the title isn't a specific
// product (caller should fall back to the default card color / no icon).
export function familyProductLink(
  title: string,
  language: LanguageCode,
): {
  slug: ProductSlug
  href: string
  colors: CardColorClasses
  icon: LucideIcon
} | null {
  const slug = productSlugForLabel(title)

  if (!slug) return null

  return {
    slug,
    href: `${KUMULUZ_SITE}/${language}/products/${slug}/`,
    colors: cardColors[slug],
    icon: iconBySlug[slug],
  }
}

export function familyTitleRank(title: string): number {
  const slug = productSlugForLabel(title)
  const index = slug ? FAMILY_ORDER.indexOf(slug) : -1

  return index === -1 ? Number.MAX_SAFE_INTEGER : index
}
