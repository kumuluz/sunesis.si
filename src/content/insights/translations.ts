import type { LanguageCode } from '../../lib/router'
import type { InsightPost } from '../../views/insights/types'

export function insightPostsForLanguage(
  posts: InsightPost[],
  language: LanguageCode,
): InsightPost[] {
  return posts.filter(
    (post) =>
      !post.language ||
      post.language === language ||
      !post.translations?.[language],
  )
}

export function insightTranslation(post: InsightPost) {
  if (!post.language) return undefined
  const language: LanguageCode = post.language === 'sl' ? 'en' : 'sl'
  const slug = post.translations?.[language]
  return slug ? { language, slug } : undefined
}
