import { useState } from 'react'

export interface FaqEntry {
  question: string
  answer: string
}

interface FaqProps {
  faqs: FaqEntry[]
  title?: string
}

export default function Faq({ faqs, title = 'Frequently asked questions' }: FaqProps) {
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
          {title}
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
