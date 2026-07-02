'use client'

import type { ComponentType } from 'react'
import { companyPages } from '../../content/company'
import type { LanguageCode } from '../../lib/router'
import { AboutPage } from '../company/about/page'
import { AwardsPage } from '../company/awards/page'
import { CareersPage } from '../company/careers/page'
import type { CompanyPageContent, CompanySlug } from '../company/types'

const components: Record<
  CompanySlug,
  ComponentType<{ page: CompanyPageContent; language: LanguageCode }>
> = {
  about: AboutPage,
  awards: AwardsPage,
  careers: CareersPage,
}

export function CompanyRoute({
  language,
  slug,
}: {
  language: LanguageCode
  slug: CompanySlug
}) {
  const Component = components[slug]
  return <Component language={language} page={companyPages[slug][language]} />
}
