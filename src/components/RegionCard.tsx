import { Link } from 'react-router-dom'

interface RegionCardProps {
  name: string
  description: string
  href: string
  available: boolean
  /** Image name without extension, e.g. "algarve" — matches public/images/{name}-{w}.webp */
  imageName?: string
  imageAlt?: string
}

export default function RegionCard({ name, description, href, available, imageName, imageAlt }: RegionCardProps) {
  const imageZone = (
    <div className="relative h-44 bg-surface-ink overflow-hidden">
      {/* Real photo — served at card size (max 720px, lazy below the fold) */}
      {imageName && (
        <picture>
          <source
            type="image/avif"
            srcSet={`/images/${imageName}-360.avif 360w, /images/${imageName}-720.avif 720w`}
            sizes="(max-width: 640px) 100vw, 360px"
          />
          <source
            type="image/webp"
            srcSet={`/images/${imageName}-360.webp 360w, /images/${imageName}-720.webp 720w`}
            sizes="(max-width: 640px) 100vw, 360px"
          />
          <img
            src={`/images/${imageName}-360.webp`}
            width={360}
            height={203}
            alt={imageAlt ?? name}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </picture>
      )}
      {/* scrim-card: bottom-up dark gradient keeps region name legible over any photo */}
      <div className="absolute inset-0" style={{ background: 'var(--scrim-card)' }} aria-hidden="true" />
      <p className="absolute bottom-4 left-4 text-[1.625rem] font-extrabold text-white leading-none">{name}</p>
    </div>
  )

  if (!available) {
    return (
      <div className="block bg-white border border-ds-border-soft rounded-ds-lg overflow-hidden opacity-60">
        {imageZone}
        <div className="p-5 bg-white">
          <p className="text-ds-body text-ink-500 leading-relaxed mb-4">{description}</p>
          <p className="text-ds-base font-semibold text-ink-400">Coming soon</p>
        </div>
      </div>
    )
  }

  return (
    <Link
      to={href}
      className="block bg-white border border-ds-border-soft rounded-ds-lg overflow-hidden transition-all duration-[0.4s] hover:-translate-y-[3px] hover:shadow-ds-card"
    >
      {imageZone}
      <div className="p-5 bg-white">
        <p className="text-ds-body text-ink-500 leading-relaxed mb-4">{description}</p>
        <p className="text-sm font-bold" style={{ color: 'var(--accent-text)' }}>View managers →</p>
      </div>
    </Link>
  )
}
