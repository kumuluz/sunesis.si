import { motion } from 'motion/react'
import { RevealGroup, revealItem } from '../../../../components/motion'
import type { CapabilitiesBlock } from '../../types'
import { Heading, Section, type SectionBg } from './section-shell'

export function CapabilitiesSection({
  block,
  bg,
}: {
  block: CapabilitiesBlock
  bg: SectionBg
}) {
  return (
    <Section bg={bg}>
      <Heading intro={block.intro} title={block.title} />
      <RevealGroup className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {block.items.map((item) => (
          <motion.article
            className={`flex flex-col rounded-lg border border-neutral-200 bg-white p-6 transition-colors duration-200 ${
              item.wide ? 'lg:col-span-2' : ''
            }`}
            key={item.title}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            variants={revealItem}
            whileHover={{ scale: 1.01 }}
          >
            <h3 className="text-lg font-bold leading-snug text-neutral-950">
              {item.title}
            </h3>
            <p className="mt-4 text-sm leading-7 text-neutral-600">
              {item.text}
            </p>
            {item.bullets && item.bullets.length > 0 ? (
              <div className="mt-5">
                {item.bulletsTitle ? (
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-600">
                    {item.bulletsTitle}
                  </p>
                ) : null}
                <ul
                  className={`mt-3 text-sm font-medium text-neutral-700 ${
                    item.wide
                      ? 'grid gap-x-8 gap-y-2 sm:grid-cols-2'
                      : 'space-y-2'
                  }`}
                >
                  {item.bullets.map((bullet) => (
                    <li className="flex gap-2" key={bullet}>
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-blue-600" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </motion.article>
        ))}
      </RevealGroup>
    </Section>
  )
}
