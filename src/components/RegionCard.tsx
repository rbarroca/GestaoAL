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
      <div className="block bg-white border border-ds-border-soft rounded-ds-lg overflow-hidden opacity-60">
        {/* Image zone placeholder */}
        <div className="relative h-44 bg-surface-ink">
          <div className="absolute inset-0" style={{ background: 'var(--scrim-card)' }} aria-hidden="true" />
          <p className="absolute bottom-4 left-4 text-[1.625rem] font-extrabold text-white leading-none">{name}</p>
        </div>
        <div className="p-5 bg-white">
          <p className="text-ds-base text-ink-500 leading-relaxed mb-4">{description}</p>
          <p className="text-sm font-semibold text-ink-400">Coming soon</p>
        </div>
      </div>
    )
  }

  return (
    <Link
      to={href}
      className="block bg-white border border-ds-border-soft rounded-ds-lg overflow-hidden transition-all duration-[0.4s] hover:-translate-y-[3px] hover:shadow-ds-card"
    >
      {/* Image zone: ~55% of card height — drop <img object-fit:cover> here when photos available:
          <img src="..." alt="..." className="absolute inset-0 w-full h-full object-cover" /> */}
      <div className="relative h-44 bg-surface-ink overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'var(--scrim-card)' }} aria-hidden="true" />
        <p className="absolute bottom-4 left-4 text-[1.625rem] font-extrabold text-white leading-none">{name}</p>
      </div>

      {/* Text block */}
      <div className="p-5 bg-white">
        <p className="text-ds-base text-ink-500 leading-relaxed mb-4 line-clamp-2">{description}</p>
        <p className="text-sm font-bold" style={{ color: 'var(--accent-text)' }}>View managers →</p>
      </div>
    </Link>
  )
}
