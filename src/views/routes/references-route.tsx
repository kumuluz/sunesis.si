'use client'

import type { ComponentType } from 'react'
import { referencesPages } from '../../content/references/references'
import type { LanguageCode } from '../../lib/router'
import { ClientsIndustriesPage } from '../references/clients-industries/page'
import { OpenSourcePage } from '../references/open-source/page'
import { ResearchInnovationPage } from '../references/research-innovation/page'
import { SelectedWorkPage } from '../references/selected-work/page'
import type { ReferencesPageContent, ReferenceSlug } from '../references/types'

const components: Record<
  ReferenceSlug,
  ComponentType<{ page: ReferencesPageContent; language: LanguageCode }>
> = {
  'selected-work': SelectedWorkPage,
  'open-source': OpenSourcePage,
  'clients-industries': ClientsIndustriesPage,
  'research-innovation': ResearchInnovationPage,
}

export function ReferencesRoute({
  language,
  slug,
}: {
  language: LanguageCode
  slug: ReferenceSlug
}) {
  const Component = components[slug]
  return <Component language={language} page={referencesPages[slug][language]} />
}
