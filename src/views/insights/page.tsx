'use client'

import { MotionConfig } from 'motion/react'
import { useCallback, useMemo, useSyncExternalStore } from 'react'
import { ArticleCard } from '../../components/insights/article-card'
import { NewsletterForm } from '../../components/insights/newsletter-form'
import { Pagination } from '../../components/insights/pagination'
import { TopicTabs, type TopicTab } from '../../components/insights/topic-tabs'
import {
  categorySlug,
  formatInsightDate,
  insightArticleHref,
  insightCategories,
  insightPosts,
  thumbnailForSlug,
} from '../../content/insights'
import { RevealGroup, RevealItem } from '../../components/motion'
import type { LanguageCode } from '../../lib/router'
import type { InsightsPageContent } from './types'

const PAGE_SIZE = 12

type InsightsPageProps = {
  language: LanguageCode
  content: InsightsPageContent
}

const CATEGORIES = insightCategories()
const SLUG_TO_CATEGORY = new Map(CATEGORIES.map((c) => [categorySlug(c), c]))
const URL_CHANGE_EVENT = 'insights:url-change'
const DEFAULT_URL_STATE_SNAPSHOT = '|1'

function readUrlStateSnapshot() {
  if (typeof window === 'undefined') return DEFAULT_URL_STATE_SNAPSHOT

  const params = new URLSearchParams(window.location.search)
  const topic = params.get('topic')
  const activeKey = topic ? (SLUG_TO_CATEGORY.get(topic) ?? null) : null
  const parsedPage = Number(params.get('page'))
  const page = Number.isFinite(parsedPage) && parsedPage > 0 ? parsedPage : 1

  return `${activeKey ?? ''}|${page}`
}

function subscribeToUrlState(onStoreChange: () => void) {
  window.addEventListener('popstate', onStoreChange)
  window.addEventListener(URL_CHANGE_EVENT, onStoreChange)
  return () => {
    window.removeEventListener('popstate', onStoreChange)
    window.removeEventListener(URL_CHANGE_EVENT, onStoreChange)
  }
}

export function InsightsPage({ language, content }: InsightsPageProps) {
  const { activeKey, page } = useSyncExternalStore(
    subscribeToUrlState,
    readUrlStateSnapshot,
    () => DEFAULT_URL_STATE_SNAPSHOT,
  )
    .split('|')
    .reduce(
      (state, value, index) =>
        index === 0
          ? { ...state, activeKey: value || null }
          : { ...state, page: Number(value) || 1 },
      { activeKey: null as string | null, page: 1 },
    )

  const tabs: TopicTab[] = useMemo(
    () => [
      { key: null, label: content.viewAll },
      ...CATEGORIES.map((category) => ({
        key: category,
        label: content.categoryLabels[category] ?? category,
      })),
    ],
    [content],
  )

  const writeUrl = useCallback(
    (key: string | null, nextPage: number) => {
      const params = new URLSearchParams()
      if (key) params.set('topic', categorySlug(key))
      if (nextPage > 1) params.set('page', String(nextPage))
      const query = params.toString()
      const url = `/${language}/insights/${query ? `?${query}` : ''}`
      window.history.replaceState(null, '', url)
      window.dispatchEvent(new Event(URL_CHANGE_EVENT))
    },
    [language],
  )

  const filtered = useMemo(
    () =>
      activeKey
        ? insightPosts.filter((post) => post.categories.includes(activeKey))
        : insightPosts,
    [activeKey],
  )

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE))
  const currentPage = Math.min(page, pageCount)
  const visible = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  )

  const handleSelectTopic = (key: string | null) => {
    writeUrl(key, 1)
  }

  const handleSelectPage = (nextPage: number) => {
    writeUrl(activeKey, nextPage)
    if (typeof document !== 'undefined') {
      document
        .getElementById('insights-grid')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <MotionConfig reducedMotion="user">
      <section className="mx-auto max-w-6xl px-4 pb-24 pt-32 sm:px-6 sm:pt-40">
        <header className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(20rem,30rem)] lg:items-start lg:justify-between">
          <div className="flex flex-col items-start gap-8">
            <h1 className="text-4xl font-bold leading-[1.05] text-neutral-900 sm:text-5xl">
              {content.title}
            </h1>
            <NewsletterForm content={content} />
          </div>

          <p className="max-w-xl text-base leading-7 text-neutral-500 lg:pt-0 lg:text-right">
            {content.tagline}
          </p>
        </header>

        <div className="mt-12">
          <TopicTabs
            activeKey={activeKey}
            ariaLabel={content.title}
            onSelect={handleSelectTopic}
            tabs={tabs}
          />
        </div>

        <div id="insights-grid" className="scroll-mt-28">
          {visible.length === 0 ? (
            <p className="mt-16 text-base text-neutral-500">{content.empty}</p>
          ) : (
            <RevealGroup
              className="mt-12 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
              key={`${activeKey ?? 'all'}-${currentPage}`}
            >
              {visible.map((post) => (
                <RevealItem key={post.slug}>
                  <ArticleCard
                    categoryLabels={content.categoryLabels}
                    dateLabel={formatInsightDate(post.date, language)}
                    href={insightArticleHref(language, post.slug)}
                    post={post}
                    thumbnail={thumbnailForSlug(post.slug)}
                  />
                </RevealItem>
              ))}
            </RevealGroup>
          )}
        </div>

        <Pagination
          content={content.pagination}
          onChange={handleSelectPage}
          page={currentPage}
          pageCount={pageCount}
        />
      </section>
    </MotionConfig>
  )
}
