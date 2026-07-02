import { Check } from 'lucide-react'
import { motion } from 'motion/react'
import { revealItem } from '../motion'
import type { CardItem } from '../../views/expertise/types'
import { cardHover } from './card-hover'

export function CheckCard({ item }: { item: CardItem }) {
  return (
    <motion.article
      className={`group flex h-full gap-4 rounded-xl border border-neutral-200 bg-white p-6 ${cardHover}`}
      variants={revealItem}
    >
      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-700 transition-colors duration-300 ease-out group-hover:bg-blue-600 group-hover:text-white">
        <Check aria-hidden="true" className="size-4" strokeWidth={2.75} />
      </span>
      <div>
        <h3 className="text-base font-bold leading-snug text-neutral-950">
          {item.title}
        </h3>
        <p className="mt-2 text-sm leading-7 text-neutral-600">{item.text}</p>
      </div>
    </motion.article>
  )
}
