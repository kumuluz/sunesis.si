import type { CardItem, CardsVariant } from '../../views/expertise/types'
import { AccentCard } from './card-accent'
import { CheckCard } from './card-check'
import { CompactCard } from './card-compact'
import { FeatureCard } from './card-feature'
import { NumberedCard } from './card-numbered'
import { TagCard } from './card-tag'

export const cardStretchItemClass: Record<2 | 3 | 4, string> = {
  2: 'grow basis-full sm:basis-[calc((100%-1.25rem)/2)]',
  3: 'grow basis-full sm:basis-[calc((100%-1.25rem)/2)] lg:basis-[calc((100%-2.5rem)/3)]',
  4: 'grow basis-full sm:basis-[calc((100%-1.25rem)/2)] lg:basis-[calc((100%-3.75rem)/4)]',
}

export const cardCenteredItemClass: Record<2 | 3 | 4, string> = {
  2: 'w-full sm:w-[calc((100%-1.25rem)/2)]',
  3: 'w-full sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]',
  4: 'w-full sm:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-3.75rem)/4)]',
}

export function renderCard(
  variant: CardsVariant,
  item: CardItem,
  index: number,
) {
  switch (variant) {
    case 'check':
      return <CheckCard item={item} key={item.title} />
    case 'tag':
      return <TagCard item={item} key={item.title} />
    case 'numbered':
      return <NumberedCard index={index} item={item} key={item.title} />
    case 'feature':
      return <FeatureCard item={item} key={item.title} />
    case 'compact':
      return <CompactCard item={item} key={item.title} />
    default:
      return <AccentCard item={item} key={item.title} />
  }
}
