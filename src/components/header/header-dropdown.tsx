import { ArrowRight } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { contactHref, dropdownLinkHref } from '../../lib/expertise-links'
import { useLocation } from '../../lib/navigation'
import type { LanguageCode } from '../../lib/router'
import type { NavItem } from './types'

const EASE = [0.22, 1, 0.36, 1] as const

const PANEL_SPRING = {
  type: 'spring',
  stiffness: 260,
  damping: 30,
  mass: 0.9,
} as const

const ITEM_SPRING = {
  type: 'spring',
  stiffness: 320,
  damping: 26,
  mass: 0.7,
} as const

type HeaderDropdownProps = {
  featuredLabel: string
  featuredTitle: string
  item: NavItem | null
  language: LanguageCode
  linkLabel: string
}

export function HeaderDropdown({
  featuredLabel,
  featuredTitle,
  item,
  language,
  linkLabel,
}: HeaderDropdownProps) {
  const pathname = useLocation()
  const links = item?.groups.flatMap((group) => group.links) ?? []

  const columnsClass =
    links.length <= 3
      ? 'lg:grid-cols-[repeat(3,14rem)]'
      : links.length === 4
        ? 'lg:grid-cols-[repeat(4,14rem)]'
        : 'lg:grid-cols-[repeat(5,14rem)]'

  return (
    <AnimatePresence>
      {item && links.length > 0 ? (
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 w-full border-b border-neutral-200 bg-white shadow-[0_24px_80px_rgba(23,23,23,0.18)] [transform-origin:top]"
          exit={{
            opacity: 0,
            y: -10,
            transition: { duration: 0.2, ease: EASE },
          }}
          initial={{ opacity: 0, y: -12 }}
          transition={{
            ...PANEL_SPRING,
            opacity: { duration: 0.25, ease: EASE },
          }}
        >
          <div className="mx-auto max-w-[120rem] px-4 py-10 sm:px-6">
            <div className="sm:px-8 lg:px-8">
              <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-center lg:gap-12">
                <motion.div
                  animate="visible"
                  className={`grid gap-x-8 gap-y-10 sm:grid-cols-2 ${columnsClass}`}
                  initial="hidden"
                  key={item.label}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.06,
                        delayChildren: 0.08,
                      },
                    },
                  }}
                >
                  {links.map((link) => {
                    const href = dropdownLinkHref(link.label, language) ?? '#'
                    const isActive = href !== '#' && pathname === href

                    return (
                      <motion.a
                        aria-current={isActive ? 'page' : undefined}
                        className="group flex flex-col gap-2"
                        href={href}
                        key={link.label}
                        whileHover={{ x: 0 }}
                        transition={ITEM_SPRING}
                        variants={{
                          hidden: { opacity: 0, y: 12 },
                          visible: {
                            opacity: 1,
                            y: 0,
                            transition: ITEM_SPRING,
                          },
                        }}
                      >
                        <span
                          className={`flex items-center gap-1 text-sm font-semibold transition-colors ${
                            isActive
                              ? 'text-blue-700'
                              : 'text-neutral-900 group-hover:text-blue-700'
                          }`}
                        >
                          {link.label}
                          <ArrowRight
                            aria-hidden="true"
                            className="size-3.5 -translate-x-1 opacity-0 transition duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                            strokeWidth={2.25}
                          />
                        </span>
                        <span className="text-sm leading-relaxed text-neutral-500">
                          {link.description}
                        </span>
                      </motion.a>
                    )
                  })}
                </motion.div>

                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-md bg-blue-50 p-6 lg:w-72 lg:shrink-0"
                  initial={{ opacity: 0, y: 12 }}
                  transition={{ ...ITEM_SPRING, delay: 0.12 }}
                >
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
                    {featuredLabel}
                  </p>
                  <p className="mt-4 text-lg font-semibold leading-tight text-neutral-900">
                    {featuredTitle}
                  </p>
                  <motion.a
                    className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700"
                    href={contactHref(language)}
                    whileHover={{ x: 3 }}
                    transition={ITEM_SPRING}
                  >
                    {linkLabel}{' '}
                    <ArrowRight
                      aria-hidden="true"
                      className="size-4 transition-transform duration-300 group-hover:translate-x-0.5"
                      strokeWidth={2.25}
                    />
                  </motion.a>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}
