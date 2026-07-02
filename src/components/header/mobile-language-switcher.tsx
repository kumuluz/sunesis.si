import { Check, ChevronDown, Languages } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import { Button } from '../button'
import type { LanguageCode } from '../../lib/router'
import type { HeaderLanguage } from './types'

const EASE = [0.22, 1, 0.36, 1] as const

type MobileLanguageSwitcherProps = {
  language: LanguageCode
  languages: HeaderLanguage[]
  onSelect: (language: LanguageCode) => void
}

export function MobileLanguageSwitcher({
  language,
  languages,
  onSelect,
}: MobileLanguageSwitcherProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)
  const current = languages.find((item) => item.code === language)

  useEffect(() => {
    if (!open) {
      return
    }

    const onPointerDown = (event: PointerEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }
    document.addEventListener('pointerdown', onPointerDown)
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('pointerdown', onPointerDown)
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [open])

  return (
    <div className="relative" ref={ref}>
      <Button
        ariaExpanded={open}
        ariaHasPopup="menu"
        ariaLabel="Select language"
        onClick={() => setOpen((value) => !value)}
        iconLayout="leading-trailing"
        size="lg"
        tone="secondary"
      >
        <Languages
          aria-hidden="true"
          className="size-4 text-neutral-500"
          strokeWidth={2.25}
        />
        <span className="uppercase">{current?.label ?? language}</span>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          className="flex"
          transition={{ type: 'spring', stiffness: 320, damping: 24 }}
        >
          <ChevronDown
            aria-hidden="true"
            className="size-4 text-neutral-500"
            strokeWidth={2.25}
          />
        </motion.span>
      </Button>

      <AnimatePresence>
        {open ? (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            className="absolute right-0 top-[calc(100%+0.5rem)] z-50 flex min-w-[8.5rem] flex-col gap-1 overflow-hidden rounded-lg bg-white p-1 shadow-[0_24px_80px_rgba(23,23,23,0.18)] ring-1 ring-neutral-200"
            exit={{
              opacity: 0,
              y: -6,
              transition: { duration: 0.15, ease: EASE },
            }}
            initial={{ opacity: 0, y: -6 }}
            role="menu"
            transition={{ duration: 0.18, ease: EASE }}
          >
            {languages.map((item) => {
              const isActive = item.code === language

              return (
                <a
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex items-center justify-between gap-3 rounded-md px-3 py-2 text-sm font-semibold uppercase transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-neutral-700 hover:bg-neutral-50'
                  }`}
                  href={item.path}
                  key={item.code}
                  onClick={(event) => {
                    event.preventDefault()
                    onSelect(item.code)
                    setOpen(false)
                  }}
                  role="menuitem"
                >
                  {item.label}
                  {isActive ? (
                    <Check
                      aria-hidden="true"
                      className="size-4 shrink-0"
                      strokeWidth={2.5}
                    />
                  ) : null}
                </a>
              )
            })}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  )
}
