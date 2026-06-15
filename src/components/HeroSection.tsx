import LeadForm from './LeadForm'

interface HeroSectionProps {
  defaultRegion?: string
  headline: string
  subheadline: string
  eyebrow?: string
}

export default function HeroSection({ defaultRegion, headline, subheadline, eyebrow }: HeroSectionProps) {
  return (
    <section className="bg-canvas pt-16 pb-20 px-6" id="lead-form">
      <div className="max-w-3xl mx-auto text-center">
        {eyebrow && (
          <p className="text-sm font-medium text-muted uppercase tracking-widest mb-4">{eyebrow}</p>
        )}
        <h1 className="text-[28px] md:text-4xl font-bold text-ink leading-[1.25] mb-4">{headline}</h1>
        <p className="text-base text-muted leading-relaxed max-w-xl mx-auto mb-10">{subheadline}</p>
        <div className="bg-canvas shadow-card rounded-2xl p-6 md:p-8 text-left">
          <p className="text-base font-semibold text-ink mb-6">Get matched for free</p>
          <LeadForm defaultRegion={defaultRegion} />
        </div>
      </div>
    </section>
  )
}
