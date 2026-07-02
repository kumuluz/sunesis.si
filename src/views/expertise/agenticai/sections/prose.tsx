import { Reveal } from '../../../../components/motion'
import type { ProseBlock } from '../../types'
import { Heading, Quote, Section, type SectionBg } from './section-shell'

export function ProseSection({
  block,
  bg,
}: {
  block: ProseBlock
  bg: SectionBg
}) {
  return (
    <Section bg={bg}>
      <Heading
        align="center"
        eyebrow={block.eyebrow}
        intro={block.intro}
        title={block.title}
      />
      {block.body && block.body.length > 0 ? (
        <Reveal
          className="mx-auto mt-8 max-w-3xl space-y-5 text-base leading-8 text-neutral-600"
          delay={0.1}
        >
          {block.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>
      ) : null}
      {block.quote ? (
        <Reveal className="mx-auto mt-8 max-w-3xl" delay={0.15}>
          <Quote>{block.quote}</Quote>
        </Reveal>
      ) : null}
    </Section>
  )
}
