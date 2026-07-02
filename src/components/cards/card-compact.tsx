import { motion } from 'motion/react'
import { revealItem } from '../motion'
import type { CardItem } from '../../views/expertise/types'
import { cardHover } from './card-hover'

export function CompactCard({ item }: { item: CardItem }) {
  return (
    <motion.article
      className={`group flex h-full flex-col rounded-lg border border-neutral-200 bg-white p-5 ${cardHover}`}
      variants={revealItem}
    >
      <div className="flex items-center gap-3">
        <span className="size-2.5 shrink-0 rounded-full bg-blue-600 ring-4 ring-blue-100 transition-colors duration-300 group-hover:ring-blue-200" />
        <h3 className="text-sm font-bold leading-snug text-neutral-950">
          {item.title}
        </h3>
      </div>
      <p className="mt-3 text-[13px] leading-6 text-neutral-600">{item.text}</p>
    </motion.article>
  )
}
