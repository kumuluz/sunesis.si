import type { AccountDeleteContent } from '../../views/accountdelete/types'

// Applications whose accounts can be deleted through this form. Shared across
// languages — product names are not translated.
export const ACCOUNT_DELETE_APPLICATIONS = ['EV Crowdsensing'] as const

// Netlify form name. Must match the hidden `form-name` field in the markup so
// Netlify Forms attributes the submission correctly.
export const ACCOUNT_DELETE_FORM_NAME = 'account-delete-request-form'

// Upper bound on the account name field, mirrored by the `maxLength` attribute.
export const ACCOUNT_NAME_MAX_LENGTH = 1000

const enAccountDelete = {
  seo: {
    title: 'Account deletion request | Sunesis',
    description:
      'Request the deletion of your Sunesis application account. Submit the application name and your account name and we will process the removal of your data.',
  },
  title: 'Account deletion request',
  heading: 'Request the deletion of your account',
  intro: 'Use the form below to request the deletion of your account.',
  applicationLabel: 'Application',
  applicationPlaceholder: 'Select an application',
  applications: ACCOUNT_DELETE_APPLICATIONS,
  accountNameLabel: 'Account name',
  accountNamePlaceholder: 'Your account name',
  requiredMessage: 'Field is required.',
  submit: 'Send request',
} as const

const slAccountDelete = {
  seo: {
    title: 'Zahteva za izbris računa | Sunesis',
    description:
      'Oddajte zahtevo za izbris svojega računa v aplikaciji Sunesis. Navedite aplikacijo in ime računa, mi pa bomo poskrbeli za izbris vaših podatkov.',
  },
  title: 'Zahteva za izbris računa',
  heading: 'Zahtevajte izbris svojega računa',
  intro: 'S spodnjim obrazcem oddajte zahtevo za izbris svojega računa.',
  applicationLabel: 'Aplikacija',
  applicationPlaceholder: 'Izberite aplikacijo',
  applications: ACCOUNT_DELETE_APPLICATIONS,
  accountNameLabel: 'Ime računa',
  accountNamePlaceholder: 'Vaše ime računa',
  requiredMessage: 'Polje je obvezno.',
  submit: 'Pošlji zahtevo',
} as const

export const accountDeleteContent: AccountDeleteContent = {
  en: enAccountDelete,
  sl: slAccountDelete,
}
