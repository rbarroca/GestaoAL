import { Helmet } from 'react-helmet-async'
import { CheckCircle } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import LeadForm from '../components/LeadForm'
import Faq from '../components/Faq'

const managerBenefits = [
  "Remote property management across Porto's diverse neighbourhoods",
  'Guest check-in and check-out handling, including key management',
  'Professional cleaning and routine maintenance coordination',
  'Guest communications in English, French, German and Spanish',
  'Dynamic pricing to maximise revenue across peak and shoulder seasons',
  'Portuguese tax compliance and AL licence support',
]

const subRegions = [
  { name: 'Ribeira', description: "Porto's most iconic neighbourhood. UNESCO World Heritage Site with premium demand and strong international appeal year-round." },
  { name: 'Baixa', description: 'The city centre. High foot traffic, good transport links and consistent demand from both leisure and business travellers.' },
  { name: 'Foz do Douro', description: 'Upscale coastal neighbourhood attracting premium travellers. Higher nightly rates and a quality-focused guest profile.' },
  { name: 'Boavista', description: 'Modern residential area popular with business travellers and longer stays. Growing short-term rental demand.' },
  { name: 'Cedofeita', description: 'Trendy, creative neighbourhood popular with younger European travellers and digital nomads seeking authentic Porto.' },
]

const faqs = [
  {
    question: 'How much does property management cost in Porto?',
    answer:
      'Property management fees in Porto typically range from 15% to 20% of rental revenue for full management slightly lower than Lisbon, reflecting the market stage. Some companies also offer hybrid models with a fixed base fee plus performance commission.',
  },
  {
    question: 'Is Porto a good market for short-term rentals?',
    answer:
      'Yes. Porto recorded 6.27 million overnight stays in 2024, growing 6.9% year-on-year. The city is in an active expansion phase with fewer licensing restrictions than Lisbon, making it one of Portugal\'s strongest short-term rental opportunities.',
  },
  {
    question: 'Which Porto neighbourhoods are best for short-term rentals?',
    answer:
      'Ribeira and Baixa generate the highest demand and nightly rates. Foz do Douro attracts premium travellers. Cedofeita and Boavista are growing markets with good occupancy and lower entry costs.',
  },
  {
    question: 'Do I need a property manager if I live outside Portugal?',
    answer:
      'Yes. If you\'re based outside Portugal, a local property manager handles everything guest check-in, cleaning, maintenance, pricing and Portuguese tax compliance so your Porto investment works without you being there.',
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
}

export default function Porto() {
  return (
    <>
      <Helmet>
        <title>Porto Property Management | Find a Trusted Manager | FindAManagerAL</title>
        <meta name="description" content="Find the best short-term rental management company in Porto. Free matching for foreign property owners. Ribeira, Foz, Boavista & more." />
        <link rel="canonical" href="https://findamanageral.com/porto" />
        <meta property="og:url" content="https://findamanageral.com/porto" />
        <meta property="og:title" content="Porto Property Management | Find a Trusted Manager | FindAManagerAL" />
        <meta property="og:description" content="Find the best short-term rental management company in Porto. Free matching for foreign property owners." />
        <meta property="og:type" content="website" />
      </Helmet>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        <HeroSection
          eyebrow="PORTO · PORTUGAL"
          headline="Find a trusted property manager in Porto."
          subheadline="We match foreign property owners with vetted, experienced managers across Porto. Free service. No obligation."
          ctaLabel="Find my Porto manager →"
          ctaHref="#lead-form"
          imageName="porto"
          imageAlt="Boats on the Douro river near the Dom Luís bridge, Porto"
        />

        {/* Market context */}
        <section className="py-16 bg-canvas">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-[22px] font-semibold text-ink mb-6 tracking-[-0.44px]">
                The Porto short-term rental market
              </h2>
              <div className="space-y-4 text-base text-body leading-relaxed">
                <p>
                  Porto recorded{' '}
                  <strong className="text-ink">6.27 million overnight stays</strong> in 2024 a growth of 6.9% over
                  2023 and 36.9% above pre-pandemic 2019 levels. The Norte region as a whole grew 6.4% in overnight
                  stays, outperforming the national average of 4%.
                </p>
                <p>
                  Short-term rentals represent <strong className="text-ink">22.6%</strong> of all tourist
                  accommodation in Porto, a proportion that continues to grow as the city attracts investors from
                  across Europe. Total tourism revenue for the Porto region reached{' '}
                  <strong className="text-ink">€492 million</strong> in 2024, growing 12.8% year-on-year.
                </p>
                <p>
                  Porto is in an active growth phase. Unlike Lisbon, where licensing restrictions have slowed new registrations, Porto continues to expand its short-term rental market with fewer regulatory barriers. This makes it an attractive entry point for foreign investors.
                </p>
                <p>
                  International visitors represent <strong className="text-ink">63.1%</strong> of overnight stays in
                  the Norte region the highest share on record. The UK, France, Spain and Germany are the primary
                  source markets, with strong demand concentrated in Ribeira, Baixa and the emerging Foz do Douro
                  area.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why you need a property manager */}
        <section className="py-16 bg-surface-soft border-y border-hairline">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-[22px] font-semibold text-ink mb-8 tracking-[-0.44px]">
                Why you need a property manager in Porto
              </h2>
              <ul className="space-y-4">
                {managerBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-muted mt-0.5 flex-shrink-0" />
                    <span className="text-base text-body">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Sub-region cards */}
        <section className="py-16 bg-canvas">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-[22px] font-semibold text-ink mb-3 tracking-[-0.44px]">Key areas in Porto</h2>
              <p className="text-base text-muted max-w-xl mx-auto leading-relaxed">
                We have managers covering all major Porto neighbourhoods.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {subRegions.map((area) => (
                <div key={area.name} className="bg-surface-card border border-hairline rounded-xl p-6 hover:shadow-card transition-shadow duration-200">
                  <p className="text-base font-semibold text-ink mb-2">{area.name}</p>
                  <p className="text-sm text-muted leading-relaxed">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lead form */}
        <section className="py-16 bg-surface-soft border-y border-hairline" id="lead-form">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-8">
              <h2 className="text-[22px] font-semibold text-ink mb-3 tracking-[-0.44px]">
                Ready to find your Porto property manager?
              </h2>
              <p className="text-base text-muted leading-relaxed">
                Submit your details and we'll match you with the right manager. No commitment required.
              </p>
            </div>
            <div className="bg-canvas shadow-card rounded-2xl p-6 md:p-8">
              <LeadForm defaultRegion="Porto" />
            </div>
          </div>
        </section>

        <Faq faqs={faqs} />
      </main>
      <Footer />
    </>
  )
}
