import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { JsonLd } from '@/components/json-ld'
import {
  INSIGHT_SLUGS,
  insightBySlug,
  insightsContent,
} from '@/content/insights'
import { articleBodies } from '@/content/insights/bodies.generated'
import { buildPageMetadata } from '@/lib/metadata'
import type { LanguageCode } from '@/lib/router'
import { breadcrumbSchema } from '@/lib/structured-data'
import { InsightsArticle } from '@/views/insights/article'

type PageParams = { params: Promise<{ lang: string; slug: string }> }

export function generateStaticParams() {
  return ['en', 'sl'].flatMap((lang) =>
    INSIGHT_SLUGS.map((slug) => ({ lang, slug })),
  )
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { lang, slug } = await params
  const language = lang as LanguageCode
  const post = insightBySlug(slug)
  if (!post) return {}
  return buildPageMetadata(
    language,
    { name: 'insights', slug },
    { title: `${post.title} — Sunesis`, description: post.excerpt },
  )
}

export default async function Page({ params }: PageParams) {
  const { lang, slug } = await params
  const language = lang as LanguageCode
  const post = insightBySlug(slug)

  if (!post) {
    notFound()
  }

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(language, { name: 'insights', slug })}
      />
      <InsightsArticle
        bodyHtml={articleBodies[slug] ?? ''}
        content={insightsContent[language]}
        language={language}
        post={post}
      />
    </>
  )
}
