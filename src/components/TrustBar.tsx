export default function TrustBar() {
  const stats = [
    { value: '3', label: 'Regions covered' },
    { value: '12+', label: 'Vetted managers' },
    { value: 'Free', label: 'Matching service' },
  ]

  return (
    <section className="bg-surface-soft py-10 border-y border-hairline">
      <div className="max-w-4xl mx-auto px-6 grid grid-cols-3 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <p
              className="font-extrabold text-ink-900 mb-1 tracking-[-0.02em]"
              style={{ fontSize: '2.25rem', lineHeight: '1.1' }}
            >
              {s.value}
            </p>
            <p className="text-ds-lead text-ink-500">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
