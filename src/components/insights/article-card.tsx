import type { StaticImageData } from 'next/image'
import type { InsightPost } from '../../views/insights/types'
import { cardHover } from '../cards/card-hover'

type ArticleCardProps = {
  post: InsightPost
  thumbnail: StaticImageData
  href: string
  topics: string[]
  dateLabel: string
}

export function ArticleCard({
  post,
  thumbnail,
  href,
  topics,
  dateLabel,
}: ArticleCardProps) {
  return (
    <article className={`group relative flex flex-col ${cardHover}`}>
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-neutral-200 bg-neutral-100">
        <img
          alt=""
          className="size-full object-cover"
          loading="lazy"
          src={thumbnail.src}
        />
      </div>

      <p className="mt-4 text-xs font-semibold text-neutral-500">
        {post.authors}
        <span aria-hidden="true"> · </span>
        <time dateTime={post.date}>{dateLabel}</time>
      </p>

      <h3 className="mt-2 text-lg font-bold leading-snug text-neutral-900 sm:text-xl">
        <a
          className="rounded-sm decoration-2 after:absolute after:inset-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          href={href}
        >
          {post.title}
        </a>
      </h3>

      {post.excerpt ? (
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-neutral-600">
          {post.excerpt}
        </p>
      ) : null}

      {topics.length > 0 ? (
        <ul className="mt-4 flex flex-wrap gap-2">
          {topics.map((topic) => (
            <li key={topic}>
              <span className="inline-flex rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700">
                {topic}
              </span>
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  )
}
