import LeadForm from './LeadForm'

interface HeroSectionProps {
  defaultRegion?: string
  headline: string
  subheadline: string
  eyebrow?: string
  ctaLabel?: string
  ctaHref?: string
}

export default function HeroSection({ defaultRegion, headline, subheadline, eyebrow, ctaLabel, ctaHref }: HeroSectionProps) {
  return (
    <section className="bg-canvas pt-16 pb-20 px-6" id={ctaLabel ? undefined : 'lead-form'}>
      <div className="max-w-3xl mx-auto text-center">
        {eyebrow && (
          <p className="text-sm font-medium text-muted uppercase tracking-widest mb-4">{eyebrow}</p>
        )}
        <h1 className="text-[28px] md:text-4xl font-bold text-ink leading-[1.25] mb-4">{headline}</h1>
        <p className="text-base text-muted leading-relaxed max-w-xl mx-auto mb-10">{subheadline}</p>
        {ctaLabel && ctaHref ? (
          <a
            href={ctaHref}
            className="inline-flex items-center bg-brand-coral hover:bg-brand-coral-active text-on-brand text-base font-medium px-8 py-3 rounded-full min-h-[48px] transition-colors duration-150"
          >
            {ctaLabel}
          </a>
        ) : (
          <div className="bg-canvas shadow-card rounded-2xl p-6 md:p-8 text-left">
            <p className="text-base font-semibold text-ink mb-6">Get matched for free</p>
            <LeadForm defaultRegion={defaultRegion} />
          </div>
        )}
      </div>
    </section>
  )
}
