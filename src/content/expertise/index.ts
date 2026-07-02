import type { LanguageCode } from '../../lib/router'
import type {
  ExpertisePageContent,
  ExpertiseSlug,
} from '../../views/expertise/types'
import { agenticAiPage } from './agentic-ai'
import { apiEcosystemsIntegrationsPage } from './api-ecosystems-integrations'
import { cloudNativeEdgePage } from './cloud-native-edge'
import { devOpsPlatformEngineeringPage } from './devops-platform-engineering'
import { digitalSolutionsPage } from './digital-solutions'

export const expertisePages: Record<
  ExpertiseSlug,
  Record<LanguageCode, ExpertisePageContent>
> = {
  'agentic-ai': agenticAiPage,
  'digital-solutions': digitalSolutionsPage,
  'cloud-native-edge': cloudNativeEdgePage,
  'api-ecosystems-integrations': apiEcosystemsIntegrationsPage,
  'devops-platform-engineering': devOpsPlatformEngineeringPage,
}
