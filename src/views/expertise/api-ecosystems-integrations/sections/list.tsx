import { motion } from 'motion/react'
import { Reveal, RevealGroup, revealItem } from '../../../../components/motion'
import type { ListBlock } from '../../types'
import { Heading, Section, type SectionBg } from './section-shell'

export function ListSection({
  block,
  bg,
}: {
  block: ListBlock
  bg: SectionBg
}) {
  const variant = block.variant ?? 'pills'

  return (
    <Section bg={bg}>
      <Heading
        eyebrow={block.eyebrow}
        intro={block.intro}
        title={block.title}
      />
      {block.body && block.body.length > 0 ? (
        <Reveal
          className="mt-6 max-w-3xl space-y-5 text-base leading-8 text-neutral-600"
          delay={0.1}
        >
          {block.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>
      ) : null}
      {variant === 'pills' ? (
        <RevealGroup className="mt-10 flex flex-wrap gap-2.5">
          {block.items.map((item) => (
            <motion.span
              className="inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3.5 py-1.5 text-sm font-medium text-neutral-700 transition-colors duration-200 hover:border-blue-200 hover:bg-blue-50/60 hover:text-neutral-900"
              key={item}
              variants={revealItem}
            >
              <span className="size-1.5 shrink-0 rounded-full bg-blue-600" />
              {item}
            </motion.span>
          ))}
        </RevealGroup>
      ) : (
        <RevealGroup className="mt-10 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
          {block.items.map((item) => (
            <motion.div
              className="flex gap-2 text-sm leading-6 text-neutral-700"
              key={item}
              variants={revealItem}
            >
              <span className="mt-2 size-1.5 shrink-0 rounded-full bg-blue-600" />
              <span>{item}</span>
            </motion.div>
          ))}
        </RevealGroup>
      )}
    </Section>
  )
}
