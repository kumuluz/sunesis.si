import type { LucideIcon } from 'lucide-react'
import { motion } from 'motion/react'
import type { CardColorClasses } from '../../lib/accents'
import { revealItem } from '../motion'

type CardCProps = {
  title: string
  text: string
  icon?: LucideIcon
  label?: string
  href?: string
  colors?: CardColorClasses
  className?: string
}

const defaultColors: CardColorClasses = {
  iconBox: 'bg-blue-500/15 text-blue-200',
  label: 'text-blue-200',
  cardHover: 'hover:bg-neutral-900',
  titleHover: '',
}

export function CardC({
  icon: Icon,
  label,
  title,
  text,
  href,
  colors,
  className,
}: CardCProps) {
  const c = colors ?? defaultColors

  const sharedProps = {
    className: `group block rounded-lg border border-white/10 bg-white/[0.04] p-5 transition-colors duration-200 ${c.cardHover}${
      className ? ` ${className}` : ''
    }`,
    transition: { duration: 0.2, ease: 'easeOut' },
    variants: revealItem,
    whileHover: { scale: 1.02 },
  } as const

  const content = (
    <>
      {Icon ? (
        <div
          className={`flex size-10 items-center justify-center rounded-md ${c.iconBox}`}
        >
          <Icon aria-hidden="true" className="size-5" />
        </div>
      ) : null}
      {label ? (
        <p
          className={`${Icon ? 'mt-5 min-h-[3rem] ' : ''}text-xs font-bold uppercase leading-4 tracking-[0.14em] ${c.label}`}
        >
          {label}
        </p>
      ) : null}
      <h3
        className={`${Icon || label ? 'mt-3 ' : ''}${Icon ? 'min-h-[3.25rem] ' : ''}text-lg font-bold leading-snug transition-colors ${c.titleHover}`}
      >
        {title}
      </h3>
      <p className="mt-3 text-sm leading-7 text-neutral-300">{text}</p>
    </>
  )

  if (href) {
    return (
      <motion.a href={href} rel="noreferrer" target="_blank" {...sharedProps}>
        {content}
      </motion.a>
    )
  }

  return <motion.article {...sharedProps}>{content}</motion.article>
}
