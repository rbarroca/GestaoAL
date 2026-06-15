import LeadForm from './LeadForm'

interface HeroSectionProps {
  defaultRegion?: string
  headline: string
  subheadline: string
}

export default function HeroSection({ defaultRegion, headline, subheadline }: HeroSectionProps) {
  return (
    <section className="bg-green-900 py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="text-white">
            <h1 className="font-display text-4xl font-semibold leading-tight mb-6">{headline}</h1>
            <p className="text-green-100 text-lg leading-relaxed">{subheadline}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <h2 className="font-display text-lg font-semibold text-gray-900 mb-4">Get matched for free</h2>
            <LeadForm defaultRegion={defaultRegion} />
          </div>
        </div>
      </div>
    </section>
  )
}
