import { Home, User, Mail } from 'lucide-react'

const steps = [
  {
    icon: Home,
    title: 'Tell us about your property',
    description: 'Fill in our short form with your property details, location, and what you need from a manager.',
  },
  {
    icon: User,
    title: 'We match you with local managers',
    description: 'We review your submission and identify the best-fit vetted managers in your region.',
  },
  {
    icon: Mail,
    title: 'Your manager contacts you within 48h',
    description: 'Sit back. Your matched property manager will reach out directly to discuss next steps.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-16 bg-canvas">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            className="font-extrabold text-ink-900 mb-3 tracking-[-0.02em]"
            style={{ fontSize: '2.25rem', lineHeight: '1.1' }}
          >
            How it works
          </h2>
          <p className="text-ds-lead text-ink-500 max-w-xl mx-auto">
            Getting matched with the right property manager takes less than 2 minutes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.title}
              className="bg-surface-card border border-hairline rounded-xl p-6 hover:shadow-card transition-shadow duration-200"
            >
              <div
                className="w-10 h-10 rounded-ds-sm flex items-center justify-center mb-4"
                style={{ background: 'var(--accent-ui)' }}
              >
                <step.icon size={20} className="text-white" strokeWidth={2.25} />
              </div>
              <h3 className="text-ds-h3 text-ink-900 mb-2">{step.title}</h3>
              <p className="text-ds-body text-ink-500">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
