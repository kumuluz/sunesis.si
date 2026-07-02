import { Building2, Mail } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import type { LandingContent } from '../../../content/landing/landing'
import type { LanguageCode } from '../../../lib/router'

type FinalCtaSectionProps = {
  content: LandingContent['landingPageSections']['finalCta']
  language: LanguageCode
}

const MAPS_URL = 'https://maps.app.goo.gl/sUypTyZYofbouHZ79'

const fieldClassName =
  'w-full rounded-lg border border-neutral-200 bg-white px-3.5 py-2.5 text-base text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20'

const labelClassName = 'block text-sm font-semibold text-neutral-900'

const errorClassName = 'text-sm text-red-600'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const PHONE_PATTERN = /^\+?(?:[\s().-]*\d){7,15}[\s().-]*$/

type FieldErrors = {
  email?: string
  phone?: string
  message?: string
}

type SubmitStatus = 'idle' | 'submitting' | 'error'

const FORM_NAME = 'contact'

const encodeFormData = (data: Record<string, string>) =>
  Object.keys(data)
    .map(
      (key) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`,
    )
    .join('&')

export function FinalCtaSection({ content, language }: FinalCtaSectionProps) {
  const { contact, form } = content
  const router = useRouter()
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<SubmitStatus>('idle')

  const validate = (): FieldErrors => {
    const nextErrors: FieldErrors = {}

    const trimmedEmail = email.trim()
    if (!trimmedEmail) {
      nextErrors.email = form.emailRequiredError
    } else if (!EMAIL_PATTERN.test(trimmedEmail)) {
      nextErrors.email = form.emailInvalidError
    }

    const trimmedPhone = phone.trim()
    if (trimmedPhone && !PHONE_PATTERN.test(trimmedPhone)) {
      nextErrors.phone = form.phoneInvalidError
    }

    if (!message.trim()) {
      nextErrors.message = form.messageRequiredError
    }

    return nextErrors
  }

  const handleSubmit: React.ComponentProps<'form'>['onSubmit'] = async (
    event,
  ) => {
    event.preventDefault()

    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      return
    }

    setStatus('submitting')

    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeFormData({
          'form-name': FORM_NAME,
          firstName,
          lastName,
          email,
          phone,
          message,
        }),
      })

      if (!response.ok) {
        throw new Error(`Form submission failed: ${response.status}`)
      }

      router.push(`/${language}/thanks/`)
    } catch {
      setStatus('error')
    }
  }

  const isSubmitting = status === 'submitting'

  return (
    <section
      className="relative border-t border-neutral-200 bg-white py-32"
      id="contact"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/2 overflow-hidden border-r border-neutral-200 bg-neutral-50 lg:block"
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:96px_96px] [-webkit-mask-image:linear-gradient(to_right,transparent,black)] [mask-image:linear-gradient(to_right,transparent,black)]" />
      </div>
      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16">
        <div className="relative overflow-hidden rounded-2xl bg-neutral-50 px-6 py-12 sm:px-10 sm:py-16 lg:rounded-none lg:bg-transparent lg:px-0 lg:py-4">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:96px_96px] lg:hidden"
          />
          <div className="relative">
            <h2 className="text-3xl font-bold leading-tight text-neutral-900 sm:text-5xl">
              {content.title}
            </h2>
            <p className="mt-6 max-w-md text-base leading-8 text-neutral-600">
              {content.text}
            </p>
            <dl className="mt-12 space-y-6">
              <div className="flex items-start gap-4">
                <dt>
                  <Building2
                    aria-hidden="true"
                    className="size-6 text-neutral-400"
                    strokeWidth={1.75}
                  />
                  <span className="sr-only">Address</span>
                </dt>
                <dd className="text-base leading-7 text-neutral-600">
                  <a
                    className="transition-colors hover:text-neutral-900"
                    href={MAPS_URL}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {contact.address.map((line) => (
                      <span className="block" key={line}>
                        {line}
                      </span>
                    ))}
                  </a>
                </dd>
              </div>
              <div className="flex items-center gap-4">
                <dt>
                  <Mail
                    aria-hidden="true"
                    className="size-6 text-neutral-400"
                    strokeWidth={1.75}
                  />
                  <span className="sr-only">Email</span>
                </dt>
                <dd className="text-base text-neutral-600">
                  <a
                    className="transition-colors hover:text-neutral-900"
                    href={`mailto:${contact.email}`}
                  >
                    {contact.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <form
          className="flex flex-col gap-6"
          data-netlify="true"
          name={FORM_NAME}
          netlify-honeypot="bot-field"
          noValidate
          onSubmit={handleSubmit}
        >
          <input name="form-name" type="hidden" value={FORM_NAME} />
          <p className="hidden">
            <label>
              Do not fill this out if you are human:{' '}
              <input name="bot-field" tabIndex={-1} />
            </label>
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="space-y-2">
              <label className={labelClassName} htmlFor="contact-first-name">
                {form.firstNameLabel}
              </label>
              <input
                autoComplete="given-name"
                className={fieldClassName}
                id="contact-first-name"
                name="firstName"
                onChange={(event) => setFirstName(event.target.value)}
                type="text"
                value={firstName}
              />
            </div>
            <div className="space-y-2">
              <label className={labelClassName} htmlFor="contact-last-name">
                {form.lastNameLabel}
              </label>
              <input
                autoComplete="family-name"
                className={fieldClassName}
                id="contact-last-name"
                name="lastName"
                onChange={(event) => setLastName(event.target.value)}
                type="text"
                value={lastName}
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className={labelClassName} htmlFor="contact-email">
              {form.emailLabel}
            </label>
            <input
              aria-describedby={errors.email ? 'contact-email-error' : undefined}
              aria-invalid={errors.email ? true : undefined}
              autoComplete="email"
              className={fieldClassName}
              id="contact-email"
              name="email"
              onChange={(event) => {
                setEmail(event.target.value)
                if (errors.email) {
                  setErrors((prev) => ({ ...prev, email: undefined }))
                }
              }}
              required
              type="email"
              value={email}
            />
            {errors.email ? (
              <p className={errorClassName} id="contact-email-error">
                {errors.email}
              </p>
            ) : null}
          </div>
          <div className="space-y-2">
            <label className={labelClassName} htmlFor="contact-phone">
              {form.phoneLabel}
            </label>
            <input
              aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
              aria-invalid={errors.phone ? true : undefined}
              autoComplete="tel"
              className={fieldClassName}
              id="contact-phone"
              name="phone"
              onChange={(event) => {
                setPhone(event.target.value)
                if (errors.phone) {
                  setErrors((prev) => ({ ...prev, phone: undefined }))
                }
              }}
              type="tel"
              value={phone}
            />
            {errors.phone ? (
              <p className={errorClassName} id="contact-phone-error">
                {errors.phone}
              </p>
            ) : null}
          </div>
          <div className="space-y-2">
            <label className={labelClassName} htmlFor="contact-message">
              {form.messageLabel}
            </label>
            <textarea
              aria-describedby={
                errors.message ? 'contact-message-error' : undefined
              }
              aria-invalid={errors.message ? true : undefined}
              className={`${fieldClassName} min-h-36 resize-y`}
              id="contact-message"
              name="message"
              onChange={(event) => {
                setMessage(event.target.value)
                if (errors.message) {
                  setErrors((prev) => ({ ...prev, message: undefined }))
                }
              }}
              required
              rows={5}
              value={message}
            />
            {errors.message ? (
              <p className={errorClassName} id="contact-message-error">
                {errors.message}
              </p>
            ) : null}
          </div>
          <div className="flex flex-col items-end gap-3">
            {status === 'error' ? (
              <p className="w-full text-sm font-medium text-red-600" role="alert">
                {form.errorMessage}
              </p>
            ) : null}
            <button
              className="inline-flex min-h-11 items-center justify-center rounded-lg bg-blue-700 px-6 text-sm font-semibold text-white transition-colors hover:bg-blue-800 disabled:cursor-not-allowed disabled:opacity-60"
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? form.sendingLabel : form.submitLabel}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
