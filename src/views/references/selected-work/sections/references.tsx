import { motion } from 'motion/react'
import { cardHover } from '../../../../components/cards/card-hover'
import { RevealGroup, revealItem } from '../../../../components/motion'
import type { ReferencesBlock } from '../../types'
import { Heading, Section, type SectionBg } from './section-shell'

export function ReferenceCardsSection({
  block,
  bg,
}: {
  block: ReferencesBlock
  bg: SectionBg
}) {
  return (
    <Section bg={bg} id={block.id}>
      <Heading
        eyebrow={block.eyebrow}
        intro={block.intro}
        title={block.title}
      />
      <RevealGroup className="mt-12 flex flex-wrap gap-5">
        {block.items.map((item) => (
          <motion.article
            className={`group relative flex grow basis-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-gradient-to-b from-white to-[#f4f7fb] p-7 lg:basis-[calc((100%-1.25rem)/2)] ${cardHover}`}
            key={item.title}
            variants={revealItem}
          >
            <span className="pointer-events-none absolute -right-10 -top-10 size-28 rounded-full bg-blue-600/5 transition-transform duration-500 group-hover:scale-150" />
            <span className="inline-flex w-fit items-center rounded-full bg-blue-600/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-blue-700">
              {item.label}
            </span>
            <h3 className="relative mt-5 text-2xl font-bold leading-snug text-neutral-950">
              {item.title}
            </h3>
            <div className="relative mt-4 space-y-4 text-sm leading-7 text-neutral-600">
              {item.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="relative mt-6">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-neutral-500">
                {item.expertiseTitle}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {item.expertise.map((tag) => (
                  <span
                    className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600 transition-colors duration-200 group-hover:bg-blue-50 group-hover:text-blue-700"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </RevealGroup>
    </Section>
  )
}
