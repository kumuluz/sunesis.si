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
      return { base: tag.toLowerCase().split('-')[0], q: Number.isNaN(q) ? 0 : q }
    })
    .sort((a, b) => b.q - a.q)

  for (const { base } of ranked) {
    if (base === 'sl') return 'sl'
    if (base === 'en') return 'en'
  }
  return null
}

export default async (request: Request, context: Context): Promise<Response> => {
  // A previously remembered choice always wins (set by the in-page switcher).
  const remembered = context.cookies.get('preferred_lang')
  let language: Language | null =
    remembered === 'sl' || remembered === 'en' ? remembered : null

  if (!language) {
    // Otherwise prefer the browser's declared language, then fall back to geo:
    // visitors located in Slovenia default to Slovenian, everyone else English.
    language =
      preferredFromAcceptLanguage(request.headers.get('accept-language')) ??
      (context.geo?.country?.code === 'SI' ? 'sl' : 'en')
  }

  return Response.redirect(new URL(`/${language}/`, request.url), 302)
}

export const config: Config = { path: '/' }
