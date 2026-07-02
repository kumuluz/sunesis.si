import { notFound } from 'next/navigation'
import type { ReactNode } from 'react'
import { JsonLd } from '@/components/json-ld'
import { SiteChrome } from '@/components/site-chrome'
import { contentByLanguage } from '@/content'
import { landingContent } from '@/content/landing/landing'
import type { LanguageCode } from '@/lib/router'
import { organizationSchema, websiteSchema } from '@/lib/structured-data'

export function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'sl' }]
}

export default async function LangLayout({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params

  if (lang !== 'en' && lang !== 'sl') {
    notFound()
  }

  const language = lang as LanguageCode
  const content = contentByLanguage[language]
  const landing = landingContent[language]

  return (
    <>
      <JsonLd
        data={[organizationSchema(language), websiteSchema(language)]}
      />
      <SiteChrome
        contact={landing.landingPageSections.finalCta.contact}
        footer={content.footer}
        language={language}
        nav={content.nav}
      >
        {children}
      </SiteChrome>
    </>
  )
}
