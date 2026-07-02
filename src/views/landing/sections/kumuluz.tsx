import { Blocks, CloudCog, Network, ShieldCheck, Sparkles } from 'lucide-react'
import type { LandingContent } from '../../../content/landing/landing'
import { CardC } from '../../../components/cards/card-c'
import { Reveal, RevealGroup } from '../../../components/motion'

type KumuluzSectionProps = {
  content: LandingContent['landingPageSections']['kumuluz']
}

const kumuluzIcons = [Sparkles, Network, Blocks, CloudCog, ShieldCheck]

export function KumuluzSection({ content }: KumuluzSectionProps) {
  return (
    <section className="bg-neutral-950 py-20 text-white sm:py-24" id="kumuluz">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <Reveal>
            <h2 className="text-3xl font-bold leading-tight sm:text-5xl">
              {content.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-neutral-300">
              {content.intro}
            </p>
          </Reveal>
          <Reveal
            className="rounded-md border border-white/10 bg-white/5 p-6 text-sm leading-7 text-neutral-300"
            delay={0.1}
          >
            {content.summary}
          </Reveal>
        </div>
        <RevealGroup className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {content.items.map((item, index) => {
            const Icon = kumuluzIcons[index] ?? Blocks

            return (
              <CardC
                icon={Icon}
                key={item.title}
                label={item.label}
                text={item.text}
                title={item.title}
              />
            )
          })}
        </RevealGroup>
      </div>
    </section>
  )
}
