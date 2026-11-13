import { Award, Star, Trophy } from 'lucide-react'

const AWARD_ICONS = {
  medal: Award,
  star: Star,
  trophy: Trophy,
} as const

// Scalloped seal outline in an 84×84 box (20 scallops). The frosted fill uses
// the same shape as a clip-path in globals.css (.award-seal__rosette).
const ROSETTE_PATH =
  'M42 4A7 7 0 0 1 53.74 5.86A7 7 0 0 1 64.34 11.26A7 7 0 0 1 72.74 19.66A7 7 0 0 1 78.14 30.26A7 7 0 0 1 80 42A7 7 0 0 1 78.14 53.74A7 7 0 0 1 72.74 64.34A7 7 0 0 1 64.34 72.74A7 7 0 0 1 53.74 78.14A7 7 0 0 1 42 80A7 7 0 0 1 30.26 78.14A7 7 0 0 1 19.66 72.74A7 7 0 0 1 11.26 64.34A7 7 0 0 1 5.86 53.74A7 7 0 0 1 4 42A7 7 0 0 1 5.86 30.26A7 7 0 0 1 11.26 19.66A7 7 0 0 1 19.66 11.26A7 7 0 0 1 30.26 5.86A7 7 0 0 1 42 4Z'

// Ribbon tails in a 64×23.3 box, matching .award-seal__tail--left/--right.
const TAIL_POINTS = [
  '14,0 30,0 19,23.3 11.5,19.42 3,23.3',
  '34,0 50,0 61,23.3 52.5,19.42 45,23.3',
] as const

type AwardSealItem = {
  icon: keyof typeof AWARD_ICONS
  product: string
  title: string
}

type AwardSealsProps = {
  className?: string
  /**
   * Where the seals sit on the hero background, the title and product become
   * cut-outs of the inverted backdrop: black over light areas, white over dark
   * ones. `from` picks when they switch on ('wide' = from 90rem, 'always' for a
   * placement that is only shown on the background); `id` keeps their clip
   * paths unique.
   */
  contrastCaptions?: { from?: keyof typeof CAPTION_MODES; id: string }
  items: readonly AwardSealItem[]
  label: string
}

export function AwardSeals({
  className,
  contrastCaptions,
  items,
  label,
}: AwardSealsProps) {
  const captionMode = contrastCaptions
    ? CAPTION_MODES[contrastCaptions.from ?? 'wide']
    : null
  const htmlCaption = captionMode?.html ?? ''

  return (
    <ul
      aria-label={label}
      className={`award-seals grid w-full max-w-[27.5rem] grid-cols-3 gap-3 sm:gap-4 ${
        className ?? ''
      }`}
    >
      {items.map((item, index) => (
        <li
          className="award-seal flex flex-col items-center text-center"
          key={item.title}
        >
          <AwardSealGraphic icon={item.icon} />
          <p
            className={`award-seal__layer mt-1 w-[82%] text-xs leading-4 font-bold text-neutral-900 sm:text-[0.8125rem] sm:leading-[1.0625rem] ${htmlCaption}`}
          >
            {item.title}
          </p>
          <p
            className={`award-seal__layer mt-1 text-[0.6875rem] leading-4 font-semibold text-black/60 sm:text-xs ${htmlCaption}`}
          >
            {item.product}
          </p>
          {contrastCaptions ? (
            <ContrastCaption
              className={captionMode?.svg}
              id={`${contrastCaptions.id}-${index}`}
              product={item.product}
              title={item.title}
            />
          ) : null}
        </li>
      ))}
    </ul>
  )
}

// HTML captions stay for screen readers; the cut-out captions replace them
// visually once the seals are over the hero background.
const CAPTION_MODES = {
  always: { html: 'sr-only', svg: 'block' },
  wide: { html: 'min-[90rem]:sr-only', svg: 'hidden min-[90rem]:block' },
} as const

// Caption metrics of the 136px desktop seal: a 13px/17px bold title wrapped at
// 112px, then a 12px/16px semibold product line (y values are Inter baselines).
const CAPTION_WIDTH = 136
const TITLE_LINE_HEIGHT = 17

function ContrastCaption({
  className,
  id,
  product,
  title,
}: {
  className?: string
  id: string
  product: string
  title: string
}) {
  const lines = wrapTitle(title)

  return (
    <div aria-hidden="true" className={className}>
      <svg
        className="award-seal__layer award-seal__caption mt-1 block"
        clipPath={`url(#${id}-title)`}
        height={lines.length * TITLE_LINE_HEIGHT}
        width={CAPTION_WIDTH}
      >
        <defs>
          <clipPath id={`${id}-title`}>
            {lines.map((line, lineIndex) => (
              <text
                fontSize={13}
                fontWeight={700}
                key={`${lineIndex}-${line}`}
                textAnchor="middle"
                x={CAPTION_WIDTH / 2}
                y={13.22 + lineIndex * TITLE_LINE_HEIGHT}
              >
                {line}
              </text>
            ))}
          </clipPath>
        </defs>
      </svg>
      <svg
        className="award-seal__layer award-seal__caption award-seal__caption--muted mt-1 block"
        clipPath={`url(#${id}-product)`}
        height={16}
        width={CAPTION_WIDTH}
      >
        <defs>
          <clipPath id={`${id}-product`}>
            <text
              fontSize={12}
              fontWeight={600}
              textAnchor="middle"
              x={CAPTION_WIDTH / 2}
              y={12.36}
            >
              {product}
            </text>
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

// SVG text does not wrap, so break the title like the HTML caption would:
// greedily, at 112px, using approximate Inter Bold 13px advance widths.
function wrapTitle(title: string) {
  const advance = (char: string) =>
    char === ' '
      ? 0.26
      : /[A-ZČŠŽ]/.test(char)
        ? 0.68
        : /[0-9]/.test(char)
          ? 0.62
          : /[a-zčšž]/.test(char)
            ? 0.57
            : 0.3
  const width = (text: string) =>
    [...text].reduce((total, char) => total + advance(char) * 13, 0)

  const lines: string[] = []
  for (const word of title.split(' ')) {
    const last = lines[lines.length - 1]
    if (last !== undefined && width(`${last} ${word}`) <= 112) {
      lines[lines.length - 1] = `${last} ${word}`
    } else {
      lines.push(word)
    }
  }
  return lines
}

function AwardSealGraphic({ icon }: { icon: AwardSealItem['icon'] }) {
  const Icon = AWARD_ICONS[icon]

  return (
    <div aria-hidden="true" className="relative aspect-[136/104] w-full">
      <div className="absolute top-[67.31%] left-[26.47%] h-[22.4%] w-[47.06%]">
        <svg
          className="award-seal__layer absolute inset-0 size-full translate-y-[17%] scale-90 overflow-visible blur-[4px]"
          preserveAspectRatio="none"
          viewBox="0 0 64 23.3"
        >
          {TAIL_POINTS.map((points) => (
            <polygon
              fill="#1e3a8a"
              fillOpacity={0.18}
              key={points}
              points={points}
            />
          ))}
        </svg>
        <div className="award-seal__layer award-seal__tail award-seal__tail--left absolute inset-0" />
        <div className="award-seal__layer award-seal__tail award-seal__tail--right absolute inset-0" />
        <svg
          className="award-seal__layer absolute inset-0 size-full overflow-visible"
          preserveAspectRatio="none"
          viewBox="0 0 64 23.3"
        >
          {TAIL_POINTS.map((points) => (
            <polygon
              fill="none"
              key={points}
              points={points}
              stroke="#ffffff"
              strokeOpacity={0.75}
              vectorEffect="non-scaling-stroke"
            />
          ))}
        </svg>
      </div>
      <svg
        className="award-seal__layer absolute top-0 left-[19.12%] h-[80.77%] w-[61.76%] translate-y-[9.5%] scale-90 overflow-visible blur-[9px]"
        viewBox="0 0 84 84"
      >
        <path d={ROSETTE_PATH} fill="#1447e6" fillOpacity={0.28} />
      </svg>
      <div className="absolute top-0 left-[19.12%] h-[80.77%] w-[61.76%]">
        <div className="award-seal__layer award-seal__rosette absolute inset-0" />
        <svg
          className="award-seal__layer absolute inset-0 size-full overflow-visible"
          viewBox="0 0 84 84"
        >
          <path
            d={ROSETTE_PATH}
            fill="none"
            stroke="#ffffff"
            strokeOpacity={0.55}
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <div className="award-seal__layer absolute inset-[13.69%] rounded-full border-[1.2px] border-white/80" />
        <Icon
          className="award-seal__layer absolute top-1/2 left-1/2 size-1/3 -translate-x-1/2 -translate-y-1/2 text-white"
          strokeWidth={2}
        />
      </div>
    </div>
  )
}
