import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import TrustBar from '../components/TrustBar'
import HowItWorks from '../components/HowItWorks'
import RegionCard from '../components/RegionCard'

const regions = [
  {
    name: 'Algarve',
    description: "Portugal's most popular holiday destination with over 6,400 active short-term rentals. High demand from UK, Dutch, and German property owners.",
    href: '/algarve',
    available: true,
  },
  {
    name: 'Lisbon',
    description: 'The Portuguese capital offers strong year-round rental demand and a growing number of foreign property investors seeking reliable management.',
    href: '/lisbon',
    available: false,
  },
  {
    name: 'Porto',
    description: "Northern Portugal's cultural hub is rapidly growing as a short-term rental market, especially popular with European visitors.",
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
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-2xl font-semibold text-gray-900 mb-3">Browse by region</h2>
              <p className="text-gray-600 text-base max-w-xl mx-auto">
                We cover Portugal's top property hotspots. Select your region to find a specialist manager.
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
