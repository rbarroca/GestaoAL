import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

const regions = [
  { label: 'Algarve', href: '/algarve' },
  { label: 'Lisbon', href: '/lisbon' },
  { label: 'Porto', href: '/porto' },
]

const regionsComingSoon = ['Alentejo', 'Madeira', 'Açores']

const resources = [
  { label: 'AL Revenue Calculator', href: 'https://calculadoraal.pt' },
  { label: 'AL Complete Guide', href: 'https://tudosobrealojamentolocal.pt' },
]

interface DropdownProps {
  label: string
  children: React.ReactNode
}

function Dropdown({ label, children }: DropdownProps) {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div className="relative" ref={ref}>
      <button
        className="flex items-center gap-1 text-sm font-medium text-body hover:text-ink transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {label}
        <ChevronDown size={14} className={`transition-transform duration-150 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 mt-2 w-56 bg-canvas border border-hairline rounded-xl shadow-card py-2 z-50">
          {children}
        </div>
      )}
    </div>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [mobileRegions, setMobileRegions] = useState(false)
  const [mobileResources, setMobileResources] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-canvas border-b border-hairline">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-[21px] font-bold text-ink tracking-tight">
          findamanager<span className="text-brand-coral">al</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Dropdown label="Regions">
            {regions.map((r) => (
              <Link
                key={r.href}
                to={r.href}
                className="block px-4 py-2 text-sm text-ink hover:text-brand-coral transition-colors"
              >
                {r.label}
              </Link>
            ))}
            <div className="my-2 border-t border-hairline-soft" />
            {regionsComingSoon.map((name) => (
              <div key={name} className="flex items-center justify-between px-4 py-2">
                <span className="text-sm text-muted cursor-default">{name}</span>
                <span className="text-[11px] font-semibold text-muted-soft bg-surface-strong px-2 py-0.5 rounded-full">
                  Soon
                </span>
              </div>
            ))}
          </Dropdown>

          <Dropdown label="Resources">
            {resources.map((r) => (
              <a
                key={r.href}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-sm text-ink hover:text-brand-coral transition-colors"
              >
                {r.label}
              </a>
            ))}
          </Dropdown>

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
        <div className="md:hidden bg-canvas border-t border-hairline px-6 py-4 flex flex-col gap-1">
          <button
            className="flex items-center justify-between w-full py-2 text-sm font-medium text-body"
            onClick={() => setMobileRegions(!mobileRegions)}
          >
            Regions
            <ChevronDown size={14} className={`transition-transform duration-150 ${mobileRegions ? 'rotate-180' : ''}`} />
          </button>
          {mobileRegions && (
            <div className="pl-3 flex flex-col gap-1 mb-1">
              {regions.map((r) => (
                <Link key={r.href} to={r.href} className="py-1.5 text-sm text-ink" onClick={() => setOpen(false)}>
                  {r.label}
                </Link>
              ))}
              {regionsComingSoon.map((name) => (
                <div key={name} className="flex items-center justify-between py-1.5">
                  <span className="text-sm text-muted">{name}</span>
                  <span className="text-[11px] text-muted-soft">Soon</span>
                </div>
              ))}
            </div>
          )}

          <button
            className="flex items-center justify-between w-full py-2 text-sm font-medium text-body"
            onClick={() => setMobileResources(!mobileResources)}
          >
            Resources
            <ChevronDown size={14} className={`transition-transform duration-150 ${mobileResources ? 'rotate-180' : ''}`} />
          </button>
          {mobileResources && (
            <div className="pl-3 flex flex-col gap-1 mb-1">
              {resources.map((r) => (
                <a
                  key={r.href}
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1.5 text-sm text-ink"
                  onClick={() => setOpen(false)}
                >
                  {r.label}
                </a>
              ))}
            </div>
          )}

          <div className="pt-2">
            <Link
              to="/#lead-form"
              className="block bg-brand-coral text-on-brand font-medium px-5 py-3 rounded-full text-sm text-center hover:bg-brand-coral-active transition-colors"
              onClick={() => setOpen(false)}
            >
              Get matched
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
