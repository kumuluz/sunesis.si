import type { LucideIcon } from 'lucide-react'
import { motion } from 'motion/react'
import { revealItem } from '../motion'

type CardAProps = {
  icon: LucideIcon
  title: string
}

export function CardA({ icon: Icon, title }: CardAProps) {
  return (
    <motion.article
      className="group min-h-52 rounded-lg border border-neutral-200 bg-white p-6 transition-colors duration-200 hover:border-neutral-200 hover:bg-white"
      transition={{ duration: 0.2, ease: 'easeOut' }}
      variants={revealItem}
      whileHover={{ scale: 1.01 }}
    >
      <div className="mb-8 flex h-10 w-10 items-center justify-center rounded-md bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
        <Icon aria-hidden="true" className="size-5" strokeWidth={2.25} />
      </div>
      <h3 className="text-lg font-semibold leading-snug text-neutral-900">
        {title}
      </h3>
    </motion.article>
  )
}
