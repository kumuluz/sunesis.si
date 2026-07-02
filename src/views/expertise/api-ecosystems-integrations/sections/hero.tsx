import { ArrowRight } from 'lucide-react'
import { Button } from '../../../../components/button'
import { RevealGroup, RevealItem } from '../../../../components/motion'
import type { HeroBlock } from '../../types'
import { gridGlow } from './section-shell'

export function ExpertiseHero({
  hero,
  contactHref,
  secondaryHref = '#kumuluz',
}: {
  hero: HeroBlock
  contactHref: string
  secondaryHref?: string
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-neutral-200 bg-white">
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-0 ${gridGlow} [mask-image:radial-gradient(120%_120%_at_85%_0%,black,transparent_70%),radial-gradient(120%_120%_at_15%_0%,black,transparent_70%)]`}
      />
      <div className="relative mx-auto max-w-6xl px-4 pb-32 pt-44 sm:px-6">
        <RevealGroup className="mx-auto max-w-3xl text-center">
          <RevealItem>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
              {hero.eyebrow}
            </p>
          </RevealItem>
          <RevealItem>
            <h1 className="mt-5 text-4xl font-bold leading-[1.08] text-neutral-900">
              {hero.title}
            </h1>
          </RevealItem>
          {hero.body.map((paragraph) => (
            <RevealItem key={paragraph}>
              <p className="mt-6 text-base leading-8 text-neutral-600 sm:text-[1.0625rem]">
                {paragraph}
              </p>
            </RevealItem>
          ))}
          {hero.primaryCta || hero.secondaryCta ? (
            <RevealItem className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              {hero.primaryCta ? (
                <Button href={contactHref} icon={ArrowRight}>
                  {hero.primaryCta}
                </Button>
              ) : null}
              {hero.secondaryCta ? (
                <Button href={secondaryHref} tone="secondary">
                  {hero.secondaryCta}
                </Button>
              ) : null}
            </RevealItem>
          ) : null}
          {hero.trustLine ? (
            <RevealItem>
              <p className="mt-10 text-xs font-bold uppercase tracking-[0.18em] text-neutral-500">
                {hero.trustLine}
              </p>
            </RevealItem>
          ) : null}
        </RevealGroup>
      </div>
    </section>
  )
}
