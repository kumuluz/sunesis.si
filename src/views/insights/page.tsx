'use client'

import { MotionConfig } from 'motion/react'
import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  ArticleCard,
  NewsletterForm,
  Pagination,
  TopicTabs,
  type TopicTab,
} from '../../components/insights'
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

export function InsightsPage({ language, content }: InsightsPageProps) {
  const [activeKey, setActiveKey] = useState<string | null>(null)
  const [page, setPage] = useState(1)

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

  useEffect(() => {
    const syncFromUrl = () => {
      const params = new URLSearchParams(window.location.search)
      const topic = params.get('topic')
      const key = topic ? (SLUG_TO_CATEGORY.get(topic) ?? null) : null
      const parsedPage = Number(params.get('page'))
      setActiveKey(key)
      setPage(Number.isFinite(parsedPage) && parsedPage > 0 ? parsedPage : 1)
    }
    syncFromUrl()
    window.addEventListener('popstate', syncFromUrl)
    return () => window.removeEventListener('popstate', syncFromUrl)
  }, [])

  const writeUrl = useCallback(
    (key: string | null, nextPage: number) => {
      const params = new URLSearchParams()
      if (key) params.set('topic', categorySlug(key))
      if (nextPage > 1) params.set('page', String(nextPage))
      const query = params.toString()
      const url = `/${language}/insights/${query ? `?${query}` : ''}`
      window.history.replaceState(null, '', url)
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
    setActiveKey(key)
    setPage(1)
    writeUrl(key, 1)
  }

  const handleSelectPage = (nextPage: number) => {
    setPage(nextPage)
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
        <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
          <h1 className="text-4xl font-bold leading-[1.05] text-neutral-900 sm:text-5xl">
            {content.title}
          </h1>
          <p className="max-w-sm text-base leading-7 text-neutral-500 sm:text-right">
            {content.tagline}
          </p>
        </header>

        <div className="mt-8">
          <NewsletterForm content={content} />
        </div>

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
                    dateLabel={formatInsightDate(post.date, language)}
                    href={insightArticleHref(language, post.slug)}
                    post={post}
                    thumbnail={thumbnailForSlug(post.slug)}
                    topics={post.categories.map(
                      (category) =>
                        content.categoryLabels[category] ?? category,
                    )}
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
