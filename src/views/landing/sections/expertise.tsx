import {
  Bot,
  CloudCog,
  Code2,
  GitBranch,
  Network,
  Sparkles,
} from 'lucide-react'
import type { LandingContent } from '../../../content/landing/landing'
import { CardB } from '../../../components/cards/card-b'
import { RevealGroup } from '../../../components/motion'
import { buildPath, type LanguageCode } from '../../../lib/router'
import { EXPERTISE_SLUGS } from '../../expertise/types'
import { SectionHeader } from './section-header'

type ExpertiseSectionProps = {
  content: LandingContent['landingPageSections']['expertise']
  language: LanguageCode
}

const expertiseIcons = [Bot, Code2, CloudCog, Network, GitBranch]

export function ExpertiseSection({ content, language }: ExpertiseSectionProps) {
  return (
    <section className="bg-white py-20 sm:py-24" id="expertise">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader intro={content.intro} title={content.title} />
        <RevealGroup className="mt-12 flex flex-wrap gap-5">
          {content.items.map((item, index) => {
            const Icon = expertiseIcons[index] ?? Sparkles
            const slug = EXPERTISE_SLUGS[index]
            const href = slug
              ? buildPath(language, { name: 'expertise', slug })
              : '#'

            return (
              <CardB
                capabilities={item.capabilities}
                cta={item.cta}
                href={href}
                icon={Icon}
                key={item.title}
                text={item.text}
                title={item.title}
              />
            )
          })}
        </RevealGroup>
      </div>
    </section>
  )
}
