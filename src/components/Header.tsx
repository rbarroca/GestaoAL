import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="font-display text-xl font-semibold text-green-900">
            AL Manager
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/algarve" className="text-sm font-medium text-gray-700 hover:text-green-800 transition-colors">
              Algarve
            </Link>
            <Link
              to="/#form"
              className="bg-amber-500 hover:bg-amber-600 text-white font-medium px-5 py-2 rounded-lg text-sm transition-colors duration-200"
            >
              Find a Manager
            </Link>
          </nav>
          <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 flex flex-col gap-4">
          <Link to="/algarve" className="text-sm font-medium text-gray-700" onClick={() => setOpen(false)}>
            Algarve
          </Link>
          <Link
            to="/#form"
            className="bg-amber-500 text-white font-medium px-5 py-2 rounded-lg text-sm text-center"
            onClick={() => setOpen(false)}
          >
            Find a Manager
          </Link>
        </div>
      )}
    </header>
  )
}
