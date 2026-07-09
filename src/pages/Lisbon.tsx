import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { CheckCircle, ChevronDown, ChevronUp } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import LeadForm from '../components/LeadForm'

const managerBenefits = [
  'Remote property management so you never need to be on-site',
  'Guest check-in and check-out in multiple languages, 24/7',
  "Navigation of Lisbon's AL licensing and containment zone regulations",
  'Professional cleaning and maintenance coordination',
  'Dynamic pricing across Airbnb, Booking.com and VRBO',
  'Portuguese tax compliance and NHR / income reporting support',
]

const subRegions = [
  { name: 'Chiado', description: "Lisbon's most desirable neighbourhood. Premium properties, high nightly rates and strong international demand year-round." },
  { name: 'Alfama', description: 'The historic heart of Lisbon. High demand for authentic experiences, particularly from the US and Northern European markets.' },
  { name: 'Príncipe Real', description: 'Upscale residential neighbourhood attracting quality-focused travellers with above-average nightly budgets.' },
  { name: 'Bairro Alto', description: 'Central location with strong nightlife appeal. Popular with younger European travellers and digital nomads.' },
  { name: 'Parque das Nações', description: 'Modern riverside district with growing short-term rental demand and newer, larger properties.' },
  { name: 'Belém', description: 'Cultural tourism hub with consistent demand driven by monuments, museums and the riverside setting.' },
]

const faqs = [
  {
    question: 'How much does property management cost in Lisbon?',
    answer:
      'Property management fees in Lisbon typically range from 15% to 22% of rental revenue for full management. Some companies offer fixed monthly retainers for owners who prefer predictable costs.',
  },
  {
    question: 'Are there restrictions on short-term rentals in Lisbon?',
    answer:
      'Yes. Lisbon has introduced containment zones where new AL licences are restricted or suspended in certain parishes. A professional manager will assess your property\'s status and ensure full compliance with current municipal regulations.',
  },
  {
    question: 'What is the average nightly rate for short-term rentals in Lisbon?',
    answer:
      'The average daily rate (ADR) in Lisbon reached €154.6 in 2024, among the highest in Portugal. Premium neighbourhoods like Chiado and Príncipe Real command significantly higher rates.',
  },
  {
    question: 'Do I need a property manager if I live outside Portugal?',
    answer:
      'If you live outside Portugal, a property manager is essential. They handle guest communications, check-in, cleaning, maintenance and all Portuguese regulatory requirements so you earn rental income without day-to-day involvement.',
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

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-hairline rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-canvas hover:bg-surface-soft transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-ink pr-4">{question}</span>
        {open
          ? <ChevronUp size={18} className="text-muted flex-shrink-0" />
          : <ChevronDown size={18} className="text-muted flex-shrink-0" />
        }
      </button>
      {open && (
        <div className="px-6 py-5 bg-surface-soft border-t border-hairline">
          <p className="text-base text-body leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function Lisbon() {
  return (
    <>
      <Helmet>
        <title>Lisbon Property Management | Find a Trusted Manager | FindAManagerAL</title>
        <meta name="description" content="Find the best short-term rental management company in Lisbon. Free matching for foreign property owners. Chiado, Alfama, Príncipe Real & more." />
        <link rel="canonical" href="https://findamanageral.com/lisbon" />
        <meta property="og:url" content="https://findamanageral.com/lisbon" />
        <meta property="og:title" content="Lisbon Property Management | Find a Trusted Manager | FindAManagerAL" />
        <meta property="og:description" content="Find the best short-term rental management company in Lisbon. Free matching for foreign property owners." />
        <meta property="og:type" content="website" />
      </Helmet>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        <HeroSection
          eyebrow="LISBON · PORTUGAL"
          headline="Find a trusted property manager in Lisbon."
          subheadline="We match foreign property owners with vetted, experienced managers across Lisbon. Free service. No obligation."
          ctaLabel="Find my Lisbon manager →"
          ctaHref="#lead-form"
          imageName="lisbon"
          imageAlt="Yellow tram on a Lisbon street, Portugal"
        />

        {/* Market context */}
        <section className="py-16 bg-canvas">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-[22px] font-semibold text-ink mb-6 tracking-[-0.44px]">
                The Lisbon short-term rental market
              </h2>
              <div className="space-y-4 text-base text-body leading-relaxed">
                <p>
                  Lisbon is Portugal's most visited city, concentrating 19.6% of all national overnight stays 15.7 million in 2024 alone. The municipality recorded an ADR of €154.6, among the three highest in the country alongside Cascais and Loulé.
                </p>
                <p>
                  Unlike seasonal markets, Lisbon operates year-round. The city recorded the lowest seasonality rate among major Portuguese regions (30%) in 2024, meaning consistent demand across all twelve months. Non-residents account for the majority of overnight stays 80%+ in peak months.
                </p>
                <p>
                  The Grande Lisboa region generated 19.8% of total national tourism revenue in 2024 second only to the Algarve. RevPAR reached €106.7, the highest in mainland Portugal, reflecting the strength of the urban short-term rental market.
                </p>
                <p>
                  Regulatory context matters here: Lisbon has introduced containment zones and licensing restrictions since 2023. A professional manager who understands local compliance including RNAL registration, condominium rules, and municipal requirements is essential for any foreign owner.
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
                Why you need a property manager in Lisbon
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
              <h2 className="text-[22px] font-semibold text-ink mb-3 tracking-[-0.44px]">Key areas in Lisbon</h2>
              <p className="text-base text-muted max-w-xl mx-auto leading-relaxed">
                We have managers covering all major Lisbon neighbourhoods.
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
                Ready to find your Lisbon property manager?
              </h2>
              <p className="text-base text-muted leading-relaxed">
                Submit your details and we'll match you with the right manager. No commitment required.
              </p>
            </div>
            <div className="bg-canvas shadow-card rounded-2xl p-6 md:p-8">
              <LeadForm defaultRegion="Lisbon" />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-canvas">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-[22px] font-semibold text-ink mb-8 tracking-[-0.44px] text-center">
                Frequently asked questions
              </h2>
              <div className="space-y-3">
                {faqs.map((faq) => (
                  <FaqItem key={faq.question} question={faq.question} answer={faq.answer} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
