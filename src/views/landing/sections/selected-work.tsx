import type { LandingContent } from '../../../content/landing/landing'
import { FeatureCard } from '../../../components/cards/card-feature'
import { RevealGroup } from '../../../components/motion'
import { SectionHeader } from './section-header'

type SelectedWorkSectionProps = {
  content: LandingContent['landingPageSections']['selectedWork']
}

export function SelectedWorkSection({ content }: SelectedWorkSectionProps) {
  return (
    <section className="bg-white py-20 sm:py-24" id="work">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader intro={content.intro} title={content.title} />
        <RevealGroup className="mt-12 grid gap-5 lg:grid-cols-3">
          {content.projects.map((project) => (
            <FeatureCard
              item={{
                label: project.label,
                title: project.title,
                text: project.text,
                meta: project.expertise,
              }}
              key={project.title}
            />
          ))}
        </RevealGroup>
      </div>
    </section>
  )
}
