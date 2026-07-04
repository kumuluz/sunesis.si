import type { LanguageCode } from '../../lib/router'

export type InsightPost = {
  slug: string
  title: string
  date: string
  authors: string
  categories: string[]
  excerpt: string
  minutes: number
}

export type InsightsPageContent = {
  seo: { title: string; description: string }
  title: string
  tagline: string
  viewAll: string
  readPost: string
  articlesCount: (count: number) => string
  empty: string
  newsletter: {
    heading: string
    placeholder: string
    submit: string
    submitting: string
    success: string
    error: string
    invalidEmail: string
  }
  pagination: {
    previous: string
    next: string
    goToPage: (page: number) => string
    current: (page: number, total: number) => string
  }
  article: {
    backToInsights: string
    minRead: (minutes: number) => string
    viewOriginal: string
    empty: string
  }
  categoryLabels: Record<string, string>
}

export type InsightsContent = Record<LanguageCode, InsightsPageContent>
