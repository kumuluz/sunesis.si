'use client'

import { landingContent } from '../../content/landing/landing'
import type { LanguageCode } from '../../lib/router'
import { LandingPage } from '../landing/page'

export function LandingRoute({ language }: { language: LanguageCode }) {
  return <LandingPage content={landingContent[language]} language={language} />
}
