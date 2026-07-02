import type { LandingContent } from '../../../content/landing/landing'
import { Reveal } from '../../../components/motion'

type PositioningSectionProps = {
  content: LandingContent['landingPageSections']['positioning']
}

export function PositioningSection({ content }: PositioningSectionProps) {
  return (
    <section className="border-y border-neutral-200 bg-[#f7f9fb] py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <Reveal>
          <h2 className="text-3xl font-bold leading-tight text-neutral-950 sm:text-5xl">
            {content.title}
          </h2>
        </Reveal>
        <Reveal
          className="space-y-5 text-base leading-8 text-neutral-650"
          delay={0.1}
        >
          {content.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
