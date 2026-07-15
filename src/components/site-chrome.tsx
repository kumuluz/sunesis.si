'use client'

import { MotionConfig } from 'motion/react'
import { useEffect, type ReactNode } from 'react'
import type { PageContent } from '../content'
import type { LandingContent } from '../content/landing/landing'
import { LinkInterceptor, useLanguageSwitch } from '../lib/navigation'
import type { LanguageCode } from '../lib/router'
import { Footer } from './footer'
import { Header, type HeaderLanguage } from './header'

const LANGUAGES: HeaderLanguage[] = [
  { code: 'sl', label: 'SL', path: '/sl/' },
  { code: 'en', label: 'EN', path: '/en/' },
]

type SiteChromeProps = {
  language: LanguageCode
  nav: PageContent['nav']
  footer: PageContent['footer']
  contact: LandingContent['landingPageSections']['finalCta']['contact']
  children: ReactNode
}

export function SiteChrome({
  language,
  nav,
  footer,
  contact,
  children,
}: SiteChromeProps) {
  const switchLanguage = useLanguageSwitch()
  const cspNonce =
    typeof document === 'undefined'
      ? undefined
      : document.querySelector<HTMLScriptElement>('script[nonce]')?.nonce

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  useEffect(() => {
    if (window.location.hash) {
      document
        .querySelector(window.location.hash)
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }, [])

  useEffect(() => {
    const root = document.documentElement

    const updateOverscrollColor = () => {
      const scrollable = root.scrollHeight - window.innerHeight
      const atBottom = scrollable > 0 && window.scrollY >= scrollable - 2
      root.style.backgroundColor = atBottom ? '#0a0a0a' : '#ffffff'
    }

    updateOverscrollColor()
    window.addEventListener('scroll', updateOverscrollColor, { passive: true })
    window.addEventListener('resize', updateOverscrollColor)

    return () => {
      window.removeEventListener('scroll', updateOverscrollColor)
      window.removeEventListener('resize', updateOverscrollColor)
    }
  }, [])

  return (
    <MotionConfig nonce={cspNonce}>
      <div className="min-h-screen overflow-hidden bg-white text-neutral-900">
        <LinkInterceptor />
        <Header
          content={nav}
          language={language}
          languages={LANGUAGES}
          onLanguageChange={switchLanguage}
        />
        <main>{children}</main>
        <Footer contact={contact} content={footer} language={language} />
      </div>
    </MotionConfig>
  )
}
