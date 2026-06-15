import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import TrustBar from '../components/TrustBar'
import HowItWorks from '../components/HowItWorks'
import RegionCard from '../components/RegionCard'

const regions = [
  {
    name: 'Algarve',
    description:
      "Portugal's most popular holiday destination. Over 6,400 active short-term rentals, a thriving international owner community, and strong year-round demand.",
    href: '/algarve',
    available: true,
  },
  {
    name: 'Lisbon',
    description:
      'The capital city attracts millions of visitors annually. A booming short-term rental market with high nightly rates and excellent occupancy.',
    href: '/lisbon',
    available: true,
  },
  {
    name: 'Porto',
    description:
      "Portugal's second city and a UNESCO World Heritage site. Strong cultural tourism and growing demand for quality short-term rentals.",
    href: '/porto',
    available: true,
  },
]

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection
          eyebrow="Portugal · Algarve · Lisbon · Porto"
          headline="Find a trusted property manager for your home in Portugal."
          subheadline="We match foreign property owners with trusted local managers across Portugal. Free, no obligation."
        />
        <TrustBar />
        <HowItWorks />
        <section className="py-16 bg-canvas">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-[22px] font-semibold text-ink mb-3 tracking-[-0.44px]">Browse by region</h2>
              <p className="text-base text-muted max-w-xl mx-auto leading-relaxed">
                We cover the most popular regions for foreign property owners in Portugal.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {regions.map((region) => (
                <RegionCard key={region.name} {...region} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
