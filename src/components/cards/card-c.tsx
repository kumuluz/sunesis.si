import type { LucideIcon } from 'lucide-react'
import { motion } from 'motion/react'
import { revealItem } from '../motion'

type CardCProps = {
  icon: LucideIcon
  label: string
  title: string
  text: string
}

export function CardC({ icon: Icon, label, title, text }: CardCProps) {
  return (
    <motion.article
      className="rounded-lg border border-white/10 bg-white/[0.04] p-5 transition-colors duration-200 hover:bg-neutral-900"
      transition={{ duration: 0.2, ease: 'easeOut' }}
      variants={revealItem}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex size-10 items-center justify-center rounded-md bg-blue-500/15 text-blue-200">
        <Icon aria-hidden="true" className="size-5" />
      </div>
      <p className="mt-5 min-h-[3rem] text-xs font-bold uppercase leading-4 tracking-[0.14em] text-blue-200">
        {label}
      </p>
      <h3 className="mt-3 min-h-[3.25rem] text-lg font-bold leading-snug">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-neutral-300">{text}</p>
    </motion.article>
  )
}
