import { useState } from 'react'
import { CheckCircle, ChevronDown, ChevronUp } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HeroSection from '../components/HeroSection'
import LeadForm from '../components/LeadForm'

const managementBenefits = [
  'Remote property management — handle everything from abroad',
  'Guest check-in and check-out coordination',
  'Professional cleaning and routine maintenance',
  'Guest communications and review management',
  'Portuguese tax compliance and AL licence support',
  'Dynamic pricing to maximise your rental revenue',
]

const subRegions = [
  { name: 'Albufeira', description: 'The Algarve\'s most active rental market, accounting for roughly 40% of regional short-term listings.' },
  { name: 'Lagos', description: 'A charming coastal town with strong demand from independent travellers and families seeking beach proximity.' },
  { name: 'Faro', description: 'The regional capital and gateway airport town, with a growing urban short-term rental market.' },
  { name: 'Tavira', description: 'An upmarket eastern Algarve destination popular with discerning European travellers.' },
  { name: 'Vilamoura', description: 'A prestigious marina town with high average nightly rates and a strong luxury rental market.' },
]

const faqs = [
  {
    question: 'How much does property management cost in the Algarve?',
    answer: 'Typically 15–25% of rental revenue for full management, which includes guest communication, check-in/check-out, cleaning coordination, and maintenance. Some managers also offer letting-only or maintenance-only packages at lower rates. Exact pricing varies by manager, property size, and the level of service required.',
  },
  {
    question: 'Do I need a property manager for my Algarve holiday home?',
    answer: 'If you live outside Portugal, a local property manager is almost essential. They handle the day-to-day realities of running a short-term rental — from welcoming guests at odd hours to coordinating emergency repairs. Without local representation, a single maintenance issue can result in negative reviews and lost bookings.',
  },
  {
    question: 'What is the average occupancy rate for Algarve short-term rentals?',
    answer: 'The average occupancy rate for Algarve short-term rentals is approximately 62% annually. However, this rises significantly during the peak season (June–September), when well-managed properties can achieve 85–95% occupancy. Properties in prime locations like Albufeira and Vilamoura tend to outperform the average.',
  },
  {
    question: 'Which areas of the Algarve have the most short-term rental activity?',
    answer: 'Albufeira accounts for approximately 40% of all Algarve short-term rental listings and has the highest absolute volume. Vilamoura and Lagos command the highest average nightly rates. Tavira attracts a more upmarket, longer-stay clientele. Faro sees strong demand year-round due to the airport and urban tourism.',
  },
]

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-6 py-4 text-left bg-white hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-display font-medium text-gray-900 pr-4">{question}</span>
        {open ? <ChevronUp size={20} className="text-gray-500 flex-shrink-0" /> : <ChevronDown size={20} className="text-gray-500 flex-shrink-0" />}
      </button>
      {open && (
        <div className="px-6 pb-4 bg-white">
          <p className="text-gray-600 text-base leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

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
          subheadline="Tell us about your Algarve property and we'll match you with a vetted local manager who knows your area."
          defaultRegion="Algarve"
        />

        {/* Market context */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">The Algarve short-term rental market</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    The Algarve is Portugal's most active short-term rental market. Albufeira alone has over <strong className="text-gray-900">6,400 active short-term rental listings</strong>, making it one of the busiest markets in the Iberian Peninsula.
                  </p>
                  <p>
                    The region achieves an <strong className="text-gray-900">average nightly rate of €217</strong> and an overall occupancy rate of approximately <strong className="text-gray-900">62% annually</strong> — with peak season running from <strong className="text-gray-900">June through September</strong>, when demand from Northern European visitors drives occupancy above 85%.
                  </p>
                  <p>
                    The majority of property owners in the Algarve are foreign nationals — primarily from the <strong className="text-gray-900">UK, Ireland, the Netherlands, and Germany</strong> — who rely on trusted local management companies to handle their rental operations year-round.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-xl p-6 text-center">
                  <p className="font-display text-3xl font-semibold text-green-800">6,400+</p>
                  <p className="text-sm text-gray-600 mt-1">Active listings in Albufeira alone</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 text-center">
                  <p className="font-display text-3xl font-semibold text-green-800">€217</p>
                  <p className="text-sm text-gray-600 mt-1">Average nightly rate</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 text-center">
                  <p className="font-display text-3xl font-semibold text-green-800">62%</p>
                  <p className="text-sm text-gray-600 mt-1">Average annual occupancy</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-6 text-center">
                  <p className="font-display text-3xl font-semibold text-green-800">Jun–Sep</p>
                  <p className="text-sm text-gray-600 mt-1">Peak rental season</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why you need a property manager */}
        <section className="py-16 md:py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto">
              <h2 className="font-display text-2xl font-semibold text-gray-900 mb-4">Why you need a property manager in the Algarve</h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Managing an Algarve rental from the UK, Germany, or the Netherlands is challenging. Here's what a good local manager handles for you:
              </p>
              <ul className="space-y-4">
                {managementBenefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3">
                    <CheckCircle size={20} className="text-green-700 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Sub-region cards */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-3 text-center">Algarve sub-regions we cover</h2>
            <p className="text-gray-600 text-center mb-10 max-w-xl mx-auto">
              Our network of managers covers all the major Algarve destinations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subRegions.map((region) => (
                <div key={region.name} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <h3 className="font-display text-lg font-medium text-gray-900 mb-2">{region.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{region.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom lead form */}
        <section className="py-16 md:py-24 bg-green-900" id="form-bottom">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              <div>
                <h2 className="font-display text-2xl font-semibold text-white mb-4">Ready to find your Algarve property manager?</h2>
                <p className="text-green-100 leading-relaxed">
                  Fill in the short form and we'll match you with the most suitable vetted manager for your property and location. Free service, no obligation.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <LeadForm defaultRegion="Algarve" />
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-2xl font-semibold text-gray-900 mb-8 text-center">Frequently asked questions</h2>
            <div className="space-y-3">
              {faqs.map((faq) => (
                <FaqItem key={faq.question} {...faq} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
