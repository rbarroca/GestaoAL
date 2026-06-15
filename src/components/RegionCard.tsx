import { Link } from 'react-router-dom'

interface RegionCardProps {
  name: string
  description: string
  href: string
  available: boolean
}

export default function RegionCard({ name, description, href, available }: RegionCardProps) {
  if (!available) {
    return (
      <div className="block bg-surface-card border border-hairline rounded-xl p-6 opacity-60 min-h-[180px]">
        <div className="flex items-start justify-between mb-1">
          <p className="text-[20px] font-semibold text-ink">{name}</p>
          <span className="text-[11px] font-semibold text-muted bg-surface-strong px-2 py-1 rounded-full uppercase tracking-wide whitespace-nowrap">
            Coming soon
          </span>
        </div>
        <p className="text-sm text-muted leading-relaxed mb-4">{description}</p>
        <p className="text-sm font-medium text-muted-soft">Not yet available</p>
      </div>
    )
  }

  return (
    <Link
      to={href}
      className="block bg-surface-card border border-hairline rounded-xl p-6 min-h-[180px] hover:shadow-card transition-shadow duration-200 group"
    >
      <p className="text-[20px] font-semibold text-ink mb-1 group-hover:text-brand-coral transition-colors">
        {name}
      </p>
      <p className="text-sm text-muted leading-relaxed mb-4">{description}</p>
      <p className="text-sm font-medium text-brand-coral">View managers →</p>
    </Link>
  )
}
