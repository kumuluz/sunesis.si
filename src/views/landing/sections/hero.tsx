import { ArrowRight } from 'lucide-react'
import type { LandingContent } from '../../../content/landing/landing'
import { AwardSeals } from '../../../components/award-seals'
import { BackgroundRibbon } from '../../../components/background-ribbon'
import { Button } from '../../../components/button'
import { RevealGroup, RevealItem } from '../../../components/motion'
import { ReferencesMarquee } from '../../../components/references-marquee'
import type { LanguageCode } from '../../../lib/router'

type HeroSectionProps = {
  content: LandingContent['hero']
  language: LanguageCode
}

export function HeroSection({ content, language }: HeroSectionProps) {
  return (
    <div className="relative isolate overflow-hidden">
      <BackgroundRibbon />
      <section className="relative px-5 pt-18 sm:px-6 lg:px-0">
        <div className="mx-auto grid max-w-[120rem] items-center gap-8 py-14 sm:py-16 lg:border-l lg:border-neutral-200 lg:min-h-[calc(100svh-16rem)] lg:gap-8 lg:px-28 lg:py-16 xl:px-36">
          {/* From 64rem the seals are pinned to the copy's bottom-right corner, so
              they never change its height: bottom-aligned with the CTA buttons,
              right edge on the header's Contact button (3.5rem nav inset vs
              the 7rem / 9rem content padding; past 120rem the header container is
              centred). A 2×2 cluster, one row of four from 90rem. On narrower
              desktops the copy column stops 23rem short of the viewport edge
              and the headline scales down (44px to 36px), so the cluster stays
              beside the copy instead of breaking below it. */}
          <div className="relative">
            <RevealGroup className="w-full max-w-[680px] lg:max-w-[min(760px,calc(100vw_-_30rem))] xl:max-w-[min(820px,calc(100vw_-_32rem))]">
              <RevealItem>
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
                  {content.eyebrow}
                </p>
              </RevealItem>
              <RevealItem>
                <h1 className="mt-5 max-w-4xl text-4xl font-bold leading-[1.04] text-neutral-900 sm:text-[2.5rem] lg:text-[clamp(2.25rem,calc(5.37vw_-_1.72rem),2.75rem)]">
                  {content.title}
                </h1>
              </RevealItem>
              <RevealItem>
                <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-600 sm:text-[1.0625rem] sm:leading-8 lg:max-xl:text-base lg:max-xl:leading-7">
                  {content.body}
                </p>
              </RevealItem>
              <RevealItem className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="#contact" icon={ArrowRight} iconLayout="trailing">
                  {content.primaryCta}
                </Button>
                <Button href="#expertise" tone="secondary">
                  {content.secondaryCta}
                </Button>
              </RevealItem>
            </RevealGroup>
            <div className="absolute -right-14 bottom-0 hidden xl:-right-22 w-[18rem] lg:block min-[90rem]:w-[37rem] min-[120rem]:-right-[min(calc(50vw_-_54.5rem),7rem)]">
              <AwardSeals
                className="grid-cols-2 min-[90rem]:grid-cols-4"
                contrastCaptions={{ from: 'always', id: 'award-seals-hero' }}
                items={content.awards.items}
                label={content.awards.label}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-1/2 z-0 hidden w-full max-w-[120rem] -translate-x-1/2 lg:block">
          <div className="h-full border-l border-neutral-200" />
        </div>
        <div className="relative z-10 mx-auto max-w-[120rem] px-5 sm:px-6 lg:px-28 xl:px-36">
          {/* Below 64rem the seals sit under the hero copy, above the trust line:
              2×2 on phones, one row of four from 40rem. */}
          <div className="pb-10 sm:pb-12 lg:hidden">
            <AwardSeals
              className="max-w-[37rem] grid-cols-2 sm:grid-cols-4"
              items={content.awards.items}
              label={content.awards.label}
            />
          </div>
          <p className="pb-6 text-xs font-bold uppercase tracking-[0.18em] text-neutral-500 sm:ml-10 lg:ml-0">
            {content.trustLine}
          </p>
        </div>
        <ReferencesMarquee language={language} />
      </div>
    </div>
  )
}
