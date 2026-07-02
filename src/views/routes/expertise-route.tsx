'use client'

import type { ComponentType } from 'react'
import { expertisePages } from '../../content/expertise'
import type { LanguageCode } from '../../lib/router'
import { AgenticAiPage } from '../expertise/agenticai/page'
import { ApiEcosystemsIntegrationsPage } from '../expertise/api-ecosystems-integrations/page'
import { CloudNativeEdgePage } from '../expertise/cloud-native-edge/page'
import { DevOpsPlatformEngineeringPage } from '../expertise/devops-platform-engineering/page'
import { DigitalSolutionsPage } from '../expertise/digital-solutions/page'
import type { ExpertisePageContent, ExpertiseSlug } from '../expertise/types'

const components: Record<
  ExpertiseSlug,
  ComponentType<{ page: ExpertisePageContent; language: LanguageCode }>
> = {
  'agentic-ai': AgenticAiPage,
  'digital-solutions': DigitalSolutionsPage,
  'cloud-native-edge': CloudNativeEdgePage,
  'api-ecosystems-integrations': ApiEcosystemsIntegrationsPage,
  'devops-platform-engineering': DevOpsPlatformEngineeringPage,
}

export function ExpertiseRoute({
  language,
  slug,
}: {
  language: LanguageCode
  slug: ExpertiseSlug
}) {
  const Component = components[slug]
  return <Component language={language} page={expertisePages[slug][language]} />
}
