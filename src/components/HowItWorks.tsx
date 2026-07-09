const steps = [
  {
    number: '1',
    title: 'Tell us about your property',
    description: 'Fill in our short form with your property details, location, and what you need from a manager.',
  },
  {
    number: '2',
    title: 'We match you with local managers',
    description: 'We review your submission and identify the best-fit vetted managers in your region.',
  },
  {
    number: '3',
    title: 'Your manager contacts you within 48h',
    description: 'Sit back. Your matched property manager will reach out directly to discuss next steps.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-16 bg-canvas">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-[22px] font-semibold text-ink mb-3 tracking-[-0.44px]">How it works</h2>
          <p className="text-base text-muted max-w-xl mx-auto leading-relaxed">
            Getting matched with the right property manager takes less than 2 minutes.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="bg-surface-card border border-hairline rounded-xl p-6 hover:shadow-card transition-shadow duration-200"
            >
              <div
                className="w-10 h-10 rounded-ds-sm flex items-center justify-center mb-4"
                style={{ background: 'var(--accent-ui)' }}
              >
                <span className="text-white font-bold text-base">{step.number}</span>
              </div>
              <h3 className="text-base font-semibold text-ink mb-2">{step.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
