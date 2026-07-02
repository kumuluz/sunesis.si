import { ArrowRight } from 'lucide-react'
import { Button } from '../../../../components/button'
import {
  cardCenteredItemClass,
  cardStretchItemClass,
  renderCard,
} from '../../../../components/cards'
import { Reveal, RevealGroup } from '../../../../components/motion'
import type { CardsBlock } from '../../types'
import { Heading, Section, type SectionBg } from './section-shell'

export function CardsSection({
  block,
  bg,
  ctaHref,
}: {
  block: CardsBlock
  bg: SectionBg
  ctaHref?: string
}) {
  const columns = block.columns ?? 3
  const variant = block.variant ?? 'accent'
  const centered = block.align === 'center'

  return (
    <Section bg={bg}>
      <Heading
        align={centered ? 'center' : 'left'}
        eyebrow={block.eyebrow}
        intro={block.intro}
        title={block.title}
      />
      {block.body && block.body.length > 0 ? (
        <Reveal
          className={`mt-6 max-w-3xl space-y-5 text-base leading-8 text-neutral-600 ${
            centered ? 'mx-auto text-center' : ''
          }`}
          delay={0.1}
        >
          {block.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>
      ) : null}
      {centered ? (
        <RevealGroup className="mt-12 flex flex-wrap justify-center gap-5">
          {block.items.map((item, index) => (
            <div className={cardCenteredItemClass[columns]} key={item.title}>
              {renderCard(variant, item, index)}
            </div>
          ))}
        </RevealGroup>
      ) : (
        <RevealGroup className="mt-12 flex flex-wrap gap-5">
          {block.items.map((item, index) => (
            <div className={cardStretchItemClass[columns]} key={item.title}>
              {renderCard(variant, item, index)}
            </div>
          ))}
        </RevealGroup>
      )}
      {block.cta ? (
        <Reveal className="mt-10">
          <Button href={ctaHref ?? '#'} icon={ArrowRight} tone="ghost">
            {block.cta}
          </Button>
        </Reveal>
      ) : null}
    </Section>
  )
}
