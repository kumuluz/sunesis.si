import { Reveal } from '../../../../components/motion'
import type { TableBlock } from '../../types'
import { Heading, Section, type SectionBg } from './section-shell'

export function TableSection({
  block,
  bg,
}: {
  block: TableBlock
  bg: SectionBg
}) {
  return (
    <Section bg={bg}>
      <Heading intro={block.intro} title={block.title} />
      <Reveal className="mt-12 overflow-x-auto" delay={0.1}>
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-neutral-300">
              {block.columns.map((column, index) => (
                <th
                  className={`py-3 pr-4 font-bold ${
                    index === 0 ? 'text-neutral-950' : 'text-blue-700'
                  }`}
                  key={column}
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row) => (
              <tr
                className="border-b border-neutral-200 last:border-0"
                key={row[0]}
              >
                {row.map((cell, cellIndex) => (
                  <td
                    className={`py-3 pr-4 align-top leading-6 ${
                      cellIndex === 0
                        ? 'font-semibold text-neutral-900'
                        : 'text-neutral-600'
                    }`}
                    key={cell}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </Reveal>
    </Section>
  )
}
