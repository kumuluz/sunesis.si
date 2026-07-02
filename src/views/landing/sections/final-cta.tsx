import { Building2, Mail } from 'lucide-react'
import { useState } from 'react'
import type { LandingContent } from '../../../content/landing/landing'

type FinalCtaSectionProps = {
  content: LandingContent['landingPageSections']['finalCta']
}

const MAPS_URL = 'https://maps.app.goo.gl/sUypTyZYofbouHZ79'

const fieldClassName =
  'w-full rounded-lg border border-neutral-200 bg-white px-3.5 py-2.5 text-base text-neutral-900 outline-none transition-colors placeholder:text-neutral-400 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20'

const labelClassName = 'block text-sm font-semibold text-neutral-900'

export function FinalCtaSection({ content }: FinalCtaSectionProps) {
  const { contact, form } = content
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit: React.ComponentProps<'form'>['onSubmit'] = (event) => {
    event.preventDefault()

    const name = [firstName, lastName].filter(Boolean).join(' ').trim()
    const subject = name ? `Website inquiry from ${name}` : 'Website inquiry'
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      '',
      message,
    ]
      .filter((line) => line !== null)
      .join('\n')

    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`
  }

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
          noValidate
          onSubmit={handleSubmit}
        >
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
              autoComplete="email"
              className={fieldClassName}
              id="contact-email"
              name="email"
              onChange={(event) => setEmail(event.target.value)}
              required
              type="email"
              value={email}
            />
          </div>
          <div className="space-y-2">
            <label className={labelClassName} htmlFor="contact-phone">
              {form.phoneLabel}
            </label>
            <input
              autoComplete="tel"
              className={fieldClassName}
              id="contact-phone"
              name="phone"
              onChange={(event) => setPhone(event.target.value)}
              type="tel"
              value={phone}
            />
          </div>
          <div className="space-y-2">
            <label className={labelClassName} htmlFor="contact-message">
              {form.messageLabel}
            </label>
            <textarea
              className={`${fieldClassName} min-h-36 resize-y`}
              id="contact-message"
              name="message"
              onChange={(event) => setMessage(event.target.value)}
              required
              rows={5}
              value={message}
            />
          </div>
          <div className="flex justify-end">
            <button
              className="inline-flex min-h-11 items-center justify-center rounded-lg bg-blue-700 px-6 text-sm font-semibold text-white transition-colors hover:bg-blue-800"
              type="submit"
            >
              {form.submitLabel}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
