import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { motion } from 'motion/react'
import { cardHover } from '../../../components/cards/card-hover'
import { RevealGroup, revealItem } from '../../../components/motion'
import {
  expertiseHrefForLabel,
  kumuluzProductAnchors,
} from '../../../lib/expertise-links'
import type { LanguageCode } from '../../../lib/router'
import type { ProductsBlock } from '../types'
import { Heading, Section, type SectionBg } from './section-shell'

export function ProductsSection({
  block,
  bg,
  language,
}: {
  block: ProductsBlock
  bg: SectionBg
  language: LanguageCode
}) {
  return (
    <Section bg={bg} id="products">
      <Heading
        eyebrow={block.eyebrow}
        intro={block.intro}
        title={block.title}
      />
      <RevealGroup className="mt-12 flex flex-wrap gap-5">
        {block.items.map((item, index) => (
          <motion.article
            className={`group flex scroll-mt-28 grow basis-full flex-col rounded-xl border border-neutral-200 bg-white p-7 lg:basis-[calc((100%-1.25rem)/2)] ${cardHover}`}
            id={kumuluzProductAnchors[index]}
            key={item.title}
            variants={revealItem}
          >
            <span className="block h-1.5 w-8 rounded-sm bg-blue-600 transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-16" />
            <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-blue-700">
              {item.label}
            </p>
            <h3 className="mt-3 text-xl font-bold leading-snug text-neutral-950">
              {item.title}
            </h3>
            <div className="mt-4 space-y-4 text-sm leading-7 text-neutral-600">
              {item.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-6">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-neutral-500">
                {item.bestForTitle}
              </p>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {item.bestFor.map((tag) => (
                  <span
                    className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600 transition-colors duration-200 group-hover:bg-blue-50 group-hover:text-blue-700"
                    key={tag}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6">
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-neutral-500">
                {item.relatedTitle}
              </p>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5">
                {item.related.map((label) => {
                  const href = expertiseHrefForLabel(label, language)

                  return href ? (
                    <a
                      className="group/link inline-flex items-center gap-1 text-sm font-semibold text-neutral-700 transition-colors hover:text-blue-700"
                      href={href}
                      key={label}
                    >
                      {label}
                      <ArrowRight
                        aria-hidden="true"
                        className="size-3.5 -translate-x-1 opacity-0 transition duration-300 group-hover/link:translate-x-0 group-hover/link:opacity-100"
                        strokeWidth={2.25}
                      />
                    </a>
                  ) : (
                    <span
                      className="text-sm font-semibold text-neutral-700"
                      key={label}
                    >
                      {label}
                    </span>
                  )
                })}
              </div>
            </div>

            <div className="mt-auto pt-7">
              <a
                className="group/cta inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition-colors hover:text-neutral-900"
                href={item.href}
              >
                {item.cta}
                <ArrowUpRight
                  aria-hidden="true"
                  className="size-4 transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5"
                  strokeWidth={2.25}
                />
              </a>
            </div>
          </motion.article>
        ))}
      </RevealGroup>
    </Section>
  )
}
