import { Helmet } from 'react-helmet-async'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HomeHero from '../components/HomeHero'
import TrustBar from '../components/TrustBar'
import HowItWorks from '../components/HowItWorks'
import RegionCard from '../components/RegionCard'
import Faq from '../components/Faq'

const faqs = [
  {
    question: 'Is the matching service really free?',
    answer:
      'Yes, 100% free for property owners. We are paid a referral fee by the property management companies we introduce, only when a match is made. You never pay anything.',
  },
  {
    question: 'How are managers vetted?',
    answer:
      'We vet every manager in our network before they can receive referrals. We check licences, verify experience, review client references, and confirm they are active and responsive. We only work with managers we would trust with our own properties.',
  },
  {
    question: 'How long until I hear back?',
    answer:
      'Typically within 48 hours of submitting your request. Your matched manager will contact you directly to introduce themselves and discuss your property.',
  },
  {
    question: 'Which regions do you cover?',
    answer:
      'We currently cover the Algarve, Lisbon, and Porto — the three most active short-term rental regions in Portugal for foreign owners. We are expanding to Alentejo, Madeira, and the Açores in 2025.',
  },
  {
    question: 'Do I have to commit to a manager?',
    answer:
      'No commitment required. We introduce you to the best-fit manager for your property and location. You then decide whether to proceed. There is no pressure and no obligation.',
  },
]

const regions = [
  {
    name: 'Algarve',
    description:
      "Portugal's most popular holiday destination. Over 6,400 active short-term rentals, a thriving international owner community, and strong year-round demand.",
    href: '/algarve',
    available: true,
    imageName: 'algarve',
    imageAlt: 'Scenic coastal cliffs in the Algarve, Portugal',
  },
  {
    name: 'Lisbon',
    description:
      'The capital city attracts millions of visitors annually. A booming short-term rental market with high nightly rates and excellent occupancy.',
    href: '/lisbon',
    available: true,
    imageName: 'lisbon',
    imageAlt: 'Yellow tram on a Lisbon street, Portugal',
  },
  {
    name: 'Porto',
    description:
      "Portugal's second city and a UNESCO World Heritage site. Strong cultural tourism and growing demand for quality short-term rentals.",
    href: '/porto',
    available: true,
    imageName: 'porto',
    imageAlt: 'Boats on the Douro river near the Dom Luís bridge, Porto',
  },
]

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Find a Property Manager in Portugal | FindAManagerAL</title>
        <meta name="description" content="Find a vetted local property manager for your holiday home in Portugal. We match foreign property owners with trusted managers in the Algarve, Lisbon and Porto." />
        <link rel="canonical" href="https://findamanageral.com/" />
        <meta property="og:url" content="https://findamanageral.com/" />
        <meta property="og:title" content="Find a Property Manager in Portugal | FindAManagerAL" />
        <meta property="og:description" content="Free matching service for foreign property owners in Portugal. Algarve, Lisbon and Porto." />
        <meta property="og:type" content="website" />
      </Helmet>
      <Header />
      <main>
        <HomeHero
          eyebrow="Portugal · Algarve · Lisbon · Porto"
          headline="Find a trusted property manager for your home in Portugal."
          subheadline="We match foreign property owners with trusted local managers across Portugal. Free, no obligation."
          imageName="hero"
          imageAlt="Aerial view of a beach in Portugal"
        />
        <TrustBar />
        <HowItWorks />
        <section className="py-16 bg-canvas">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2
                className="font-extrabold text-ink-900 mb-3 tracking-[-0.02em]"
                style={{ fontSize: '2.25rem', lineHeight: '1.1' }}
              >
                Browse by region
              </h2>
              <p className="text-ds-lead text-ink-500 max-w-xl mx-auto">
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
        <Faq faqs={faqs} />
      </main>
      <Footer />
    </>
  )
}
