'use client'

import { insightsContent } from '../../content/insights'
import type { LanguageCode } from '../../lib/router'
import { InsightsPage } from '../insights/page'

export function InsightsRoute({ language }: { language: LanguageCode }) {
  return <InsightsPage content={insightsContent[language]} language={language} />
}
