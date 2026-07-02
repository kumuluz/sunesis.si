import { Reveal } from '../../../components/motion'
import type { SplitBlock } from '../types'
import { Quote, Section, type SectionBg } from './section-shell'

export function SplitSection({
  block,
  bg,
}: {
  block: SplitBlock
  bg: SectionBg
}) {
  return (
    <Section bg={bg}>
      <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
        <Reveal>
          <h2 className="text-3xl font-bold leading-tight text-neutral-950 sm:text-4xl">
            {block.title}
          </h2>
        </Reveal>
        <Reveal
          className="space-y-5 text-base leading-8 text-neutral-600"
          delay={0.1}
        >
          {block.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {block.quote ? <Quote>{block.quote}</Quote> : null}
        </Reveal>
      </div>
    </Section>
  )
}
