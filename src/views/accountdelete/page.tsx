'use client'

import { useState } from 'react'
import { Button } from '../../components/button'
import {
  ACCOUNT_DELETE_FORM_NAME,
  ACCOUNT_NAME_MAX_LENGTH,
} from '../../content/accountdelete/account-delete'
import type { LanguageCode } from '../../lib/router'
import type { AccountDeletePageContent } from './types'

type AccountDeletePageProps = {
  language: LanguageCode
  content: AccountDeletePageContent
}

const FIELD_CLASS =
  'w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-base text-neutral-900 outline-none transition-colors focus:border-neutral-900 placeholder:text-neutral-400'

export function AccountDeletePage({
  content,
  language,
}: AccountDeletePageProps) {
  const [application, setApplication] = useState('')
  const [accountName, setAccountName] = useState('')
  const [touched, setTouched] = useState({
    application: false,
    accountName: false,
  })

  const applicationError = application.trim() === ''
  const accountNameError = accountName.trim() === ''
  const isValid = !applicationError && !accountNameError

  return (
    <section className="relative border-t border-neutral-200 bg-white px-4 py-24 sm:px-6 sm:py-32">
      <div className="mx-auto max-w-xl">
        <h1 className="text-3xl font-bold leading-tight text-neutral-900 sm:text-4xl">
          {content.title}
        </h1>
        <h2 className="mt-8 text-xl font-semibold text-neutral-900">
          {content.heading}
        </h2>
        <p className="mt-3 text-base leading-8 text-neutral-600">
          {content.intro}
        </p>

        {/*
          Submitted natively so Netlify Forms handles the POST and then serves
          the success page referenced by `action`.
        */}
        <form
          action={`/${language}/thanks/`}
          className="mt-10 flex flex-col gap-6"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          method="POST"
          name={ACCOUNT_DELETE_FORM_NAME}
          noValidate
        >
          <input
            name="form-name"
            type="hidden"
            value={ACCOUNT_DELETE_FORM_NAME}
          />
          <p className="hidden">
            <label>
              <input name="bot-field" tabIndex={-1} />
            </label>
          </p>

          <div>
            <label
              className="block text-sm font-semibold text-neutral-900"
              htmlFor="account-delete-application"
            >
              {content.applicationLabel}
            </label>
            <select
              aria-describedby={
                touched.application && applicationError
                  ? 'account-delete-application-error'
                  : undefined
              }
              aria-invalid={
                touched.application && applicationError ? true : undefined
              }
              className={`mt-2 ${FIELD_CLASS} ${
                application === '' ? 'text-neutral-400' : ''
              }`}
              id="account-delete-application"
              name="application"
              onBlur={() =>
                setTouched((state) => ({ ...state, application: true }))
              }
              onChange={(event) => setApplication(event.target.value)}
              required
              value={application}
            >
              <option value="">{content.applicationPlaceholder}</option>
              {content.applications.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {touched.application && applicationError ? (
              <p
                className="mt-2 text-sm text-red-600"
                id="account-delete-application-error"
              >
                {content.requiredMessage}
              </p>
            ) : null}
          </div>

          <div>
            <label
              className="block text-sm font-semibold text-neutral-900"
              htmlFor="account-delete-account-name"
            >
              {content.accountNameLabel}
            </label>
            <input
              aria-describedby={
                touched.accountName && accountNameError
                  ? 'account-delete-account-name-error'
                  : undefined
              }
              aria-invalid={
                touched.accountName && accountNameError ? true : undefined
              }
              className={`mt-2 ${FIELD_CLASS}`}
              id="account-delete-account-name"
              maxLength={ACCOUNT_NAME_MAX_LENGTH}
              name="account-name"
              onBlur={() =>
                setTouched((state) => ({ ...state, accountName: true }))
              }
              onChange={(event) => setAccountName(event.target.value)}
              placeholder={content.accountNamePlaceholder}
              required
              type="text"
              value={accountName}
            />
            {touched.accountName && accountNameError ? (
              <p
                className="mt-2 text-sm text-red-600"
                id="account-delete-account-name-error"
              >
                {content.requiredMessage}
              </p>
            ) : null}
          </div>

          <div>
            <Button disabled={!isValid} tone="primary" type="submit">
              {content.submit}
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
