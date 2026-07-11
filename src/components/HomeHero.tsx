import LeadForm from './LeadForm'

interface HomeHeroProps {
  eyebrow?: string
  headline: string
  subheadline: string
  imageName: string
  imageAlt: string
}

const trustChips = [
  '✓ 100% free for owners',
  '✓ Reply within 48h',
]

export default function HomeHero({ eyebrow, headline, subheadline, imageName, imageAlt }: HomeHeroProps) {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: 'var(--surface-ink)' }}
      id="lead-form"
    >
      {/* Background image — LCP element, eager */}
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
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </picture>

      {/* Directional scrim — keeps text legible over photo */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'var(--scrim-hero)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 lg:px-10 py-16 lg:py-20 lg:min-h-[calc(100vh-80px)] flex items-center">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center w-full">

          {/* Left — copy */}
          <div className="flex flex-col gap-7 lg:pt-4">
            {eyebrow && (
              <span className="self-start text-ds-eyebrow uppercase text-white/80 bg-white/10 border border-white/20 rounded-pill px-4 py-1.5">
                {eyebrow}
              </span>
            )}
            <h1
              className="font-black text-white tracking-[-0.03em] leading-[1.02]"
              style={{ fontSize: 'clamp(2.75rem, 7vw, 4.5rem)' }}
            >
              {headline}
            </h1>
            <p
              className="text-white/75 max-w-[560px]"
              style={{ fontSize: 'clamp(1.125rem, 2vw, 1.375rem)', lineHeight: '1.5' }}
            >
              {subheadline}
            </p>
            <div className="flex flex-wrap gap-3 mt-2">
              {trustChips.map((chip) => (
                <span
                  key={chip}
                  className="text-sm font-medium text-white/90 bg-white/10 border border-white/20 rounded-pill px-4 py-2"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Right — floating form card */}
          <div
            className="w-full rounded-ds-xl bg-white p-8 lg:p-10"
            style={{ boxShadow: 'var(--shadow-float)' }}
          >
            <p className="text-ds-h3 font-semibold text-ink-900 mb-6">Get matched for free</p>
            <LeadForm />
          </div>
        </div>
      </div>
    </section>
  )
}
