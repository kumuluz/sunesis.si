import { motion } from 'motion/react'
import { revealItem } from '../motion'
import type { CardItem } from '../../views/expertise/types'
import { cardHover } from './card-hover'

export function FeatureCard({ item }: { item: CardItem }) {
  return (
    <motion.article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-gradient-to-b from-white to-[#f4f7fb] p-7 ${cardHover}`}
      variants={revealItem}
    >
      <span className="pointer-events-none absolute -right-10 -top-10 size-28 rounded-full bg-blue-600/5 transition-transform duration-500 group-hover:scale-150" />
      {item.label ? (
        <span className="inline-flex w-fit items-center rounded-xl bg-blue-600/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-blue-700">
          {item.label}
        </span>
      ) : null}
      <h3
        className={`relative text-xl font-bold leading-snug text-neutral-950 ${
          item.label ? 'mt-5' : ''
        }`}
      >
        {item.title}
      </h3>
      <p className="relative mt-4 text-sm leading-7 text-neutral-600">
        {item.text}
      </p>
      {item.meta ? (
        <p className="relative mt-auto pt-5 text-sm font-semibold leading-6 text-neutral-800">
          {item.meta}
        </p>
      ) : null}
    </motion.article>
  )
}
