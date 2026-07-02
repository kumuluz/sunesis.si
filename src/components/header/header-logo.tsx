import type { LanguageCode } from '../../lib/router'

export function HeaderLogo({
  className,
  language,
}: {
  className?: string
  language: LanguageCode
}) {
  return (
    <a
      className={`block h-6 w-[115px] shrink-0 text-blue-500 ${className ?? ''}`}
      href={`/${language}/`}
    >
      <img
        src="/sunesis-logo.svg"
        alt="sunesis logo"
        className="h-full w-full object-contain"
      />
    </a>
  )
}
