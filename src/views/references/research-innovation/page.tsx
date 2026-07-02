'use client'

import { MotionConfig } from 'motion/react'
import { ReferencesMarquee } from '../../../components/references-marquee'
import type { LanguageCode } from '../../../lib/router'
import type { ReferencesPageBlock, ReferencesPageContent } from '../types'
import { FinalCtaSection } from './sections/final-cta'
import { ReferencesHero } from './sections/hero'
import { LogoWallSection } from './sections/logo-wall'
import { ProjectsSection } from './sections/projects'

type ResearchInnovationPageProps = {
  page: ReferencesPageContent
  language: LanguageCode
}

export function ResearchInnovationPage({
  page,
  language,
}: ResearchInnovationPageProps) {
  const contactHref = `/${language}/#contact`
  const expertiseHref = `/${language}/#expertise`

  const isLight = (block: ReferencesPageBlock) => block.type !== 'finalCta'

  function renderBlock(block: ReferencesPageBlock, index: number) {
    const key = index

    if (block.type === 'finalCta') {
      return (
        <FinalCtaSection
          block={block}
          contactHref={contactHref}
          expertiseHref={expertiseHref}
          key={key}
        />
      )
    }

    const lightBefore = page.sections.slice(0, index).filter(isLight).length
    const bg = lightBefore % 2 === 0 ? 'white' : 'muted'

    switch (block.type) {
      case 'projects':
        return <ProjectsSection bg={bg} block={block} key={key} />
      case 'logoWall':
        return <LogoWallSection bg={bg} block={block} key={key} />
    }
  }

  return (
    <MotionConfig reducedMotion="user">
      <ReferencesHero
        contactHref={contactHref}
        hero={page.hero}
        secondaryHref={page.heroSecondaryHref}
      />
      <ReferencesMarquee />
      {page.sections.map((block, index) => renderBlock(block, index))}
    </MotionConfig>
  )
}