import type { LogoWallBlock } from '../../types'
import { RevealScaleImage } from '../../../../components/motion'
import {
  referenceNameByStem as nameByStem,
  referenceStemsByFolder as stemsByFolder,
  referenceUrlByStem as urlByStem,
} from '../../../../lib/reference-logos'
import { Heading, Section, type SectionBg } from './section-shell'

export function LogoWallSection({
  block,
  bg,
}: {
  block: LogoWallBlock
  bg: SectionBg
}) {
  const seen = new Set<string>()
  const logos = [
    ...(block.logos ?? []),
    ...(block.folder ? (stemsByFolder[block.folder] ?? []) : []),
  ]
    .filter((stem) => (seen.has(stem) ? false : seen.add(stem)))
    .map((stem) => ({
      stem,
      src: urlByStem[stem],
      name: nameByStem[stem] ?? stem,
    }))
    .filter((logo) => logo.src)

  return (
    <Section bg={bg} id={block.id}>
      <Heading
        eyebrow={block.eyebrow}
        intro={block.intro}
        title={block.title}
      />

      <div className="mt-12 grid grid-cols-2 border-l border-t border-neutral-200 sm:grid-cols-3 lg:grid-cols-4">
        {logos.map((logo, index) => (
          <div
            className="group relative flex h-28 items-center justify-center overflow-hidden border-b border-r border-neutral-200 px-6 transition-colors duration-300 hover:bg-white"
            key={logo.stem}
          >
            <RevealScaleImage
              alt={logo.name}
              className="max-h-10 w-auto max-w-[78%] object-contain grayscale transition-[filter] duration-300 group-hover:grayscale-0"
              delay={(index % 8) * 0.05}
              draggable={false}
              src={logo.src}
            />
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-neutral-900/60 px-4 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <span className="text-lg font-semibold text-white">
                {logo.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
