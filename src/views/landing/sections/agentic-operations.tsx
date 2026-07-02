import type { LandingContent } from '../../../content/landing/landing'
import { NumberedCard } from '../../../components/cards/card-numbered'
import { RevealGroup } from '../../../components/motion'
import { SectionHeader } from './section-header'

type AgenticOperationsSectionProps = {
  content: LandingContent['landingPageSections']['agenticOperations']
}

export function AgenticOperationsSection({
  content,
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
      </div>
    </section>
  )
}
