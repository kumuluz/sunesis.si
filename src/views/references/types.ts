import type {
  CapabilityItem,
  CardItem,
  CardsVariant,
  HeroBlock,
} from '../expertise/types'

export type { HeroBlock } from '../expertise/types'

export const REFERENCE_SLUGS = [
  'selected-work',
  'open-source',
  'clients-industries',
  'research-innovation',
] as const

export type ReferenceSlug = (typeof REFERENCE_SLUGS)[number]

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

export type FinalCtaBlock = {
  type: 'finalCta'
  title: string
  body: readonly string[]
  primaryCta: string
  secondaryCta?: string
}

type ReferenceItem = {
  label: string
  title: string
  body: readonly string[]
  expertiseTitle: string
  expertise: readonly string[]
}

export type ReferencesBlock = WithId & {
  type: 'references'
  eyebrow?: string
  title: string
  intro?: string
  items: readonly ReferenceItem[]
  cta?: string
}

type ProjectItem = {
  label: string
  title: string
  text: string
  meta: string
}

export type ProjectsBlock = WithId & {
  type: 'projects'
  eyebrow?: string
  title: string
  intro?: string
  columns?: 2 | 3 | 4
  items: readonly ProjectItem[]
}

export type LogoWallBlock = WithId & {
  type: 'logoWall'
  eyebrow?: string
  title: string
  intro?: string
  logos?: readonly string[]
  folder?: string
}

export type ReferencesPageBlock =
  | SplitBlock
  | ProseBlock
  | CardsBlock
  | CapabilitiesBlock
  | ReferencesBlock
  | ProjectsBlock
  | LogoWallBlock
  | FinalCtaBlock

export type ReferencesPageContent = {
  seo: { title: string; description: string }
  hero: HeroBlock
  heroSecondaryHref?: string
  sections: readonly ReferencesPageBlock[]
}
