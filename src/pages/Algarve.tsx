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
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-display font-medium text-gray-900">{question}</span>
        {open ? <ChevronUp size={18} className="text-gray-500 flex-shrink-0" /> : <ChevronDown size={18} className="text-gray-500 flex-shrink-0" />}
      </button>
      {open && (
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
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
          headline="Algarve Property Management — Find a Trusted Local Manager"
          subheadline="We match foreign property owners with vetted, experienced property managers across the Algarve. Free service. No obligation."
          defaultRegion="Algarve"
        />

        {/* Market context */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-2xl font-semibold text-gray-900 mb-6">
                The Algarve short-term rental market
              </h2>
              <div className="prose prose-gray space-y-4 text-gray-600 leading-relaxed">
                <p>
                  The Algarve is Portugal's most active short-term rental region. Albufeira alone has over{' '}
                  <strong className="text-gray-900">6,400 active short-term rental listings</strong>, making it one of
                  the highest-density rental markets in Southern Europe.
                </p>
                <p>
                  Average nightly rates across the region sit at around{' '}
                  <strong className="text-gray-900">€217</strong>, with premium properties in Vilamoura and Vale do Lobo
                  commanding significantly higher. Average occupancy is approximately{' '}
                  <strong className="text-gray-900">62%</strong> annually, rising above 85% during the peak summer
                  season.
                </p>
                <p>
                  Peak season runs from <strong className="text-gray-900">June through September</strong>, driven by
                  family holiday demand from the UK, Germany, France, the Netherlands and Ireland. Shoulder seasons have
                  strengthened significantly in recent years, particularly for golf and nature tourism.
                </p>
                <p>
                  The majority of Algarve holiday property owners are foreign nationals — primarily from the UK,
                  Ireland, the Netherlands and Germany. Most manage their properties remotely, making a reliable local
                  property manager an essential business partner rather than a luxury.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why you need a property manager */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-2xl font-semibold text-gray-900 mb-8">
                Why you need a property manager in the Algarve
              </h2>
              <ul className="space-y-4">
                {managerBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-700 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Sub-region cards */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">Key areas in the Algarve</h2>
              <p className="text-gray-500 max-w-xl mx-auto">
                We have managers covering all major areas of the Algarve coast.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subRegions.map((area) => (
                <div key={area.name} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="font-display text-lg font-medium text-gray-900 mb-2">{area.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{area.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Second lead form */}
        <section className="py-16 md:py-24 bg-green-900" id="form-bottom">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div className="text-white">
                <h2 className="font-display text-2xl font-semibold mb-4">
                  Ready to find your Algarve property manager?
                </h2>
                <p className="text-green-100 leading-relaxed">
                  Submit your details and we'll match you with the right manager for your property and goals. No
                  commitment required — just tell us what you need.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <LeadForm defaultRegion="Algarve" />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-2xl font-semibold text-gray-900 mb-8 text-center">
                Frequently asked questions
              </h2>
              <div className="space-y-4">
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
