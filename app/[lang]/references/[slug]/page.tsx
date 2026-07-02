import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { JsonLd } from '@/components/json-ld'
import { referencesPages } from '@/content/references/references'
import { buildPageMetadata } from '@/lib/metadata'
import type { LanguageCode } from '@/lib/router'
import { breadcrumbSchema } from '@/lib/structured-data'
import { REFERENCE_SLUGS, type ReferenceSlug } from '@/views/references/types'
import { ReferencesRoute } from '@/views/routes/references-route'

type PageParams = { params: Promise<{ lang: string; slug: string }> }

export function generateStaticParams() {
  return ['en', 'sl'].flatMap((lang) =>
    REFERENCE_SLUGS.map((slug) => ({ lang, slug })),
  )
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { lang, slug } = await params
  const language = lang as LanguageCode
  const page = referencesPages[slug as ReferenceSlug]?.[language]
  if (!page) return {}
  return buildPageMetadata(
    language,
    { name: 'references', slug: slug as ReferenceSlug },
    page.seo,
  )
}

export default async function Page({ params }: PageParams) {
  const { lang, slug } = await params
  const language = lang as LanguageCode
  const referenceSlug = slug as ReferenceSlug

  if (!referencesPages[referenceSlug]) {
    notFound()
  }

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(language, {
          name: 'references',
          slug: referenceSlug,
        })}
      />
      <ReferencesRoute language={language} slug={referenceSlug} />
    </>
  )
}
