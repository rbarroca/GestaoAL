const steps = [
  {
    number: '1',
    title: 'Tell us about your property',
    description: 'Fill in our short form with your property details — region, type, and any special requirements. It takes less than 2 minutes.',
  },
  {
    number: '2',
    title: 'We match you with local managers',
    description: 'We review your submission and match you with vetted, experienced property managers who specialise in your area.',
  },
  {
    number: '3',
    title: 'Your manager contacts you within 48h',
    description: 'The matched manager reaches out directly to discuss your needs, services, and pricing. No obligation, no fees.',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-2xl font-semibold text-gray-900 mb-3">How it works</h2>
          <p className="text-gray-600 text-base max-w-xl mx-auto">
            Finding the right property manager in Portugal has never been easier. Here's our simple three-step process.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step) => (
            <div key={step.number} className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm text-center">
              <div className="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-display text-xl font-semibold">
                {step.number}
              </div>
              <h3 className="font-display text-lg font-medium text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
