import { Check, Minus } from 'lucide-react'
import { motion } from 'motion/react'
import { RevealGroup, revealItem } from '../../../../components/motion'
import type { CompareBlock } from '../../types'
import { Heading, Section, type SectionBg } from './section-shell'

export function CompareSection({
  block,
  bg,
}: {
  block: CompareBlock
  bg: SectionBg
}) {
  return (
    <Section bg={bg}>
      <Heading intro={block.intro} title={block.title} />
      <RevealGroup className="mt-12 grid gap-5 md:grid-cols-2">
        {block.columns.map((column, index) => {
          const highlight = index === block.columns.length - 1
          const Icon = highlight ? Check : Minus

          return (
            <motion.article
              className={`rounded-lg border p-6 transition-colors duration-200 ${
                highlight
                  ? 'border-blue-200 bg-blue-50/50'
                  : 'border-neutral-200 bg-white'
              }`}
              key={column.title}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              variants={revealItem}
              whileHover={{ scale: 1.01 }}
            >
              <h3 className="text-lg font-bold leading-snug text-neutral-950">
                {column.title}
              </h3>
              <ul className="mt-5 space-y-3 text-sm leading-6 text-neutral-700">
                {column.bullets.map((bullet) => (
                  <li className="flex gap-3" key={bullet}>
                    <Icon
                      aria-hidden="true"
                      className={`mt-0.5 size-4 shrink-0 ${
                        highlight ? 'text-blue-600' : 'text-neutral-400'
                      }`}
                      strokeWidth={2.5}
                    />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          )
        })}
      </RevealGroup>
    </Section>
  )
}
