import { Menu, X } from 'lucide-react'
import { Button } from '../button'

type MobileMenuButtonProps = {
  ariaLabel: string
  isOpen: boolean
  onClick: () => void
}

export function MobileMenuButton({
  ariaLabel,
  isOpen,
  onClick,
}: MobileMenuButtonProps) {
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
      <span aria-hidden="true" className="relative flex size-4">
        <Menu
          className={`absolute inset-0 size-4 transition duration-300 ease-out ${
            isOpen
              ? 'rotate-90 scale-75 opacity-0'
              : 'rotate-0 scale-100 opacity-100'
          }`}
          strokeWidth={2.25}
        />
        <X
          className={`absolute inset-0 size-4 transition duration-300 ease-out ${
            isOpen
              ? 'rotate-0 scale-100 opacity-100'
              : '-rotate-90 scale-75 opacity-0'
          }`}
          strokeWidth={2.25}
        />
      </span>
    </Button>
  )
}
