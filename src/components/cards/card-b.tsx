import { ArrowRight, type LucideIcon } from 'lucide-react'
import { motion } from 'motion/react'
import { Button } from '../button'
import { revealItem } from '../motion'

type CardBProps = {
  icon: LucideIcon
  title: string
  text: string
  capabilities: readonly string[]
  cta: string
  href: string
}

export function CardB({
  icon: Icon,
  title,
  text,
  capabilities,
  cta,
  href,
}: CardBProps) {
  return (
    <motion.article
      className="group flex min-h-80 flex-grow basis-full flex-col rounded-lg border border-neutral-200 bg-white p-6 transition-colors duration-200 hover:border-neutral-200 md:basis-[calc((100%-1.25rem)/2)] xl:basis-[calc((100%-2.5rem)/3)]"
      transition={{ duration: 0.2, ease: 'easeOut' }}
      variants={revealItem}
      whileHover={{ scale: 1.01 }}
    >
      <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-md bg-blue-50 text-blue-700 transition group-hover:bg-blue-700 group-hover:text-white">
        <Icon aria-hidden="true" className="size-5" strokeWidth={2.25} />
      </div>
      <h3 className="mt-6 text-xl font-bold leading-snug text-neutral-950">
        {title}
      </h3>
      <p className="mt-4 text-sm leading-7 text-neutral-600">{text}</p>
      <ul className="mt-5 space-y-2 text-sm font-medium text-neutral-700">
        {capabilities.map((capability) => (
          <li className="flex gap-2" key={capability}>
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-blue-600" />
            <span>{capability}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto pt-6">
        <Button href={href} icon={ArrowRight} size="md" tone="ghost">
          {cta}
        </Button>
      </div>
    </motion.article>
  )
}
