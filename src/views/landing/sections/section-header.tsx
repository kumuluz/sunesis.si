import { Reveal } from '../../../components/motion'

type SectionHeaderProps = {
  intro?: string
  title: string
}

export function SectionHeader({ intro, title }: SectionHeaderProps) {
  return (
    <Reveal className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl font-bold leading-tight text-neutral-950 sm:text-5xl">
        {title}
      </h2>
      {intro ? (
        <p className="mt-5 text-base leading-8 text-neutral-600 sm:text-lg">
          {intro}
        </p>
      ) : null}
    </Reveal>
  )
}
