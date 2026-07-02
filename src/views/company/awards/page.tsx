'use client'

import { MotionConfig } from 'motion/react'
import type { LanguageCode } from '../../../lib/router'
import type { CompanyPageBlock, CompanyPageContent } from '../types'
import { CapabilitiesSection } from './sections/capabilities'
import { CardsSection } from './sections/cards'
import { FinalCtaSection } from './sections/final-cta'
import { CompanyHero } from './sections/hero'
import { ListSection } from './sections/list'
import { ProseSection } from './sections/prose'

type AwardsPageProps = {
  page: CompanyPageContent
  language: LanguageCode
}

export function AwardsPage({ page, language }: AwardsPageProps) {
  const contactHref = `/${language}/#contact`
  const expertiseHref = `/${language}/#expertise`
  const kumuluzHref = `/${language}/kumuluz/`

  const isLight = (block: CompanyPageBlock) => block.type !== 'finalCta'

  function renderBlock(block: CompanyPageBlock, index: number) {
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
      case 'capabilities':
        return <CapabilitiesSection bg={bg} block={block} key={key} />
      case 'list':
        return <ListSection bg={bg} block={block} key={key} />
      case 'cards':
        return <CardsSection bg={bg} block={block} key={key} />
      case 'prose':
        return <ProseSection bg={bg} block={block} key={key} />
    }
  }

  return (
    <MotionConfig reducedMotion="user">
      <CompanyHero
        contactHref={contactHref}
        hero={page.hero}
        secondaryHref={kumuluzHref}
      />
      {page.sections.map((block, index) => renderBlock(block, index))}
    </MotionConfig>
  )
}