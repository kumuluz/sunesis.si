import { ArrowRight } from 'lucide-react'
import { Button } from '../../../components/button'
import { Reveal } from '../../../components/motion'
import type { FinalCtaBlock } from '../types'
import { gridGlow } from './section-shell'

const KUMULUZ_URL = 'https://kumuluz.com'

export function FinalCtaSection({
  block,
  contactHref,
}: {
  block: FinalCtaBlock
  contactHref: string
}) {
  return (
    <section className="relative isolate overflow-hidden border-t border-neutral-200 bg-neutral-50 py-24 sm:py-28">
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 ${gridGlow} [mask-image:radial-gradient(100%_100%_at_50%_0%,black,transparent_75%)]`}
      />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="text-3xl font-bold leading-tight text-neutral-950 sm:text-4xl">
            {block.title}
          </h2>
          <div className="mt-6 space-y-5 text-base leading-8 text-neutral-600">
            {block.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <Button href={contactHref} icon={ArrowRight}>
              {block.primaryCta}
            </Button>
            {block.secondaryCta ? (
              <Button href={KUMULUZ_URL} tone="secondary">
                {block.secondaryCta}
              </Button>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
