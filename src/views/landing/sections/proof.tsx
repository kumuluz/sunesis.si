import { motion } from 'motion/react'
import type { LandingContent } from '../../../content/landing/landing'
import { Reveal, RevealGroup, revealItem } from '../../../components/motion'

type ProofSectionProps = {
  content: LandingContent['landingPageSections']['proof']
}

export function ProofSection({ content }: ProofSectionProps) {
  return (
    <section className="border-y border-neutral-200 bg-neutral-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <Reveal className="lg:sticky lg:top-24">
            <h2 className="text-3xl font-bold leading-tight text-neutral-950 sm:text-5xl">
              {content.title}
            </h2>
            <p className="mt-5 text-base leading-8 text-neutral-600">
              {content.text}
            </p>
          </Reveal>
          <RevealGroup className="grid gap-5 sm:grid-cols-2">
            {content.cards.map((card) => (
              <motion.article
                className="group rounded-lg border border-neutral-200 bg-white p-6 transition-colors duration-200"
                key={card.title}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                variants={revealItem}
                whileHover={{ scale: 1.01 }}
              >
                <span className="block h-1.5 w-8 rounded-sm bg-blue-600 transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-16" />
                <h3 className="mt-5 text-lg font-bold leading-snug text-neutral-950">
                  {card.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-neutral-600">
                  {card.text}
                </p>
              </motion.article>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  )
}
