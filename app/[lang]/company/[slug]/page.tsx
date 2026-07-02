import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { JsonLd } from '@/components/json-ld'
import { companyPages } from '@/content/company'
import { buildPageMetadata } from '@/lib/metadata'
import type { LanguageCode } from '@/lib/router'
import { breadcrumbSchema } from '@/lib/structured-data'
import { COMPANY_SLUGS, type CompanySlug } from '@/views/company/types'
import { CompanyRoute } from '@/views/routes/company-route'

type PageParams = { params: Promise<{ lang: string; slug: string }> }

export function generateStaticParams() {
  return ['en', 'sl'].flatMap((lang) =>
    COMPANY_SLUGS.map((slug) => ({ lang, slug })),
  )
}

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { lang, slug } = await params
  const language = lang as LanguageCode
  const page = companyPages[slug as CompanySlug]?.[language]
  if (!page) return {}
  return buildPageMetadata(
    language,
    { name: 'company', slug: slug as CompanySlug },
    page.seo,
  )
}

export default async function Page({ params }: PageParams) {
  const { lang, slug } = await params
  const language = lang as LanguageCode
  const companySlug = slug as CompanySlug

  if (!companyPages[companySlug]) {
    notFound()
  }

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(language, {
          name: 'company',
          slug: companySlug,
        })}
      />
      <CompanyRoute language={language} slug={companySlug} />
    </>
  )
}
