import { Bot, CloudCog, Network, ShieldCheck } from 'lucide-react'
import type { LandingContent } from '../../../content/landing/landing'
import { CardA } from '../../../components/cards/card-a'
import { Reveal, RevealGroup } from '../../../components/motion'

type IntroSectionProps = {
  content: LandingContent['intro']
}

const introIcons = [Bot, CloudCog, Network, ShieldCheck]

export function IntroSection({ content }: IntroSectionProps) {
  return (
    <section className="bg-white py-20" id="services">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
            {content.eyebrow}
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-neutral-900 sm:text-5xl">
            {content.title}
          </h2>
        </Reveal>
        <RevealGroup className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {content.cards.map((card, index) => {
            const Icon = introIcons[index] ?? Bot

            return <CardA icon={Icon} key={card} title={card} />
          })}
        </RevealGroup>
      </div>
    </section>
  )
}
