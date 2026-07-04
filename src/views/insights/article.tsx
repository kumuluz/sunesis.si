import { ArrowLeft } from 'lucide-react'
import { formatInsightDate } from '../../content/insights'
import type { LanguageCode } from '../../lib/router'
import type { InsightPost, InsightsPageContent } from './types'

type InsightsArticleProps = {
  language: LanguageCode
  content: InsightsPageContent
  post: InsightPost
  bodyHtml: string
}

export function InsightsArticle({
  language,
  content,
  post,
  bodyHtml,
}: InsightsArticleProps) {
  const insightsHref = `/${language}/insights/`
  const topics = post.categories.map(
    (category) => content.categoryLabels[category] ?? category,
  )

  return (
    <article className="mx-auto max-w-3xl px-4 pb-24 pt-28 sm:px-6 sm:pt-36">
      <a
        className="inline-flex items-center gap-1.5 rounded-sm text-sm font-semibold text-neutral-500 transition-colors hover:text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
        href={insightsHref}
      >
        <ArrowLeft aria-hidden="true" className="size-4" strokeWidth={2.25} />
        {content.article.backToInsights}
      </a>

      {topics.length > 0 ? (
        <ul className="mt-8 flex flex-wrap gap-2">
          {topics.map((topic) => (
            <li key={topic}>
              <span className="inline-flex rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
                {topic}
              </span>
            </li>
          ))}
        </ul>
      ) : null}

      <h1 className="mt-5 text-3xl font-bold leading-[1.12] text-neutral-900 sm:text-4xl">
        {post.title}
      </h1>

      <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-neutral-500">
        <span className="font-semibold text-neutral-700">{post.authors}</span>
        <span aria-hidden="true">·</span>
        <time dateTime={post.date}>{formatInsightDate(post.date, language)}</time>
        <span aria-hidden="true">·</span>
        <span>{content.article.minRead(post.minutes)}</span>
      </div>

      {bodyHtml ? (
        <div
          className="insights-article mt-12"
          dangerouslySetInnerHTML={{ __html: bodyHtml }}
        />
      ) : (
        <p className="mt-12 text-base text-neutral-500">
          {content.article.empty}
        </p>
      )}

      <footer className="mt-16 border-t border-neutral-200 pt-8">
        <a
          className="inline-flex items-center gap-1.5 rounded-sm text-sm font-semibold text-neutral-500 transition-colors hover:text-neutral-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          href={insightsHref}
        >
          <ArrowLeft aria-hidden="true" className="size-4" strokeWidth={2.25} />
          {content.article.backToInsights}
        </a>
      </footer>
    </article>
  )
}
