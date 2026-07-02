'use client'

import { MotionConfig } from 'motion/react'
import { ReferencesMarquee } from '../../components/references-marquee'
import type { LanguageCode } from '../../lib/router'
import { CapabilitiesSection } from './sections/capabilities'
import { CardsSection } from './sections/cards'
import { FinalCtaSection } from './sections/final-cta'
import { KumuluzHero } from './sections/hero'
import { DarkSection } from './sections/kumuluz'
import { ProductsSection } from './sections/products'
import { ProseSection } from './sections/prose'
import { SplitSection } from './sections/split'
import { StepsSection } from './sections/steps'
import type { KumuluzPageBlock, KumuluzPageContent } from './types'

type KumuluzPageProps = {
  page: KumuluzPageContent
  language: LanguageCode
}

export function KumuluzPage({ page, language }: KumuluzPageProps) {
  const contactHref = `/${language}/#contact`

  const isLight = (block: KumuluzPageBlock) =>
    block.type !== 'kumuluz' && block.type !== 'finalCta'

  function renderBlock(block: KumuluzPageBlock, index: number) {
    const key = index

    if (block.type === 'kumuluz') {
      return <DarkSection block={block} key={key} />
    }

    if (block.type === 'finalCta') {
      return (
        <FinalCtaSection block={block} contactHref={contactHref} key={key} />
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
      case 'capabilities':
        return <CapabilitiesSection bg={bg} block={block} key={key} />
      case 'steps':
        return <StepsSection bg={bg} block={block} key={key} />
      case 'products':
        return (
          <ProductsSection
            bg={bg}
            block={block}
            key={key}
            language={language}
          />
        )
    }
  }

  return (
    <MotionConfig reducedMotion="user">
      <KumuluzHero hero={page.hero} />
      <ReferencesMarquee />
      {page.sections.map((block, index) => renderBlock(block, index))}
    </MotionConfig>
  )
}