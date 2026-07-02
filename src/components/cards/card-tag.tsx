import { motion } from 'motion/react'
import { revealItem } from '../motion'
import type { CardItem } from '../../views/expertise/types'
import { cardHover } from './card-hover'
import { splitTags } from './card-tags'

export function TagCard({ item }: { item: CardItem }) {
  const tags = splitTags(item.meta)

  return (
    <motion.article
      className={`group flex h-full flex-col rounded-xl border border-neutral-200 bg-white p-6 ${cardHover}`}
      variants={revealItem}
    >
      <h3 className="text-lg font-bold leading-snug text-neutral-950">
        {item.title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-neutral-600">{item.text}</p>
      {tags.length > 0 ? (
        <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
          {tags.map((tag) => (
            <span
              className="rounded-full bg-neutral-100 px-2.5 py-1 text-xs font-medium text-neutral-600 transition-colors duration-200 group-hover:bg-blue-50 group-hover:text-blue-700"
              key={tag}
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </motion.article>
  )
}
