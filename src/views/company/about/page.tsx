'use client'

import { MotionConfig } from 'motion/react'
import type { LanguageCode } from '../../../lib/router'
import type { CompanyPageBlock, CompanyPageContent } from '../types'
import { CardsSection } from './sections/cards'
import { FinalCtaSection } from './sections/final-cta'
import { CompanyHero } from './sections/hero'
import { ProseSection } from './sections/prose'
import { SplitSection } from './sections/split'

type AboutPageProps = {
  page: CompanyPageContent
  language: LanguageCode
}

export function AboutPage({ page, language }: AboutPageProps) {
  const contactHref = `/${language}/#contact`
  const expertiseHref = `/${language}/#expertise`

  const isLight = (block: CompanyPageBlock) => block.type !== 'finalCta'

  function renderBlock(block: CompanyPageBlock, index: number) {
    const key = index

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
      case 'cards':
        return <CardsSection bg={bg} block={block} key={key} />
    }
  }

  return (
    <MotionConfig reducedMotion="user">
      <CompanyHero
        contactHref={contactHref}
        hero={page.hero}
        secondaryHref={expertiseHref}
      />
      {page.sections.map((block, index) => renderBlock(block, index))}
    </MotionConfig>
  )
}