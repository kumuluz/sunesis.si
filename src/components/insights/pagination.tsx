import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { InsightsPageContent } from '../../views/insights/types'

type PaginationProps = {
  page: number
  pageCount: number
  onChange: (page: number) => void
  content: InsightsPageContent['pagination']
}

function pageItems(page: number, pageCount: number): (number | null)[] {
  if (pageCount <= 7) {
    return Array.from({ length: pageCount }, (_, i) => i + 1)
  }
  const items: (number | null)[] = [1]
  const start = Math.max(2, page - 1)
  const end = Math.min(pageCount - 1, page + 1)
  if (start > 2) items.push(null)
  for (let p = start; p <= end; p++) items.push(p)
  if (end < pageCount - 1) items.push(null)
  items.push(pageCount)
  return items
}

export function Pagination({
  page,
  pageCount,
  onChange,
  content,
}: PaginationProps) {
  if (pageCount <= 1) return null

  const items = pageItems(page, pageCount)
  const edgeClass =
    'inline-flex min-h-10 cursor-pointer items-center gap-1 rounded-lg border border-neutral-200 px-3 text-sm font-semibold text-neutral-700 transition-colors hover:border-neutral-300 hover:bg-neutral-50 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-transparent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500'

  return (
    <nav
      aria-label={content.current(page, pageCount)}
      className="mt-14 flex items-center justify-center gap-1.5 sm:gap-2"
    >
      <button
        aria-label={content.previous}
        className={edgeClass}
        disabled={page <= 1}
        onClick={() => onChange(page - 1)}
        type="button"
      >
        <ChevronLeft aria-hidden="true" className="size-4" strokeWidth={2.25} />
        <span className="hidden sm:inline">{content.previous}</span>
      </button>

      <ul className="flex items-center gap-1.5">
        {items.map((item, index) =>
          item === null ? (
            <li
              aria-hidden="true"
              className="px-1 text-sm text-neutral-400"
              key={`gap-after-${items[index - 1] ?? 'start'}`}
            >
              …
            </li>
          ) : (
            <li key={item}>
              <button
                aria-current={item === page ? 'page' : undefined}
                aria-label={content.goToPage(item)}
                className={`inline-flex size-10 cursor-pointer items-center justify-center rounded-lg text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${
                  item === page
                    ? 'bg-neutral-900 text-white'
                    : 'text-neutral-700 hover:bg-neutral-100'
                }`}
                onClick={() => onChange(item)}
                type="button"
              >
                {item}
              </button>
            </li>
          ),
        )}
      </ul>

      <button
        aria-label={content.next}
        className={edgeClass}
        disabled={page >= pageCount}
        onClick={() => onChange(page + 1)}
        type="button"
      >
        <span className="hidden sm:inline">{content.next}</span>
        <ChevronRight aria-hidden="true" className="size-4" strokeWidth={2.25} />
      </button>
    </nav>
  )
}
