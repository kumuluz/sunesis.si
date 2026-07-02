'use client'

import { MotionConfig } from 'motion/react'
import type { LandingContent } from '../../content/landing/landing'
import type { LanguageCode } from '../../lib/router'
import { AgenticOperationsSection } from './sections/agentic-operations'
import { HeroSection } from './sections/hero'
import { IntroSection } from './sections/intro'
import { ExpertiseSection } from './sections/expertise'
import { FinalCtaSection } from './sections/final-cta'
import { KumuluzSection } from './sections/kumuluz'
import { PositioningSection } from './sections/positioning'
import { ProofSection } from './sections/proof'
import { SelectedWorkSection } from './sections/selected-work'
import { WhySection } from './sections/why'

type LandingPageProps = {
  content: LandingContent
  language: LanguageCode
}

export function LandingPage({ content, language }: LandingPageProps) {
  return (
    <MotionConfig reducedMotion="user">
      <HeroSection content={content.hero} />
      <IntroSection content={content.intro} />
      <PositioningSection content={content.landingPageSections.positioning} />
      <ExpertiseSection
        content={content.landingPageSections.expertise}
        language={language}
      />
      <AgenticOperationsSection
        content={content.landingPageSections.agenticOperations}
      />
      <KumuluzSection content={content.landingPageSections.kumuluz} />
      <SelectedWorkSection content={content.landingPageSections.selectedWork} />
      <ProofSection content={content.landingPageSections.proof} />
      <WhySection content={content.landingPageSections.why} />
      <FinalCtaSection
        content={content.landingPageSections.finalCta}
        language={language}
      />
    </MotionConfig>
  )
}