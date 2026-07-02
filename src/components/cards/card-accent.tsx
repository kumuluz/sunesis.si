import { motion } from 'motion/react'
import { revealItem } from '../motion'
import type { CardItem } from '../../views/expertise/types'
import { cardHover } from './card-hover'

export function AccentCard({ item }: { item: CardItem }) {
  return (
    <motion.article
      className={`group flex h-full flex-col rounded-lg border border-neutral-200 bg-white p-6 ${cardHover}`}
      variants={revealItem}
    >
      <span className="block h-1.5 w-8 rounded-sm bg-blue-600 transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-16" />
      {item.label ? (
        <p className="mt-5 text-xs font-bold uppercase tracking-[0.14em] text-blue-700">
          {item.label}
        </p>
      ) : null}
      <h3
        className={`text-lg font-bold leading-snug text-neutral-950 ${
          item.label ? 'mt-3' : 'mt-5'
        }`}
      >
        {item.title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-neutral-600">{item.text}</p>
      {item.meta ? (
        <p className="mt-auto pt-5 text-sm font-semibold leading-6 text-neutral-800">
          {item.meta}
        </p>
      ) : null}
    </motion.article>
  )
}
