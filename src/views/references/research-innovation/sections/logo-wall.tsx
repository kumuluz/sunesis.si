import { motion } from 'motion/react'
import type { LogoWallBlock } from '../../types'
import {
  referenceStemsByFolder as stemsByFolder,
  referenceUrlByStem as urlByStem,
} from '../../../../lib/reference-logos'
import { Heading, Section, type SectionBg } from './section-shell'

const EASE = [0.22, 1, 0.36, 1] as const
const VIEWPORT = { once: true, margin: '0px 0px -10% 0px' } as const

function altFromStem(stem: string) {
  return stem
    .replace(/^trimmed-/, '')
    .replace(/-removebg-preview$/, '')
    .split(/[-_]/)
    .filter((part) => part && !/^\d+$/.test(part))
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ')
}

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
    .map((stem) => ({ stem, src: urlByStem[stem] }))
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
            className="group flex h-28 items-center justify-center border-b border-r border-neutral-200 px-6 transition-colors duration-300 hover:bg-white"
            key={logo.stem}
          >
            <motion.img
              alt={altFromStem(logo.stem)}
              className="max-h-10 w-auto max-w-[78%] object-contain grayscale transition-[filter] duration-300 group-hover:grayscale-0"
              draggable={false}
              initial={{ opacity: 0, scale: 0.9 }}
              src={logo.src}
              transition={{
                duration: 0.45,
                ease: EASE,
                delay: (index % 8) * 0.05,
              }}
              viewport={VIEWPORT}
              whileInView={{ opacity: 1, scale: 1 }}
            />
          </div>
        ))}
      </div>
    </Section>
  )
}
