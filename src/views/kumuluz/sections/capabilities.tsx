import { motion } from 'motion/react'
import { RevealGroup, revealItem } from '../../../components/motion'
import { cardHover } from '../../../components/cards/card-hover'
import type { CapabilitiesBlock } from '../types'
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
      <RevealGroup className="mt-12 flex flex-wrap gap-5">
        {block.items.map((item) => {
          const Icon = item.icon
          const basis = item.wide
            ? 'basis-full'
            : 'grow basis-full sm:basis-[calc((100%-1.25rem)/2)] lg:basis-[calc((100%-2.5rem)/3)]'
          return (
            <motion.article
              className={`group flex flex-col rounded-lg border border-neutral-200 bg-white p-6 ${cardHover} ${basis}`}
              key={item.title}
              variants={revealItem}
            >
              {Icon ? (
                <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-md bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                  <Icon
                    aria-hidden="true"
                    className="size-5"
                    strokeWidth={2.25}
                  />
                </div>
              ) : null}
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
          )
        })}
      </RevealGroup>
    </Section>
  )
}
