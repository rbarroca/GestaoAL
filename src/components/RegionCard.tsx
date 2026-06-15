import { Link } from 'react-router-dom'
import { MapPin } from 'lucide-react'

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
        <div className="flex items-center gap-2">
          <MapPin size={18} className="text-green-800 flex-shrink-0" />
          <h3 className="font-display text-lg font-medium text-gray-900">{name}</h3>
        </div>
        {!available && (
          <span className="text-xs font-medium bg-gray-100 text-gray-500 px-2 py-1 rounded-full whitespace-nowrap">
            Coming soon
          </span>
        )}
      </div>
      <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{description}</p>
      {available ? (
        <Link
          to={href}
          className="inline-block text-sm font-medium text-green-800 hover:text-green-700 transition-colors"
        >
          Find a manager in {name} →
        </Link>
      ) : (
        <span className="text-sm text-gray-400 cursor-not-allowed">Not yet available</span>
      )}
    </div>
  )
}
