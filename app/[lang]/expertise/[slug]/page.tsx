import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { JsonLd } from '@/components/json-ld'
import { expertisePages } from '@/content/expertise'
import { buildPageMetadata } from '@/lib/metadata'
import type { LanguageCode } from '@/lib/router'
import { breadcrumbSchema, serviceSchema } from '@/lib/structured-data'
import { EXPERTISE_SLUGS, type ExpertiseSlug } from '@/views/expertise/types'
import { ExpertiseRoute } from '@/views/routes/expertise-route'

type PageParams = { params: Promise<{ lang: string; slug: string }> }

export function generateStaticParams() {
  return ['en', 'sl'].flatMap((lang) =>
    EXPERTISE_SLUGS.map((slug) => ({ lang, slug })),
  )
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { lang, slug } = await params
  const language = lang as LanguageCode
  const page = expertisePages[slug as ExpertiseSlug]?.[language]
  if (!page) return {}
  return buildPageMetadata(
    language,
    { name: 'expertise', slug: slug as ExpertiseSlug },
    page.seo,
  )
}

export default async function Page({ params }: PageParams) {
  const { lang, slug } = await params
  const language = lang as LanguageCode
  const expertiseSlug = slug as ExpertiseSlug
  const page = expertisePages[expertiseSlug]?.[language]

  if (!page) {
    notFound()
  }

  return (
    <>
      <JsonLd
        data={[
          serviceSchema(language, expertiseSlug, page.seo.description),
          breadcrumbSchema(language, { name: 'expertise', slug: expertiseSlug }),
        ]}
      />
      <ExpertiseRoute language={language} slug={expertiseSlug} />
    </>
  )
}
