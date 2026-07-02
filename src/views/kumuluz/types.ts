import type {
  CapabilitiesBlock,
  CardsBlock,
  FinalCtaBlock,
  HeroBlock,
  KumuluzBlock,
  ProseBlock,
  SplitBlock,
  StepsBlock,
} from '../expertise/types'

export type {
  CapabilitiesBlock,
  CardsBlock,
  FinalCtaBlock,
  HeroBlock,
  KumuluzBlock,
  ProseBlock,
  SplitBlock,
  StepsBlock,
} from '../expertise/types'

type ProductCardItem = {
  label: string
  title: string
  body: readonly string[]
  bestForTitle: string
  bestFor: readonly string[]
  relatedTitle: string
  related: readonly string[]
  cta: string
  href: string
}

export type ProductsBlock = {
  type: 'products'
  eyebrow?: string
  title: string
  intro?: string
  items: readonly ProductCardItem[]
}

export type KumuluzPageBlock =
  | SplitBlock
  | ProseBlock
  | CardsBlock
  | CapabilitiesBlock
  | StepsBlock
  | KumuluzBlock
  | FinalCtaBlock
  | ProductsBlock

export type KumuluzPageContent = {
  seo: { title: string; description: string }
  hero: HeroBlock
  sections: readonly KumuluzPageBlock[]
}
