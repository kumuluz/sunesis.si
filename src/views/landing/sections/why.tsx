import { motion } from 'motion/react'
import type { LandingContent } from '../../../content/landing/landing'
import { RevealGroup, revealItem } from '../../../components/motion'
import { SectionHeader } from './section-header'

type WhySectionProps = {
  content: LandingContent['landingPageSections']['why']
}

export function WhySection({ content }: WhySectionProps) {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader intro={content.intro} title={content.title} />
        <RevealGroup className="mt-12 grid gap-5 md:grid-cols-2">
          {content.items.map((item, index) => {
            const isLastOdd =
              index === content.items.length - 1 &&
              content.items.length % 2 === 1

            return (
              <motion.article
                className={`group rounded-lg border border-neutral-200 bg-white p-6 transition-colors duration-200 ${
                  isLastOdd ? 'md:col-span-2' : ''
                }`}
                key={item.title}
                transition={{ duration: 0.2, ease: 'easeOut' }}
                variants={revealItem}
                whileHover={{ scale: 1.01 }}
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-blue-50 text-base font-bold text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold leading-snug text-neutral-950">
                    {item.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-7 text-neutral-600">
                  {item.text}
                </p>
              </motion.article>
            )
          })}
        </RevealGroup>
      </div>
    </section>
  )
}
