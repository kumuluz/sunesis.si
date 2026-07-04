'use client'

import { useState } from 'react'
import type { InsightsPageContent } from '../../views/insights/types'

const FORM_NAME = 'newsletter'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error'

const encodeFormData = (data: Record<string, string>) =>
  Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&')

export function NewsletterForm({ content }: { content: InsightsPageContent }) {
  const { newsletter } = content
  const [email, setEmail] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [status, setStatus] = useState<SubmitStatus>('idle')

  const handleSubmit: React.ComponentProps<'form'>['onSubmit'] = async (
    event,
  ) => {
    event.preventDefault()

    const trimmed = email.trim()
    if (!EMAIL_PATTERN.test(trimmed)) {
      setError(newsletter.invalidEmail)
      return
    }
    setError(null)
    setStatus('submitting')

    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeFormData({ 'form-name': FORM_NAME, email: trimmed }),
      })
      if (!response.ok) {
        throw new Error(`Form submission failed: ${response.status}`)
      }
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  const isSubmitting = status === 'submitting'

  return (
    <form
      className="w-full max-w-md"
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

      <div className="flex items-center gap-2 rounded-xl border border-neutral-300 bg-white p-1.5 pl-2 transition-colors focus-within:border-neutral-900">
        <label className="sr-only" htmlFor="newsletter-email">
          {newsletter.heading}
        </label>
        <input
          aria-describedby={error ? 'newsletter-error' : undefined}
          aria-invalid={error ? true : undefined}
          autoComplete="email"
          className="min-w-0 flex-1 bg-transparent px-3 py-1.5 text-md text-neutral-900 outline-none placeholder:text-neutral-400"
          id="newsletter-email"
          name="email"
          onChange={(event) => {
            setEmail(event.target.value)
            if (error) setError(null)
            if (status !== 'idle') setStatus('idle')
          }}
          placeholder={newsletter.placeholder}
          type="email"
          value={email}
        />
        <button
          className="shrink-0 cursor-pointer rounded-lg bg-neutral-900 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          disabled={isSubmitting}
          type="submit"
        >
          {isSubmitting ? newsletter.submitting : newsletter.submit}
        </button>
      </div>

      {error ? (
        <p className="mt-2 pl-2 text-sm text-red-600" id="newsletter-error">
          {error}
        </p>
      ) : null}
      {status === 'success' ? (
        <p
          className="mt-2 pl-2 text-sm font-medium text-neutral-700"
          role="status"
        >
          {newsletter.success}
        </p>
      ) : null}
      {status === 'error' ? (
        <p className="mt-2 pl-2 text-sm text-red-600" role="alert">
          {newsletter.error}
        </p>
      ) : null}
    </form>
  )
}
