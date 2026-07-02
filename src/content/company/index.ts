import type { LanguageCode } from '../../lib/router'
import type { CompanyPageContent, CompanySlug } from '../../views/company/types'
import { aboutPage } from './about'
import { awardsPage } from './awards'
import { careersPage } from './careers'

export const companyPages: Record<
  CompanySlug,
  Record<LanguageCode, CompanyPageContent>
> = {
  about: aboutPage,
  awards: awardsPage,
  careers: careersPage,
}
