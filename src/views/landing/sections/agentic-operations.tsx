import { ArrowRight } from 'lucide-react'
import type { LandingContent } from '../../../content/landing/landing'
import { Button } from '../../../components/button'
import { NumberedCard } from '../../../components/cards/card-numbered'
import { Reveal, RevealGroup } from '../../../components/motion'
import { buildPath, type LanguageCode } from '../../../lib/router'
import { SectionHeader } from './section-header'

type AgenticOperationsSectionProps = {
  content: LandingContent['landingPageSections']['agenticOperations']
  language: LanguageCode
}

export function AgenticOperationsSection({
  content,
  language,
}: AgenticOperationsSectionProps) {
  return (
    <section className="border-t border-neutral-200 bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader intro={content.intro} title={content.title} />
        <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-3">
          {content.cards.map((card, index) => (
            <NumberedCard index={index} item={card} key={card.title} />
          ))}
        </RevealGroup>
        <Reveal className="mt-10 flex flex-col items-start gap-3 sm:flex-row">
          <Button
            href={buildPath(language, {
              name: 'expertise',
              slug: 'agentic-organizations',
            })}
            icon={ArrowRight}
          >
            {content.primaryCta}
          </Button>
          <Button
            href={buildPath(language, {
              name: 'insights',
              slug: content.articleSlug,
            })}
            tone="ghost"
          >
            {content.secondaryCta}
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
