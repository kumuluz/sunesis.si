import type {
  CapabilityItem,
  CardItem,
  CardsVariant,
  HeroBlock,
} from '../expertise/types'

export type { HeroBlock } from '../expertise/types'

export const COMPANY_SLUGS = ['about', 'awards', 'careers'] as const

export type CompanySlug = (typeof COMPANY_SLUGS)[number]

type WithId = { id?: string }

export type SplitBlock = WithId & {
  type: 'split'
  title: string
  body: readonly string[]
  quote?: string
}

export type ProseBlock = WithId & {
  type: 'prose'
  eyebrow?: string
  title: string
  intro?: string
  body?: readonly string[]
  quote?: string
}

export type CardsBlock = WithId & {
  type: 'cards'
  eyebrow?: string
  title: string
  intro?: string
  body?: readonly string[]
  items: readonly CardItem[]
  columns?: 2 | 3 | 4
  variant?: CardsVariant
  align?: 'left' | 'center'
  cta?: string
}

export type CapabilitiesBlock = WithId & {
  type: 'capabilities'
  title: string
  intro?: string
  items: readonly CapabilityItem[]
}

export type ListBlock = WithId & {
  type: 'list'
  eyebrow?: string
  title: string
  intro?: string
  body?: readonly string[]
  items: readonly string[]
  variant?: 'pills' | 'columns'
}

export type FinalCtaBlock = {
  type: 'finalCta'
  title: string
  body: readonly string[]
  primaryCta: string
  secondaryCta?: string
}

export type CompanyPageBlock =
  | SplitBlock
  | ProseBlock
  | CardsBlock
  | CapabilitiesBlock
  | ListBlock
  | FinalCtaBlock

export type CompanyPageContent = {
  seo: { title: string; description: string }
  hero: HeroBlock
  heroSecondaryHref?: string
  sections: readonly CompanyPageBlock[]
}
