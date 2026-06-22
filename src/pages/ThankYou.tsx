import { Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ThankYou() {
  return (
    <>
      <Header />
      <main className="min-h-[70vh] bg-canvas flex items-center justify-center py-24 px-6">
        <div className="max-w-lg text-center">
          <div className="w-16 h-16 bg-surface-soft border border-hairline rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-brand-coral" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-[28px] font-bold text-ink mb-4 leading-[1.25]">We've received your request</h1>
          <p className="text-base text-muted leading-relaxed mb-8">
            We'll match you with the best property manager in your region and they'll be in touch within 48 hours.
          </p>
          <Link
            to="/"
            className="inline-flex items-center bg-canvas text-ink border border-ink font-medium px-6 py-3 rounded-full min-h-[48px] hover:bg-surface-soft transition-colors duration-150"
          >
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  )
}
