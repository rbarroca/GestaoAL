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
        className="flex items-center gap-1 text-sm font-medium text-ink-700 hover:text-ink-900 transition-colors duration-[0.18s] ds-focus rounded"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {label}
        <ChevronDown size={14} className={`transition-transform duration-150 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div
          className="absolute top-full left-0 mt-2 w-56 bg-white border border-ds-border-soft rounded-ds-lg py-2 z-50"
          style={{ boxShadow: 'var(--shadow-nav)' }}
        >
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
    // Nav: glass blur + shadow. If PageSpeed mobile drops below 90, replace with
    // solid bg-[rgba(255,255,255,0.92)] and remove the backdrop-blur-[14px] class.
    <header
      className="sticky top-0 z-50 border-b border-ds-border-default backdrop-blur-[14px]"
      style={{ background: 'rgba(255,255,255,0.86)', boxShadow: 'var(--shadow-nav)' }}
    >
      <div className="max-w-[1100px] mx-auto px-5 lg:px-10 h-20 flex items-center justify-between">
        <Link
          to="/"
          className="text-[1.1875rem] font-bold text-ink-900 tracking-tight ds-focus rounded"
        >
          findamanager<span style={{ color: 'var(--accent-ui)' }}>al</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Dropdown label="Regions">
            {regions.map((r) => (
              <Link
                key={r.href}
                to={r.href}
                className="block px-4 py-2 text-sm text-ink-700 hover:text-ink-900 transition-colors duration-[0.18s]"
              >
                {r.label}
              </Link>
            ))}
            <div className="my-2 border-t border-ds-border-faint" />
            {regionsComingSoon.map((name) => (
              <div key={name} className="flex items-center justify-between px-4 py-2">
                <span className="text-sm text-ink-500 cursor-default">{name}</span>
                <span className="text-[11px] font-semibold text-ink-400 bg-surface-subtle px-2 py-0.5 rounded-full">
                  Soon
                </span>
              </div>
            ))}
          </Dropdown>

          <Dropdown label="Resources">
            <Link
              to="/blog"
              className="block px-4 py-2 text-sm text-ink-700 hover:text-ink-900 transition-colors duration-[0.18s]"
            >
              Blog & Guides
            </Link>
            {resources.map((r) => (
              <a
                key={r.href}
                href={r.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2 text-sm text-ink-700 hover:text-ink-900 transition-colors duration-[0.18s]"
              >
                {r.label}
              </a>
            ))}
          </Dropdown>

          <Link
            to="/#lead-form"
            className="text-sm font-semibold text-white px-5 py-2.5 rounded-pill min-h-[44px] flex items-center transition-all duration-[0.18s] ds-focus"
            style={{ background: 'var(--accent-ui)' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#e6314e')}
            onMouseLeave={e => (e.currentTarget.style.background = 'var(--accent-ui)')}
          >
            Get matched
          </Link>
        </nav>

        <button
          className="md:hidden p-2 text-ink-900 ds-focus rounded"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-ds-border-default px-5 py-4 flex flex-col gap-1">
          <button
            className="flex items-center justify-between w-full py-2 text-sm font-medium text-ink-700"
            onClick={() => setMobileRegions(!mobileRegions)}
          >
            Regions
            <ChevronDown size={14} className={`transition-transform duration-150 ${mobileRegions ? 'rotate-180' : ''}`} />
          </button>
          {mobileRegions && (
            <div className="pl-3 flex flex-col gap-1 mb-1">
              {regions.map((r) => (
                <Link key={r.href} to={r.href} className="py-1.5 text-sm text-ink-700" onClick={() => setOpen(false)}>
                  {r.label}
                </Link>
              ))}
              {regionsComingSoon.map((name) => (
                <div key={name} className="flex items-center justify-between py-1.5">
                  <span className="text-sm text-ink-500">{name}</span>
                  <span className="text-[11px] text-ink-400">Soon</span>
                </div>
              ))}
            </div>
          )}

          <button
            className="flex items-center justify-between w-full py-2 text-sm font-medium text-ink-700"
            onClick={() => setMobileResources(!mobileResources)}
          >
            Resources
            <ChevronDown size={14} className={`transition-transform duration-150 ${mobileResources ? 'rotate-180' : ''}`} />
          </button>
          {mobileResources && (
            <div className="pl-3 flex flex-col gap-1 mb-1">
              <Link to="/blog" className="py-1.5 text-sm text-ink-700" onClick={() => setOpen(false)}>
                Blog & Guides
              </Link>
              {resources.map((r) => (
                <a
                  key={r.href}
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-1.5 text-sm text-ink-700"
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
              className="block text-sm font-semibold text-white font-medium px-5 py-3 rounded-pill text-center transition-colors duration-[0.18s]"
              style={{ background: 'var(--accent-ui)' }}
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
