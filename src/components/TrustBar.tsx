export default function TrustBar() {
  const stats = [
    { value: '3', label: 'Regions covered' },
    { value: '12+', label: 'Vetted managers' },
    { value: 'Free', label: 'Matching service' },
  ]

  return (
    <section className="bg-green-900 py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="font-display text-4xl font-semibold text-amber-400">{s.value}</p>
              <p className="mt-1 text-green-100 text-sm font-medium uppercase tracking-wide">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
