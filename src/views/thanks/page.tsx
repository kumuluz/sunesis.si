'use client'

import { Button } from '../../components/button'
import { landingContent } from '../../content/landing/landing'
import type { LanguageCode } from '../../lib/router'

type ThanksPageProps = {
  language: LanguageCode
}

export function ThanksPage({ language }: ThanksPageProps) {
  const { thanks } = landingContent[language]

  return (
    <section className="relative flex min-h-[70vh] items-center justify-center border-t border-neutral-200 bg-white px-4 py-32 sm:px-6">
      <div className="mx-auto max-w-xl text-center">
        <h1 className="text-3xl font-bold leading-tight text-neutral-900 sm:text-5xl">
          {thanks.title}
        </h1>
        <p className="mt-6 text-base leading-8 text-neutral-600">
          {thanks.text}
        </p>
        <div className="mt-10 flex justify-center">
          <Button href={`/${language}/`} tone="primary">
            {thanks.backLabel}
          </Button>
        </div>
      </div>
    </section>
  )
}
