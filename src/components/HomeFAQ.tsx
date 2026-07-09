import { useState } from 'react'

const faqs = [
  {
    question: 'Is the matching service really free?',
    answer:
      'Yes, 100% free for property owners. We are paid a referral fee by the property management companies we introduce, only when a match is made. You never pay anything.',
  },
  {
    question: 'How are managers vetted?',
    answer:
      'We vet every manager in our network before they can receive referrals. We check licences, verify experience, review client references, and confirm they are active and responsive. We only work with managers we would trust with our own properties.',
  },
  {
    question: 'How long until I hear back?',
    answer:
      'Typically within 48 hours of submitting your request. Your matched manager will contact you directly to introduce themselves and discuss your property.',
  },
  {
    question: 'Which regions do you cover?',
    answer:
      'We currently cover the Algarve, Lisbon, and Porto — the three most active short-term rental regions in Portugal for foreign owners. We are expanding to Alentejo, Madeira, and the Açores in 2025.',
  },
  {
    question: 'Do I have to commit to a manager?',
    answer:
      'No commitment required. We introduce you to the best-fit manager for your property and location. You then decide whether to proceed. There is no pressure and no obligation.',
  },
]

export default function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  function toggle(i: number) {
    setOpenIndex((prev) => (prev === i ? -1 : i))
  }

  return (
    <section className="py-16 bg-canvas">
      <div className="max-w-[780px] mx-auto px-5">
        <h2
          className="font-extrabold text-ink-900 text-center mb-12 tracking-[-0.02em]"
          style={{ fontSize: '2.25rem', lineHeight: '1.1' }}
        >
          Frequently asked questions
        </h2>
        <div>
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i
            const isLast = i === faqs.length - 1
            return (
              <div key={faq.question} className={!isLast ? 'border-b border-ds-border-default' : ''}>
                <button
                  className="w-full flex items-center justify-between py-5 text-left gap-4"
                  onClick={() => toggle(i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-[1.25rem] font-bold text-ink-900 leading-snug">
                    {faq.question}
                  </span>
                  {/* Toggle glyph: --accent-ui, ~24px weight 700 */}
                  <span
                    className="text-[1.5rem] font-bold leading-none flex-shrink-0"
                    style={{ color: 'var(--accent-ui)' }}
                    aria-hidden="true"
                  >
                    {isOpen ? '–' : '+'}
                  </span>
                </button>
                {/*
                  Answer kept in DOM at all times — SSG/view-source sees all content.
                  max-h transition hides/reveals without removing from HTML.
                */}
                <div
                  className="overflow-hidden transition-all"
                  style={{
                    maxHeight: isOpen ? '400px' : '0px',
                    transitionDuration: 'var(--dur-base)',
                    transitionTimingFunction: 'var(--ease-out)',
                  }}
                >
                  <p
                    className="text-ds-body text-ink-500 pb-5"
                    style={{ lineHeight: '1.6' }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
