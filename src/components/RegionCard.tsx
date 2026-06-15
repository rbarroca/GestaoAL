import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface RegionCardProps {
  name: string
  description: string
  href: string
  available: boolean
}

export default function RegionCard({ name, description, href, available }: RegionCardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm flex flex-col">
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-display text-lg font-medium text-gray-900">{name}</h3>
        {!available && (
          <span className="text-xs font-medium bg-gray-100 text-gray-500 px-2 py-1 rounded-full ml-2 whitespace-nowrap">
            Coming soon
          </span>
        )}
      </div>
      <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-4">{description}</p>
      {available ? (
        <Link
          to={href}
          className="inline-flex items-center gap-2 text-sm font-medium text-green-800 hover:text-green-600 transition-colors"
        >
          Find a manager in {name}
          <ArrowRight size={16} />
        </Link>
      ) : (
        <span className="inline-flex items-center gap-2 text-sm font-medium text-gray-400 cursor-not-allowed">
          Find a manager in {name}
          <ArrowRight size={16} />
        </span>
      )}
    </div>
  )
}
