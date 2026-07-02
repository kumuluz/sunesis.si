import type { Metadata } from 'next'
import { JsonLd } from '@/components/json-ld'
import { companyPages } from '@/content/company'
import { buildPageMetadata } from '@/lib/metadata'
import type { LanguageCode } from '@/lib/router'
import { breadcrumbSchema } from '@/lib/structured-data'
import { CompanyRoute } from '@/views/routes/company-route'

type PageParams = { params: Promise<{ lang: string }> }

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { lang } = await params
  const language = lang as LanguageCode
  return buildPageMetadata(
    language,
    { name: 'company' },
    companyPages.about[language].seo,
  )
}

export default async function Page({ params }: PageParams) {
  const { lang } = await params
  const language = lang as LanguageCode
  return (
    <>
      <JsonLd data={breadcrumbSchema(language, { name: 'company' })} />
      <CompanyRoute language={language} slug="about" />
    </>
  )
}
