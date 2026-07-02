import { motion } from 'motion/react'
import { RevealGroup, revealItem } from '../../../../components/motion'
import type { StepsBlock } from '../../types'
import { Heading, Section, type SectionBg } from './section-shell'

export function StepsSection({
  block,
  bg,
}: {
  block: StepsBlock
  bg: SectionBg
}) {
  const numbered = block.numbered ?? true

  return (
    <Section bg={bg}>
      <Heading intro={block.intro} title={block.title} />
      <RevealGroup className="mt-12 flex flex-wrap gap-5">
        {block.items.map((item, index) => (
          <motion.article
            className="group grow basis-full rounded-lg border border-neutral-200 bg-white p-6 md:basis-[calc((100%-1.25rem)/2)] transition-colors duration-200"
            key={item.title}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            variants={revealItem}
            whileHover={{ scale: 1.01 }}
          >
            <div className="flex items-center gap-4">
              {numbered ? (
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-blue-50 text-base font-bold text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                  {index + 1}
                </div>
              ) : (
                <span className="block h-1.5 w-8 shrink-0 rounded-sm bg-blue-600 transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-12" />
              )}
              <h3 className="text-lg font-bold leading-snug text-neutral-950">
                {item.title}
              </h3>
            </div>
            <p className="mt-4 text-sm leading-7 text-neutral-600">
              {item.text}
            </p>
          </motion.article>
        ))}
      </RevealGroup>
    </Section>
  )
}
