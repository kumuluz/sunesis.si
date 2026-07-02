import type { LucideIcon } from 'lucide-react'
import { motion } from 'motion/react'
import type { ReactNode } from 'react'

type ButtonProps = {
  ariaExpanded?: boolean
  ariaHasPopup?: boolean | 'menu'
  ariaLabel?: string
  children: ReactNode
  className?: string
  fullWidth?: boolean
  href?: string
  icon?: LucideIcon
  iconLayout?: 'trailing' | 'only' | 'leading' | 'leading-trailing'
  onClick?: () => void
  size?: 'md' | 'lg'
  tone?: 'primary' | 'primary-dark' | 'secondary' | 'ghost'
}

export function Button({
  ariaExpanded,
  ariaHasPopup,
  ariaLabel,
  children,
  className: extraClassName,
  fullWidth = false,
  href,
  icon,
  iconLayout = 'trailing',
  onClick,
  size = 'lg',
  tone = 'primary',
}: ButtonProps) {
  const toneStyles = {
    primary: 'bg-blue-700 text-white hover:bg-neutral-900 transition-colors',
    'primary-dark':
      'bg-white text-neutral-900 hover:bg-neutral-200 transition-colors',
    secondary:
      'border border-neutral-200 bg-transparent text-neutral-800 hover:border-neutral-300 hover:bg-neutral-50 transition-colors',
    ghost:
      'bg-transparent text-neutral-700 hover:text-neutral-900 transition-colors',
  }
  const layoutSizeStyles = {
    trailing: {
      md: 'min-h-9 px-4',
      lg: 'min-h-11 px-5',
    },
    leading: {
      md: 'min-h-9 pl-3 pr-4',
      lg: 'min-h-11 pl-3.5 pr-5',
    },
    'leading-trailing': {
      md: 'min-h-9 px-2.5',
      lg: 'min-h-11 px-2.5',
    },
    only: {
      md: 'size-9 p-0',
      lg: 'size-11 p-0',
    },
  }
  const Icon = icon
  const hasIcon = Boolean(Icon)
  const iconElement = Icon ? (
    <Icon
      aria-hidden="true"
      className={`size-4 shrink-0 transition duration-300 ${
        iconLayout === 'trailing' ? 'group-hover:translate-x-0' : ''
      }`}
      strokeWidth={2.25}
    />
  ) : null

  const className = `group inline-flex items-center justify-center gap-2 rounded-lg text-sm font-semibold transition-colors duration-300 ease ${
    fullWidth ? 'w-full' : ''
  } ${layoutSizeStyles[iconLayout][size]} ${toneStyles[tone]} ${
    extraClassName ?? ''
  }`

  const sharedProps = {
    'aria-expanded': ariaExpanded,
    'aria-haspopup': ariaHasPopup,
    'aria-label': ariaLabel,
    className,
    onClick,
  }
  const animationProps = {
    transition: { duration: 0.18, ease: 'easeOut' },
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
  } as const

  const content = (
    <>
      {iconLayout === 'leading' ? iconElement : null}
      {iconLayout === 'only' && hasIcon ? (
        <span className="sr-only">{children}</span>
      ) : (
        children
      )}
      {iconLayout === 'trailing' || iconLayout === 'only' ? iconElement : null}
    </>
  )

  if (href === undefined) {
    return (
      <motion.button type="button" {...sharedProps} {...animationProps}>
        {content}
      </motion.button>
    )
  }

  return (
    <motion.a href={href} {...sharedProps} {...animationProps}>
      {content}
    </motion.a>
  )
}
