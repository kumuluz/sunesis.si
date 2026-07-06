import { ArrowRight } from 'lucide-react'
import { Button } from '../../../../components/button'
import { CardC } from '../../../../components/cards/card-c'
import { Reveal, RevealGroup } from '../../../../components/motion'
import { familyProductLink } from '../../../../lib/accents'
import { useLocation } from '../../../../lib/navigation'
import { getLanguageFromPath } from '../../../../lib/router'
import type { KumuluzBlock } from '../../types'
import { Section } from './section-shell'

export function KumuluzSection({
  block,
  ctaHref,
}: {
  block: KumuluzBlock
  ctaHref?: string
}) {
  const language = getLanguageFromPath(useLocation())

  return (
    <Section bg="dark" id="kumuluz">
      <div className="max-w-3xl">
        <Reveal>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            {block.title}
          </h2>
        </Reveal>
        <Reveal
          className="mt-6 space-y-5 text-sm leading-7 text-neutral-300"
          delay={0.1}
        >
          {block.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>
      </div>
      <RevealGroup className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {block.items.map((item) => {
          const link = familyProductLink(item.title, language)

          return (
            <CardC
              colors={link?.colors}
              href={link?.href}
              icon={link?.icon}
              key={item.title}
              label={item.label}
              text={item.text}
              title={item.title}
            />
          )
        })}
      </RevealGroup>
      {block.cta ? (
        <Reveal className="mt-10">
          <Button href={ctaHref ?? '#'} icon={ArrowRight} tone="primary-dark">
            {block.cta}
          </Button>
        </Reveal>
      ) : null}
    </Section>
  )
}
