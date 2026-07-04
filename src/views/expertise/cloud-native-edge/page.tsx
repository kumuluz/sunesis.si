'use client'

import { MotionConfig } from 'motion/react'
import { ReferencesMarquee } from '../../../components/references-marquee'
import type { LanguageCode } from '../../../lib/router'
import type { ExpertiseBlock, ExpertisePageContent } from '../types'
import { CapabilitiesSection } from './sections/capabilities'
import { CardsSection } from './sections/cards'
import { CompareSection } from './sections/compare'
import { FinalCtaSection } from './sections/final-cta'
import { ExpertiseHero } from './sections/hero'
import { KumuluzSection } from './sections/kumuluz'
import { ListSection } from './sections/list'
import { ProseSection } from './sections/prose'
import { SplitSection } from './sections/split'
import { StepsSection } from './sections/steps'
import { TableSection } from './sections/table'

type CloudNativeEdgePageProps = {
  page: ExpertisePageContent
  language: LanguageCode
}

export function CloudNativeEdgePage({
  page,
  language,
}: CloudNativeEdgePageProps) {
  const contactHref = `/${language}/#contact`
  const expertiseHref = `/${language}/#expertise`

  const isLight = (block: ExpertiseBlock) =>
    block.type !== 'kumuluz' && block.type !== 'finalCta'

  function renderBlock(block: ExpertiseBlock, index: number) {
    const key = index

    if (block.type === 'kumuluz') {
      return (
        <KumuluzSection
          block={block}
          ctaHref={block.ctaHref}
          key={key}
        />
      )
    }

    if (block.type === 'finalCta') {
      return (
        <FinalCtaSection
          block={block}
          contactHref={contactHref}
          secondaryHref={expertiseHref}
          key={key}
        />
      )
    }

    const lightBefore = page.sections.slice(0, index).filter(isLight).length
    const bg = lightBefore % 2 === 0 ? 'white' : 'muted'

    switch (block.type) {
      case 'split':
        return <SplitSection bg={bg} block={block} key={key} />
      case 'prose':
        return <ProseSection bg={bg} block={block} key={key} />
      case 'capabilities':
        return <CapabilitiesSection bg={bg} block={block} key={key} />
      case 'compare':
        return <CompareSection bg={bg} block={block} key={key} />
      case 'table':
        return <TableSection bg={bg} block={block} key={key} />
      case 'cards':
        return (
          <CardsSection
            bg={bg}
            block={block}
            ctaHref={
              block.ctaHref ? `/${language}/${block.ctaHref}` : undefined
            }
            key={key}
          />
        )
      case 'list':
        return <ListSection bg={bg} block={block} key={key} />
      case 'steps':
        return <StepsSection bg={bg} block={block} key={key} />
    }
  }

  return (
    <MotionConfig reducedMotion="user">
      <ExpertiseHero
        contactHref={contactHref}
        hero={page.hero}
        secondaryHref={expertiseHref}
      />
      <ReferencesMarquee />
      {page.sections.map((block, index) => renderBlock(block, index))}
    </MotionConfig>
  )
}