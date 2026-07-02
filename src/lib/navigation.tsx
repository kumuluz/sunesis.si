'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect } from 'react'
import {
  buildPath,
  getLanguageFromPath,
  parseRoute,
  type LanguageCode,
} from './router'

export function useLocation(): string {
  const pathname = usePathname() || '/'
  return pathname.endsWith('/') ? pathname : `${pathname}/`
}

export function LinkInterceptor() {
  const router = useRouter()

  useEffect(() => {
    const handler = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return
      }

      const anchor = (event.target as HTMLElement).closest('a')
      if (!anchor) return

      const href = anchor.getAttribute('href')
      const target = anchor.getAttribute('target')

      if (
        !href ||
        target === '_blank' ||
        anchor.hasAttribute('download') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        anchor.origin !== window.location.origin
      ) {
        return
      }

      if (
        href.startsWith('#') ||
        (anchor.pathname === window.location.pathname && anchor.hash)
      ) {
        event.preventDefault()
        if (anchor.hash) {
          document
            .querySelector(anchor.hash)
            ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
          window.history.replaceState(null, '', anchor.hash)
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }
        return
      }

      if (!/^\/(en|sl)(\/|$)/.test(anchor.pathname)) return

      event.preventDefault()
      router.push(anchor.pathname + anchor.hash)
    }

    document.addEventListener('click', handler)
    return () => document.removeEventListener('click', handler)
  }, [router])

  return null
}

export function useLanguageSwitch() {
  const router = useRouter()
  const pathname = usePathname() || '/'

  return (nextLanguage: LanguageCode) => {
    const language = getLanguageFromPath(pathname)
    if (nextLanguage === language) return
    router.push(buildPath(nextLanguage, parseRoute(pathname)))
  }
}
