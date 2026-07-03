import type { LucideIcon } from 'lucide-react'

export const EXPERTISE_SLUGS = [
  'agentic-ai',
  'digital-solutions',
  'cloud-native-edge',
  'api-ecosystems-integrations',
  'devops-platform-engineering',
] as const

export type ExpertiseSlug = (typeof EXPERTISE_SLUGS)[number]

export type CardItem = {
  label?: string
  title: string
  text: string
  meta?: string
}

export type CapabilityItem = {
  icon?: LucideIcon
  image?: string
  imageAlt?: string
  title: string
  text: string
  bulletsTitle?: string
  bullets?: readonly string[]
  wide?: boolean
}

type CompareColumn = {
  title: string
  bullets: readonly string[]
}

export type HeroBlock = {
  type: 'hero'
  eyebrow: string
  title: string
  body: readonly string[]
  primaryCta?: string
  secondaryCta?: string
  trustLine?: string
}

export type SplitBlock = {
  type: 'split'
  title: string
  body: readonly string[]
  quote?: string
}

export type ProseBlock = {
  type: 'prose'
  eyebrow?: string
  title: string
  intro?: string
  body?: readonly string[]
  quote?: string
}

export type CapabilitiesBlock = {
  type: 'capabilities'
  title: string
  intro?: string
  items: readonly CapabilityItem[]
}

export type CompareBlock = {
  type: 'compare'
  title: string
  intro?: string
  columns: readonly CompareColumn[]
}

export type TableBlock = {
  type: 'table'
  title: string
  intro?: string
  columns: readonly string[]
  rows: readonly (readonly string[])[]
}

export type CardsVariant =
  | 'accent'
  | 'check'
  | 'tag'
  | 'numbered'
  | 'feature'
  | 'compact'

export type CardsBlock = {
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
  ctaHref?: string
}

export type ListBlock = {
  type: 'list'
  eyebrow?: string
  title: string
  intro?: string
  body?: readonly string[]
  items: readonly string[]
  variant?: 'pills' | 'columns'
}

export type StepsBlock = {
  type: 'steps'
  title: string
  intro?: string
  numbered?: boolean
  variant?: 'cards'
  items: readonly { title: string; text: string }[]
}

export type KumuluzBlock = {
  type: 'kumuluz'
  title: string
  body: readonly string[]
  items: readonly { label?: string; title: string; text: string }[]
  cta?: string
  ctaHref?: string
}

export type FinalCtaBlock = {
  type: 'finalCta'
  title: string
  body: readonly string[]
  primaryCta: string
  secondaryCta?: string
}

export type ExpertiseBlock =
  | SplitBlock
  | ProseBlock
  | CapabilitiesBlock
  | CompareBlock
  | TableBlock
  | CardsBlock
  | ListBlock
  | StepsBlock
  | KumuluzBlock
  | FinalCtaBlock

export type ExpertisePageContent = {
  seo: { title: string; description: string }
  hero: HeroBlock
  sections: readonly ExpertiseBlock[]
}
