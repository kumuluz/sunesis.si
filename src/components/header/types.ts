import type { LanguageCode } from '../../lib/router'
import type { PageContent } from '../../content'

type NavLink = {
  label: string
  description: string
}

export type NavItem = {
  label: string
  hasDropdown: boolean
  groups: readonly {
    title: string
    links: readonly NavLink[]
  }[]
}

export type HeaderLanguage = {
  code: LanguageCode
  label: string
  path: string
}

export type HeaderProps = {
  content: PageContent['nav']
  language: LanguageCode
  languages: HeaderLanguage[]
  onLanguageChange: (language: LanguageCode) => void
}
