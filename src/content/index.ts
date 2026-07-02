import type { LanguageCode } from '../lib/router'
import { enContent } from './en'
import { slContent } from './sl'

export const contentByLanguage = {
  en: enContent,
  sl: slContent,
}

export type PageContent = (typeof contentByLanguage)[LanguageCode]
