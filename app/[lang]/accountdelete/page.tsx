import type { Metadata } from 'next'
import { accountDeleteContent } from '@/content/accountdelete/account-delete'
import { buildPageMetadata } from '@/lib/metadata'
import type { LanguageCode } from '@/lib/router'
import { AccountDeletePage } from '@/views/accountdelete/page'

type PageParams = { params: Promise<{ lang: string }> }

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { lang } = await params
  const language = lang as LanguageCode
  return buildPageMetadata(
    language,
    { name: 'accountdelete' },
    accountDeleteContent[language].seo,
  )
}

export default async function Page({ params }: PageParams) {
  const { lang } = await params
  const language = lang as LanguageCode
  return (
    <AccountDeletePage
      content={accountDeleteContent[language]}
      language={language}
    />
  )
}
