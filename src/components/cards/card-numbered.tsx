import { motion } from 'motion/react'
import { revealItem } from '../motion'
import type { CardItem } from '../../views/expertise/types'
import { cardHover } from './card-hover'

export function NumberedCard({
  item,
  index,
}: {
  item: CardItem
  index: number
}) {
  const n = String(index + 1).padStart(2, '0')

  return (
    <motion.article
      className={`group relative flex h-full flex-col overflow-hidden rounded-xl border border-neutral-200 bg-white p-6 ${cardHover}`}
      variants={revealItem}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-3 top-1 select-none text-6xl font-black leading-none text-neutral-100 transition-colors duration-300 group-hover:text-blue-100"
      >
        {n}
      </span>
      <h3 className="relative text-base font-bold leading-snug text-neutral-950">
        {item.title}
      </h3>
      <p className="relative mt-3 text-sm leading-7 text-neutral-600">
        {item.text}
      </p>
    </motion.article>
  )
}
