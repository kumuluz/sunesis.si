'use client'

import { useState } from 'react'
import type { InsightsPageContent } from '../../views/insights/types'
import { Button } from '../button'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MAILCHIMP_ACTION_URL =
  'https://kumuluz.us12.list-manage.com/subscribe/post?u=e45cbf1dbe43e3d7bd15b3abd&id=fc67f95a6b'
const MAILCHIMP_JSON_URL =
  'https://kumuluz.us12.list-manage.com/subscribe/post-json?u=e45cbf1dbe43e3d7bd15b3abd&id=fc67f95a6b'
const MAILCHIMP_BOT_FIELD = 'b_e45cbf1dbe43e3d7bd15b3abd_fc67f95a6b'

type SubmitStatus = 'idle' | 'submitting' | 'success' | 'error'

type MailchimpResponse = {
  result?: 'success' | 'error'
}

const subscribeToMailchimp = (email: string) =>
  new Promise<void>((resolve, reject) => {
    const callbackName = `mailchimpCallback_${Date.now()}_${Math.random()
      .toString(36)
      .slice(2)}`
    const params = new URLSearchParams({
      EMAIL: email,
      [MAILCHIMP_BOT_FIELD]: '',
      c: callbackName,
    })
    const script = document.createElement('script')

    const cleanup = () => {
      delete (window as unknown as Record<string, unknown>)[callbackName]
      script.remove()
    }

    ;(window as unknown as Record<string, (data: MailchimpResponse) => void>)[
      callbackName
    ] = (data) => {
      cleanup()
      if (data.result === 'success') {
        resolve()
        return
      }
      reject(new Error('Mailchimp subscription failed'))
    }

    script.src = `${MAILCHIMP_JSON_URL}&${params.toString()}`
    script.async = true
    script.onerror = () => {
      cleanup()
      reject(new Error('Mailchimp subscription request failed'))
    }
    document.body.append(script)
  })

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
      await subscribeToMailchimp(trimmed)
      setStatus('success')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  const isSubmitting = status === 'submitting'

  return (
    <form
      action={MAILCHIMP_ACTION_URL}
      className="w-full max-w-md"
      method="post"
      noValidate
      onSubmit={handleSubmit}
    >
      <input name={MAILCHIMP_BOT_FIELD} type="hidden" value="" />

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
          name="EMAIL"
          onChange={(event) => {
            setEmail(event.target.value)
            if (error) setError(null)
            if (status !== 'idle') setStatus('idle')
          }}
          placeholder={newsletter.placeholder}
          type="email"
          value={email}
        />
        <Button
          className="bg-neutral-900 hover:bg-blue-700 cursor-pointer"
          disabled={isSubmitting}
          size="md"
          type="submit"
        >
          {isSubmitting ? newsletter.submitting : newsletter.submit}
        </Button>
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
