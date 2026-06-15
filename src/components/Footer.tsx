export default function Footer() {
  return (
    <footer className="bg-canvas border-t border-hairline mt-16">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <p className="text-base font-semibold text-ink mb-3">
            findamanager<span className="text-brand-coral">al</span>
          </p>
          <p className="text-sm text-muted leading-relaxed">
            Matching foreign property owners with trusted local managers across Portugal.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-ink mb-3">Regions</p>
          <ul className="space-y-2 text-sm text-muted">
            <li><a href="/algarve" className="hover:text-ink transition-colors">Algarve</a></li>
            <li><a href="/lisbon" className="hover:text-ink transition-colors">Lisbon</a></li>
            <li><a href="/porto" className="hover:text-ink transition-colors">Porto</a></li>
          </ul>
        </div>
        <div>
          <p className="text-sm font-semibold text-ink mb-3">Contact</p>
          <a href="mailto:hello@findamanageral.com" className="text-sm text-legal-link hover:underline">
            hello@findamanageral.com
          </a>
        </div>
      </div>
      <div className="border-t border-hairline-soft px-6 py-4 max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <p className="text-[13px] text-muted">© {new Date().getFullYear()} FindAManagerAL. All rights reserved.</p>
        <a href="/privacy" className="text-[13px] text-legal-link hover:underline">Privacy Policy</a>
      </div>
    </footer>
  )
}
