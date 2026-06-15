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
    available: false,
  },
  {
    name: 'Porto',
    description:
      "Portugal's second city and a UNESCO World Heritage site. Strong cultural tourism and growing demand for quality short-term rentals.",
    href: '/porto',
    available: false,
  },
]

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection
          headline="Stop managing from a distance. We'll find you the right manager."
          subheadline="Tell us about your property. We match you with vetted local managers who know your region."
        />
        <TrustBar />
        <HowItWorks />
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">Browse by region</h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                We cover the most popular regions for foreign property owners in Portugal.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
