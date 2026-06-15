import { useState } from 'react'
import { CheckCircle, ChevronDown, ChevronUp } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import LeadForm from '../components/LeadForm'

const managerBenefits = [
  'Remote property management so you never need to be on-site',
  'Guest check-in and check-out handling, including key management',
  'Professional cleaning and routine maintenance coordination',
  'Guest communications in multiple languages, 24/7',
  'Portuguese tax compliance and AL licence support',
  'Dynamic pricing strategies to maximise your rental revenue',
]

const subRegions = [
  { name: 'Albufeira', description: "The Algarve's most active rental market — ~40% of all regional short-term rentals." },
  { name: 'Lagos', description: 'A popular coastal town with a mix of apartments and villas and a strong western Algarve market.' },
  { name: 'Faro', description: 'The regional capital with year-round demand driven by the international airport.' },
  { name: 'Tavira', description: 'A quieter, upmarket eastern Algarve town attracting quality-focused travellers.' },
  { name: 'Vilamoura', description: 'A marina resort with premium properties and high average nightly rates.' },
]

const faqs = [
  {
    question: 'How much does property management cost in the Algarve?',
    answer:
      'Typically 15–25% of rental revenue for full management services. This usually includes guest communications, check-in/out, cleaning coordination, and maintenance. Some managers charge separately for maintenance call-outs. Always request a detailed breakdown before signing.',
  },
  {
    question: 'Do I need a property manager for my Algarve holiday home?',
    answer:
      'If you live outside Portugal, a local property manager is almost essential. They handle everything from guest arrivals to emergency maintenance, freeing you from the stress of remote management. They also ensure legal compliance with Portuguese short-term rental regulations, which can be complex for foreign owners.',
  },
  {
    question: 'What is the average occupancy rate for Algarve short-term rentals?',
    answer:
      'The average occupancy rate across the Algarve is approximately 62%. Peak season runs from June to September, when occupancy can exceed 85%. Shoulder seasons (April–May and October) are increasingly popular, especially in premium locations like Vilamoura and Lagos.',
  },
  {
    question: 'Which areas of the Algarve have the most short-term rental activity?',
    answer:
      'Albufeira accounts for around 40% of all short-term rental listings in the Algarve, making it the most active market. Lagos and Vilamoura follow closely. Eastern Algarve towns like Tavira are growing in popularity among higher-spending travellers seeking a quieter experience.',
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

export default function Algarve() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        <HeroSection
          eyebrow="Algarve · Portugal"
          headline="Find a trusted property manager in the Algarve."
          subheadline="We match foreign property owners with vetted, experienced managers across the Algarve. Free service. No obligation."
          defaultRegion="Algarve"
        />

        {/* Market context */}
        <section className="py-16 bg-canvas">
          <div className="max-w-6xl mx-auto px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-[22px] font-semibold text-ink mb-6 tracking-[-0.44px]">
                The Algarve short-term rental market
              </h2>
              <div className="space-y-4 text-base text-body leading-relaxed">
                <p>
                  The Algarve is Portugal's most active short-term rental region. Albufeira alone has over{' '}
                  <strong className="text-ink">6,400 active short-term rental listings</strong>, making it one of
                  the highest-density rental markets in Southern Europe.
                </p>
                <p>
                  Average nightly rates across the region sit at around{' '}
                  <strong className="text-ink">€217</strong>, with premium properties in Vilamoura and Vale do Lobo
                  commanding significantly higher. Average occupancy is approximately{' '}
                  <strong className="text-ink">62%</strong> annually, rising above 85% during peak summer.
                </p>
                <p>
                  Peak season runs from <strong className="text-ink">June through September</strong>, driven by
                  family holiday demand from the UK, Germany, France, the Netherlands and Ireland. Shoulder seasons
                  have strengthened significantly, particularly for golf and nature tourism.
                </p>
                <p>
                  The majority of Algarve holiday property owners are foreign nationals — primarily from the UK,
                  Ireland, the Netherlands and Germany. Most manage remotely, making a reliable local property
                  manager an essential business partner rather than a luxury.
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
                Why you need a property manager in the Algarve
              </h2>
              <ul className="space-y-4">
                {managerBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-brand-coral mt-0.5 flex-shrink-0" />
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
              <h2 className="text-[22px] font-semibold text-ink mb-3 tracking-[-0.44px]">Key areas in the Algarve</h2>
              <p className="text-base text-muted max-w-xl mx-auto leading-relaxed">
                We have managers covering all major areas of the Algarve coast.
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

        {/* Second lead form */}
        <section className="py-16 bg-surface-soft border-y border-hairline" id="form-bottom">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-8">
              <h2 className="text-[22px] font-semibold text-ink mb-3 tracking-[-0.44px]">
                Ready to find your Algarve property manager?
              </h2>
              <p className="text-base text-muted leading-relaxed">
                Submit your details and we'll match you with the right manager. No commitment required.
              </p>
            </div>
            <div className="bg-canvas shadow-card rounded-2xl p-6 md:p-8">
              <LeadForm defaultRegion="Algarve" />
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
