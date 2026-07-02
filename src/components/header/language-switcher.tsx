import { Fragment } from 'react'
import type { LanguageCode } from '../../lib/router'
import type { HeaderLanguage } from './types'

type LanguageSwitcherProps = {
  language: LanguageCode
  languages: HeaderLanguage[]
  onSelect: (language: LanguageCode) => void
}

export function LanguageSwitcher({
  language,
  languages,
  onSelect,
}: LanguageSwitcherProps) {
  return (
    <div className="inline-flex items-center gap-1 rounded-lg bg-transparent px-1 text-sm font-semibold text-neutral-900">
      {languages.map((item, index) => {
        const isActive = item.code === language

        return (
          <Fragment key={item.code}>
            {index > 0 ? (
              <span
                aria-hidden="true"
                className="h-4 w-0.5 self-center bg-neutral-900/20"
              />
            ) : null}
            <a
              aria-current={isActive ? 'page' : undefined}
              className={`cursor-pointer rounded px-1.5 py-1 uppercase transition-opacity duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 ${
                isActive ? 'opacity-100' : 'opacity-50 hover:opacity-80'
              }`}
              href={item.path}
              onClick={(event) => {
                event.preventDefault()
                onSelect(item.code)
              }}
            >
              {item.label}
            </a>
          </Fragment>
        )
      })}
    </div>
  )
}
