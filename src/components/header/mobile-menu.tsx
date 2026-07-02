import { ArrowRight, ChevronRight } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect } from 'react'
import {
  contactHref,
  dropdownLinkHref,
  topLevelNavHref,
} from '../../lib/expertise-links'
import { Button } from '../button'
import { useLocation } from '../../lib/navigation'
import type { LanguageCode } from '../../lib/router'
import type { HeaderProps, NavItem } from './types'

const EASE = [0.22, 1, 0.36, 1] as const

const HEADER_OFFSET = '73px'

type MobileMenuProps = {
  activeItem: NavItem | null
  blogHref: string
  blogLabel: HeaderProps['content']['blog']
  contactLabel: HeaderProps['content']['contact']
  isOpen: boolean
  items: HeaderProps['content']['items']
  language: LanguageCode
  onActiveItemChange: (item: NavItem | null) => void
  onClose: () => void
}

export function MobileMenu({
  activeItem,
  blogHref,
  blogLabel,
  contactLabel,
  isOpen,
  items,
  language,
  onActiveItemChange,
  onClose,
}: MobileMenuProps) {
  const pathname = useLocation()

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') {
        return
      }
      if (activeItem) {
        onActiveItemChange(null)
      } else {
        onClose()
      }
    }
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, activeItem, onActiveItemChange, onClose])

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          animate={{ opacity: 1 }}
          className="fixed inset-x-0 bottom-0 z-30 flex flex-col bg-white lg:hidden"
          exit={{ opacity: 0, transition: { duration: 0.18, ease: EASE } }}
          initial={{ opacity: 0 }}
          style={{ top: HEADER_OFFSET }}
          transition={{ duration: 0.22, ease: EASE }}
        >
          <div className="relative flex-1 overflow-hidden">
            <motion.div
              animate={{ opacity: 1, x: 0 }}
              className="h-full overflow-y-auto overscroll-contain px-4"
              initial={{ opacity: 0, x: activeItem ? 28 : -16 }}
              key={activeItem ? activeItem.label : '__root__'}
              transition={{ duration: 0.26, ease: EASE }}
            >
              {activeItem ? (
                <div className="pb-6">
                  <h2 className="border-b border-neutral-200 pb-4 pt-5 text-2xl font-bold tracking-tight text-neutral-900">
                    {activeItem.label}
                  </h2>

                  <div className="mt-6 space-y-5">
                    {activeItem.groups
                      .flatMap((group) => group.links)
                      .map((link) => {
                        const href =
                          dropdownLinkHref(link.label, language) ?? '#'
                        const isActive = href !== '#' && pathname === href

                        return (
                          <a
                            className="group block transition-opacity active:opacity-60"
                            href={href}
                            key={link.label}
                            onClick={onClose}
                          >
                            <span
                              className={`block text-base font-semibold ${
                                isActive ? 'text-blue-700' : 'text-neutral-900'
                              }`}
                            >
                              {link.label}
                            </span>
                            {link.description ? (
                              <span className="mt-0.5 block text-sm leading-relaxed text-neutral-500">
                                {link.description}
                              </span>
                            ) : null}
                          </a>
                        )
                      })}
                  </div>
                </div>
              ) : (
                <div>
                  {items.map((item) => {
                    const links = (item as NavItem).groups.flatMap(
                      (group) => group.links,
                    )

                    if (links.length > 0) {
                      return (
                        <button
                          className="flex w-full items-center justify-between border-b border-neutral-200 py-4 text-left transition-colors active:text-blue-700"
                          key={item.label}
                          onClick={() => onActiveItemChange(item)}
                          type="button"
                        >
                          <span className="text-xl font-semibold text-neutral-900">
                            {item.label}
                          </span>
                          <ChevronRight
                            aria-hidden="true"
                            className="size-5 text-neutral-400"
                            strokeWidth={2.5}
                          />
                        </button>
                      )
                    }

                    return (
                      <a
                        className="flex w-full items-center justify-between border-b border-neutral-200 py-4 text-xl font-semibold text-neutral-900 transition-colors active:text-blue-700"
                        href={topLevelNavHref(item.label, language) ?? '#'}
                        key={item.label}
                        onClick={onClose}
                      >
                        {item.label}
                      </a>
                    )
                  })}
                </div>
              )}
            </motion.div>
          </div>

          <div className="shrink-0 border-t border-neutral-200 bg-white px-4 py-4">
            <div className="grid grid-cols-2 gap-3">
              <Button
                fullWidth
                href={blogHref}
                onClick={onClose}
                tone="secondary"
              >
                {blogLabel}
              </Button>
              <Button
                fullWidth
                href={contactHref(language)}
                icon={ArrowRight}
                onClick={onClose}
                tone="primary"
              >
                {contactLabel}
              </Button>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
