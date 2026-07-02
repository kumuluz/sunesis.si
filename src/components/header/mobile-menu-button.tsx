import { Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { Button } from '../button'

type MobileMenuButtonProps = {
  ariaLabel: string
  isOpen: boolean
  onClick: () => void
}

const ICON_SPRING = { type: 'spring', stiffness: 380, damping: 26 } as const

export function MobileMenuButton({
  ariaLabel,
  isOpen,
  onClick,
}: MobileMenuButtonProps) {
  const Icon = isOpen ? X : Menu

  return (
    <Button
      ariaExpanded={isOpen}
      ariaLabel={ariaLabel}
      className="relative z-30 overflow-hidden lg:hidden"
      iconLayout="only"
      onClick={onClick}
      size="lg"
      tone="secondary"
    >
      <AnimatePresence initial={false} mode="popLayout">
        <motion.span
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          className="flex"
          exit={{ opacity: 0, rotate: isOpen ? -90 : 90, scale: 0.6 }}
          initial={{ opacity: 0, rotate: isOpen ? 90 : -90, scale: 0.6 }}
          key={isOpen ? 'close' : 'open'}
          transition={ICON_SPRING}
        >
          <Icon aria-hidden="true" className="size-4" strokeWidth={2.25} />
        </motion.span>
      </AnimatePresence>
    </Button>
  )
}
