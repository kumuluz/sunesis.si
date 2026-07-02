'use client'

import { kumuluzPage } from '../../content/kumuluz/kumuluz'
import type { LanguageCode } from '../../lib/router'
import { KumuluzPage } from '../kumuluz/page'

export function KumuluzRoute({ language }: { language: LanguageCode }) {
  return <KumuluzPage language={language} page={kumuluzPage[language]} />
}
