import type { LanguageCode } from '../../lib/router'

export type AccountDeletePageContent = {
  seo: { title: string; description: string }
  title: string
  heading: string
  intro: string
  applicationLabel: string
  applicationPlaceholder: string
  applications: readonly string[]
  accountNameLabel: string
  accountNamePlaceholder: string
  requiredMessage: string
  submit: string
}

export type AccountDeleteContent = Record<
  LanguageCode,
  AccountDeletePageContent
>
