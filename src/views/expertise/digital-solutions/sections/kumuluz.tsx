import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import { Button } from '../../../../components/button'
import { Reveal, RevealGroup, revealItem } from '../../../../components/motion'
import type { KumuluzBlock } from '../../types'
import { Section } from './section-shell'

export function KumuluzSection({
  block,
  ctaHref,
}: {
  block: KumuluzBlock
  ctaHref?: string
}) {
  return (
    <Section bg="dark" id="kumuluz">
      <div className="max-w-3xl">
        <Reveal>
          <h2 className="text-3xl font-bold leading-tight sm:text-4xl">
            {block.title}
          </h2>
        </Reveal>
        <Reveal
          className="mt-6 space-y-5 text-sm leading-7 text-neutral-300"
          delay={0.1}
        >
          {block.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>
      </div>
      <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2">
        {block.items.map((item) => (
          <motion.article
            className="rounded-lg border border-white/10 bg-white/[0.04] p-5 transition-colors duration-200 hover:bg-neutral-900"
            key={item.title}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            variants={revealItem}
            whileHover={{ scale: 1.02 }}
          >
            {item.label ? (
              <p className="text-xs font-bold uppercase leading-4 tracking-[0.14em] text-blue-200">
                {item.label}
              </p>
            ) : null}
            <h3
              className={`text-lg font-bold leading-snug ${item.label ? 'mt-3' : ''}`}
            >
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-neutral-300">
              {item.text}
            </p>
          </motion.article>
        ))}
      </RevealGroup>
      {block.cta ? (
        <Reveal className="mt-10">
          <Button href={ctaHref ?? '#'} icon={ArrowRight} tone="primary-dark">
            {block.cta}
          </Button>
        </Reveal>
      ) : null}
    </Section>
  )
}
