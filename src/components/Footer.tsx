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
          <ul className="space-y-2 text-sm">
            <li><a href="/algarve" className="text-muted hover:text-ink transition-colors">Algarve</a></li>
            <li><a href="/lisbon" className="text-muted hover:text-ink transition-colors">Lisbon</a></li>
            <li><a href="/porto" className="text-muted hover:text-ink transition-colors">Porto</a></li>
            <li><span className="text-muted-soft">Alentejo</span></li>
            <li><span className="text-muted-soft">Madeira</span></li>
            <li><span className="text-muted-soft">Açores</span></li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-ink mb-3">Resources</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="https://calculadoraal.pt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-ink transition-colors"
              >
                AL Revenue Calculator
              </a>
            </li>
            <li>
              <a
                href="https://tudosobrealojamentolocal.pt"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-ink transition-colors"
              >
                AL Complete Guide
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-hairline-soft px-6 py-4 max-w-6xl mx-auto">
        <p className="text-[13px] text-muted">© {new Date().getFullYear()} FindAManagerAL. All rights reserved.</p>
      </div>
    </footer>
  )
}
