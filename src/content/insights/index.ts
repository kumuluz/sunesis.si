import { thumbnails } from '../../components/thumbnails'
import { buildPath, type LanguageCode } from '../../lib/router'
import type { InsightsContent, InsightPost } from '../../views/insights/types'
import { insightPosts } from './posts.generated'

export { insightPosts }

export const INSIGHT_SLUGS = insightPosts.map((post) => post.slug)

const postsBySlug = new Map(insightPosts.map((post) => [post.slug, post]))

export function insightBySlug(slug: string): InsightPost | undefined {
  return postsBySlug.get(slug)
}

export function insightArticleHref(
  language: LanguageCode,
  slug: string,
): string {
  return buildPath(language, { name: 'insights', slug })
}

export function insightCategories(posts: InsightPost[] = insightPosts): string[] {
  const counts = new Map<string, number>()
  for (const post of posts) {
    for (const category of post.categories) {
      counts.set(category, (counts.get(category) ?? 0) + 1)
    }
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
    .map(([category]) => category)
}

export function categorySlug(category: string): string {
  return category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

const thumbnailsBySlug = new Map(
  insightPosts.map((post, index) => [
    post.slug,
    thumbnails[index % thumbnails.length],
  ]),
)

export function thumbnailForSlug(slug: string) {
  return thumbnailsBySlug.get(slug) ?? thumbnails[0]
}

const MONTHS: Record<LanguageCode, string[]> = {
  en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  sl: ['jan.', 'feb.', 'mar.', 'apr.', 'maj', 'jun.', 'jul.', 'avg.', 'sep.', 'okt.', 'nov.', 'dec.'],
}

export function formatInsightDate(iso: string, language: LanguageCode): string {
  const [year, month, day] = iso.split('-')
  const monthLabel = MONTHS[language][Number(month) - 1] ?? month
  const dayLabel = String(Number(day))
  return language === 'sl'
    ? `${dayLabel}. ${monthLabel} ${year}`
    : `${dayLabel} ${monthLabel} ${year}`
}

export const insightsContent: InsightsContent = {
  en: {
    seo: {
      title: 'Insights — Sunesis',
      description:
        'Articles, releases and updates from Sunesis on AgenticAI, APIs, cloud-native architectures, DevOps, KumuluzEE and enterprise software engineering.',
    },
    title: 'Insights',
    tagline: 'New articles, the latest in technology, solutions, and updates.',
    viewAll: 'View all',
    readPost: 'Read post',
    articlesCount: (count) => `${count} ${count === 1 ? 'article' : 'articles'}`,
    empty: 'No articles in this topic yet.',
    newsletter: {
      heading: 'Subscribe to our newsletter',
      placeholder: 'Enter your email',
      submit: 'Subscribe',
      submitting: 'Subscribing…',
      success: 'Thanks — you are subscribed.',
      error: 'Something went wrong. Please try again.',
      invalidEmail: 'Please enter a valid email address.',
    },
    pagination: {
      previous: 'Previous',
      next: 'Next',
      goToPage: (page) => `Go to page ${page}`,
      current: (page, total) => `Page ${page} of ${total}`,
    },
    article: {
      backToInsights: 'Back to Insights',
      minRead: (minutes) => `${minutes} min read`,
      viewOriginal: 'View the original article',
      empty: 'This article has no content.',
    },
    categoryLabels: {
      Product: 'Products',
      Developers: 'Developers',
      Announcement: 'Announcements',
      API: 'API',
      Crowdsensing: 'Crowdsensing',
      Community: 'Community',
      News: 'News',
      Integration: 'Integration',
    },
  },
  sl: {
    seo: {
      title: 'Vsebine — Sunesis',
      description:
        'Članki, izdaje in novice podjetja Sunesis o AgenticAI, API-jih, cloud-native arhitekturah, DevOpsu, KumuluzEE in razvoju poslovne programske opreme.',
    },
    title: 'Vsebine',
    tagline: 'Novi članki, najnovejše na področju tehnologije, rešitev in novic.',
    viewAll: 'Vse',
    readPost: 'Preberi',
    articlesCount: (count) => {
      const mod100 = count % 100
      const mod10 = count % 10
      let word = 'člankov'
      if (mod100 < 10 || mod100 > 20) {
        if (mod10 === 1) word = 'članek'
        else if (mod10 === 2) word = 'članka'
        else if (mod10 === 3 || mod10 === 4) word = 'članki'
      }
      return `${count} ${word}`
    },
    empty: 'V tej temi še ni člankov.',
    newsletter: {
      heading: 'Naročite se na e-novice',
      placeholder: 'Vnesite svoj e-naslov',
      submit: 'Naroči se',
      submitting: 'Naročanje…',
      success: 'Hvala — naročeni ste.',
      error: 'Prišlo je do napake. Poskusite znova.',
      invalidEmail: 'Vnesite veljaven e-naslov.',
    },
    pagination: {
      previous: 'Prejšnja',
      next: 'Naslednja',
      goToPage: (page) => `Pojdi na stran ${page}`,
      current: (page, total) => `Stran ${page} od ${total}`,
    },
    article: {
      backToInsights: 'Nazaj na Vsebine',
      minRead: (minutes) => `${minutes} min branja`,
      viewOriginal: 'Ogled izvirnega članka',
      empty: 'Ta članek nima vsebine.',
    },
    categoryLabels: {
      Product: 'Produkti',
      Developers: 'Razvijalci',
      Announcement: 'Napovedi',
      API: 'API',
      Crowdsensing: 'Crowdsensing',
      Community: 'Skupnost',
      News: 'Novice',
      Integration: 'Integracije',
    },
  },
}
