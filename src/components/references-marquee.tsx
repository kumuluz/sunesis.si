import { topLevelReferenceLogos } from '../lib/reference-logos'

const references = topLevelReferenceLogos
  .map(({ stem, url }) => {
    const name = stem
      .split(/[-_]/)
      .filter(Boolean)
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ')

    return { name, src: url }
  })
  .sort((a, b) => a.name.localeCompare(b.name))

export function ReferencesMarquee() {
  const duplicatedReferences = [...references, ...references]

  return (
    <section className="relative z-10 border-y bg-white border-neutral-200 bg-transparent py-7">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-white via-white/90 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-white via-white/90 to-transparent" />
        <div className="references-marquee__viewport overflow-x-auto overflow-y-hidden">
          <div className="references-marquee__track animate-marquee flex w-max gap-4">
            {duplicatedReferences.map((reference, index) => (
              <div
                className="references-marquee__item grayscale flex h-16 min-w-48 items-center justify-center rounded-md bg-white px-8 transition duration-300"
                key={`${reference.name}-${index}`}
              >
                <img
                  alt={reference.name}
                  className="h-6 w-auto max-w-36 object-contain"
                  draggable={false}
                  src={reference.src}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
