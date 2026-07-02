import type { ReactNode } from 'react'
import { Reveal } from '../../../components/motion'

export const gridGlow =
  'bg-[linear-gradient(to_right,rgba(0,0,0,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.08)_1px,transparent_1px)] bg-[size:96px_96px]'

export type SectionBg = 'white' | 'muted' | 'dark'

export function Section({
  children,
  bg = 'white',
  id,
}: {
  children: ReactNode
  bg?: SectionBg
  id?: string
}) {
  const bgClass =
    bg === 'dark'
      ? 'bg-neutral-950 text-white'
      : bg === 'muted'
        ? 'border-y border-neutral-200 bg-[#f7f9fb]'
        : 'bg-white'

  return (
    <section className={`${bgClass} py-20 sm:py-24`} id={id}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">{children}</div>
    </section>
  )
}

export function Heading({
  eyebrow,
  title,
  intro,
  invert,
  align = 'left',
}: {
  eyebrow?: string
  title: string
  intro?: string
  invert?: boolean
  align?: 'left' | 'center'
}) {
  return (
    <Reveal
      className={
        align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'
      }
    >
      {eyebrow ? (
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-600">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`text-3xl font-bold leading-tight sm:text-4xl ${
          eyebrow ? 'mt-4' : ''
        } ${invert ? 'text-white' : 'text-neutral-950'}`}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={`mt-5 text-base leading-8 ${
            invert ? 'text-neutral-300' : 'text-neutral-600'
          }`}
        >
          {intro}
        </p>
      ) : null}
    </Reveal>
  )
}

export function Quote({
  children,
  invert,
}: {
  children: ReactNode
  invert?: boolean
}) {
  return (
    <blockquote
      className={`mt-2 border-l-2 border-blue-600 pl-5 text-lg font-semibold leading-8 ${
        invert ? 'text-white' : 'text-neutral-900'
      }`}
    >
      {children}
    </blockquote>
  )
}
