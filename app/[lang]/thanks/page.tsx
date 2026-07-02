import type { Metadata } from 'next'
import { landingContent } from '@/content/landing/landing'
import type { LanguageCode } from '@/lib/router'
import { ThanksPage } from '@/views/thanks/page'

type PageParams = { params: Promise<{ lang: string }> }

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { lang } = await params
  const language = lang as LanguageCode
  return {
    title: landingContent[language].thanks.title,
    robots: { index: false, follow: false },
  }
}

export default async function Page({ params }: PageParams) {
  const { lang } = await params
  const language = lang as LanguageCode
  return <ThanksPage language={language} />
}
