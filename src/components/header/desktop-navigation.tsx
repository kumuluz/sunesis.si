import { ChevronDown } from 'lucide-react'
import { motion } from 'motion/react'
import { topLevelNavHref } from '../../lib/expertise-links'
import { useLocation } from '../../lib/navigation'
import type { HeaderProps, NavItem } from './types'

type DesktopNavigationProps = {
  activeItem: NavItem | null
  content: HeaderProps['content']
  onActiveItemChange: (item: NavItem | null) => void
}

export function DesktopNavigation({
  activeItem,
  content,
  onActiveItemChange,
}: DesktopNavigationProps) {
  const pathname = useLocation()

  return (
    <div className="relative hidden h-full items-center gap-1 cursor-pointer text-left lg:flex">
      {content.items.map((item) => {
        const isActive = activeItem?.label === item.label
        const opens = item.groups.length > 0
        const directHref = topLevelNavHref(item.label)
        const isCurrent = directHref !== null && pathname === directHref

        const className = `relative flex h-full items-center gap-1 px-4 text-left text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-6px] focus-visible:outline-blue-400 ${
          isActive || isCurrent
            ? 'text-neutral-900'
            : 'text-neutral-700 hover:text-neutral-900'
        }`

        const chevron = item.hasDropdown ? (
          <motion.span
            animate={{ rotate: isActive ? 180 : 0 }}
            className="flex"
            transition={{ type: 'spring', stiffness: 320, damping: 24 }}
          >
            <ChevronDown
              aria-hidden="true"
              className="size-4 shrink-0"
              strokeWidth={2.25}
            />
          </motion.span>
        ) : null

        if (directHref) {
          return (
            <a
              aria-current={isCurrent ? 'page' : undefined}
              className={className}
              href={directHref}
              key={item.label}
              onFocus={() => onActiveItemChange(opens ? item : null)}
              onMouseEnter={() => onActiveItemChange(opens ? item : null)}
            >
              {item.label}
              {chevron}
            </a>
          )
        }

        return (
          <button
            className={className}
            key={item.label}
            onFocus={() => onActiveItemChange(opens ? item : null)}
            onMouseEnter={() => onActiveItemChange(opens ? item : null)}
            type="button"
          >
            {item.label}
            {chevron}
          </button>
        )
      })}
    </div>
  )
}
