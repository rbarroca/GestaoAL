import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-canvas border-b border-hairline">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-[21px] font-bold text-ink tracking-tight">
          findamanager<span className="text-brand-coral">al</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-body">
          <Link to="/algarve" className="hover:text-ink transition-colors">Algarve</Link>
          <Link to="/porto" className="hover:text-ink transition-colors">Porto</Link>
          <Link to="/lisbon" className="hover:text-ink transition-colors">Lisbon</Link>
          <Link
            to="/#lead-form"
            className="bg-brand-coral text-on-brand px-4 py-2 rounded-full text-sm font-medium hover:bg-brand-coral-active transition-colors min-h-[48px] flex items-center"
          >
            Get matched
          </Link>
        </nav>
        <button className="md:hidden p-2 text-ink" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-canvas border-t border-hairline px-6 py-4 flex flex-col gap-4">
          <Link to="/algarve" className="text-sm font-medium text-body hover:text-ink" onClick={() => setOpen(false)}>
            Algarve
          </Link>
          <Link to="/porto" className="text-sm font-medium text-body hover:text-ink" onClick={() => setOpen(false)}>
            Porto
          </Link>
          <Link to="/lisbon" className="text-sm font-medium text-body hover:text-ink" onClick={() => setOpen(false)}>
            Lisbon
          </Link>
          <Link
            to="/#lead-form"
            className="bg-brand-coral text-on-brand font-medium px-5 py-3 rounded-full text-sm text-center hover:bg-brand-coral-active transition-colors"
            onClick={() => setOpen(false)}
          >
            Get matched
          </Link>
        </div>
      )}
    </header>
  )
}
