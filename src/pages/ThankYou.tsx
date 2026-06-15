import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ThankYou() {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as Window & { gtag?: (...args: unknown[]) => void }).gtag) {
      (window as Window & { gtag?: (...args: unknown[]) => void }).gtag!('event', 'lead_submitted', {
        event_category: 'lead',
        event_label: 'property_manager_match',
        value: 1,
      })
    }
  }, [])

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gray-50 flex items-center justify-center py-24 px-4">
        <div className="max-w-lg text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="font-display text-3xl font-semibold text-gray-900 mb-4">We've received your request</h1>
          <p className="text-gray-600 text-lg mb-8">
            We'll match you with the best property manager in your region and they'll be in touch within 48 hours.
          </p>
          <Link
            to="/"
            className="inline-block border border-green-800 text-green-800 hover:bg-green-50 font-medium px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
