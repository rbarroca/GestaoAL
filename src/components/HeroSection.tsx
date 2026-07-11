interface HeroSectionProps {
  headline: string
  subheadline: string
  eyebrow?: string
  ctaLabel: string
  ctaHref: string
  /** Image name without extension, e.g. "algarve" | "lisbon" | "porto" */
  imageName?: string
  /** Alt text for the background image */
  imageAlt?: string
}

export default function HeroSection({
  headline,
  subheadline,
  eyebrow,
  ctaLabel,
  ctaHref,
  imageName,
  imageAlt = '',
}: HeroSectionProps) {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'var(--surface-ink)' }}
    >
      {/* Background image — lazy, region heroes sit below the home hero */}
      {imageName && (
        <picture>
          <source
            type="image/avif"
            srcSet={`/images/${imageName}-768.avif 768w, /images/${imageName}-1280.avif 1280w, /images/${imageName}-1920.avif 1920w`}
            sizes="100vw"
          />
          <source
            type="image/webp"
            srcSet={`/images/${imageName}-768.webp 768w, /images/${imageName}-1280.webp 1280w, /images/${imageName}-1920.webp 1920w`}
            sizes="100vw"
          />
          <img
            src={`/images/${imageName}-1280.webp`}
            width={1920}
            height={1080}
            alt={imageAlt}
            loading="lazy"
            decoding="async"
            className="absolute inset-0 w-full h-full object-cover"
            aria-hidden={!imageAlt || undefined}
          />
        </picture>
      )}

      {/* Directional scrim — keeps text legible over photo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'var(--scrim-hero)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 lg:px-10 py-[88px]">
        {/* Region pages: centered CTA hero */}
        <div className="max-w-2xl mx-auto text-center flex flex-col gap-6">
          {eyebrow && (
            <span className="self-center text-ds-eyebrow uppercase text-white/80 bg-white/10 border border-white/20 rounded-pill px-4 py-1.5">
              {eyebrow}
            </span>
          )}
          <h1
            className="font-black text-white tracking-[-0.03em] leading-[1.04]"
            style={{ fontSize: 'clamp(2.125rem, 6vw, 3.375rem)' }}
          >
            {headline}
          </h1>
          <p className="text-ds-lead text-white/75">
            {subheadline}
          </p>
          <div className="mt-2">
            <a
              href={ctaHref}
              className="inline-flex items-center text-base font-semibold text-white px-8 py-4 rounded-pill min-h-[52px] transition-all duration-[0.18s] ds-focus"
              style={{ background: 'var(--accent-ui)' }}
              onMouseEnter={e => (e.currentTarget.style.background = '#e6314e')}
              onMouseLeave={e => (e.currentTarget.style.background = 'var(--accent-ui)')}
            >
              {ctaLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
