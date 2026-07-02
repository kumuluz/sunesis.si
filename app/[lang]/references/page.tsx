import type { Metadata } from 'next'
import { JsonLd } from '@/components/json-ld'
import { referencesPages } from '@/content/references/references'
import { buildPageMetadata } from '@/lib/metadata'
import type { LanguageCode } from '@/lib/router'
import { breadcrumbSchema } from '@/lib/structured-data'
import { ReferencesRoute } from '@/views/routes/references-route'

type PageParams = { params: Promise<{ lang: string }> }

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { lang } = await params
  const language = lang as LanguageCode
  return buildPageMetadata(
    language,
    { name: 'references' },
    referencesPages['selected-work'][language].seo,
  )
}

export default async function Page({ params }: PageParams) {
  const { lang } = await params
  const language = lang as LanguageCode
  return (
    <>
      <JsonLd data={breadcrumbSchema(language, { name: 'references' })} />
      <ReferencesRoute language={language} slug="selected-work" />
    </>
  )
}
