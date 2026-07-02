import type { Metadata } from 'next'
import { JsonLd } from '@/components/json-ld'
import { kumuluzPage } from '@/content/kumuluz/kumuluz'
import { buildPageMetadata } from '@/lib/metadata'
import type { LanguageCode } from '@/lib/router'
import { breadcrumbSchema, kumuluzAiSchema } from '@/lib/structured-data'
import { KumuluzRoute } from '@/views/routes/kumuluz-route'

type PageParams = { params: Promise<{ lang: string }> }

export async function generateMetadata({
  params,
}: PageParams): Promise<Metadata> {
  const { lang } = await params
  const language = lang as LanguageCode
  return buildPageMetadata(
    language,
    { name: 'kumuluz' },
    kumuluzPage[language].seo,
  )
}

export default async function Page({ params }: PageParams) {
  const { lang } = await params
  const language = lang as LanguageCode
  return (
    <>
      <JsonLd
        data={[
          kumuluzAiSchema(language),
          breadcrumbSchema(language, { name: 'kumuluz' }),
        ]}
      />
      <KumuluzRoute language={language} />
    </>
  )
}
