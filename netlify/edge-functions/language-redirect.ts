import type { Config, Context } from '@netlify/edge-functions'

type Language = 'en' | 'sl'

function preferredFromAcceptLanguage(header: string | null): Language | null {
  if (!header) return null

  const ranked = header
    .split(',')
    .map((part) => {
      const [tag, ...params] = part.trim().split(';')
      const qParam = params.find((p) => p.trim().startsWith('q='))
      const q = qParam ? parseFloat(qParam.split('=')[1]) : 1
      return {
        base: tag.toLowerCase().split('-')[0],
        q: Number.isNaN(q) ? 0 : q,
      }
    })
    .sort((a, b) => b.q - a.q)

  for (const { base } of ranked) {
    if (base === 'sl') return 'sl'
    if (base === 'en') return 'en'
  }
  return null
}

// Language-less paths that need to be resolved to their localized counterpart.
// The empty string is the site root; every other entry is a top-level segment
// that exists under /en/... and /sl/... .
const LANGUAGE_LESS_PATHS = ['', 'accountdelete'] as const

function targetPath(pathname: string): string {
  return pathname.replace(/^\/|\/$/g, '')
}

export default async (
  request: Request,
  context: Context,
): Promise<Response> => {
  const remembered = context.cookies.get('preferred_lang')
  let language: Language | null =
    remembered === 'sl' || remembered === 'en' ? remembered : null

  if (!language) {
    language =
      preferredFromAcceptLanguage(request.headers.get('accept-language')) ??
      (context.geo?.country?.code === 'SI' ? 'sl' : 'en')
  }

  const segment = targetPath(new URL(request.url).pathname)

  return Response.redirect(
    new URL(
      segment ? `/${language}/${segment}/` : `/${language}/`,
      request.url,
    ),
    302,
  )
}

export const config: Config = {
  // Both the bare and trailing-slash forms — the site itself uses trailing
  // slashes, so inbound links appear in either shape.
  path: LANGUAGE_LESS_PATHS.flatMap((segment) =>
    segment ? [`/${segment}`, `/${segment}/`] : ['/'],
  ),
}
