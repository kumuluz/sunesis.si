export type TopicTab = {
  key: string | null
  label: string
}

type TopicTabsProps = {
  tabs: TopicTab[]
  activeKey: string | null
  onSelect: (key: string | null) => void
  ariaLabel: string
}

export function TopicTabs({
  tabs,
  activeKey,
  onSelect,
  ariaLabel,
}: TopicTabsProps) {
  return (
    <nav
      aria-label={ariaLabel}
      className="-mb-px flex gap-6 overflow-x-auto border-b border-neutral-200 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
    >
      {tabs.map((tab) => {
        const isActive = tab.key === activeKey
        return (
          <button
            aria-current={isActive ? 'true' : undefined}
            className={`relative cursor-pointer whitespace-nowrap border-b-2 pb-3 pt-1 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${
              isActive
                ? 'border-neutral-900 text-neutral-900'
                : 'border-transparent text-neutral-500 hover:text-neutral-900'
            }`}
            key={tab.key ?? '__all__'}
            onClick={() => onSelect(tab.key)}
            type="button"
          >
            {tab.label}
          </button>
        )
      })}
    </nav>
  )
}
