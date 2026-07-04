import type { Metadata } from 'next'
import { JsonLd } from '@/components/json-ld'
import { insightsContent } from '@/content/insights'
import { buildPageMetadata } from '@/lib/metadata'
import type { LanguageCode } from '@/lib/router'
import { breadcrumbSchema } from '@/lib/structured-data'
import { InsightsRoute } from '@/views/routes/insights-route'

type PageParams = { params: Promise<{ lang: string }> }

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { lang } = await params
  const language = lang as LanguageCode
  return buildPageMetadata(
    language,
    { name: 'insights' },
    insightsContent[language].seo,
  )
}

export default async function Page({ params }: PageParams) {
  const { lang } = await params
  const language = lang as LanguageCode
  return (
    <>
      <JsonLd data={breadcrumbSchema(language, { name: 'insights' })} />
      <InsightsRoute language={language} />
    </>
  )
}
