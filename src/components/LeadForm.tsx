import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Loader2 } from 'lucide-react'

interface FormValues {
  name: string
  email: string
  region: string
  propertyType: string
  bedrooms: string
  notes: string
}

interface FormErrors {
  name?: string
  email?: string
  region?: string
  propertyType?: string
}

interface LeadFormProps {
  defaultRegion?: string
}

const inputClass = 'w-full border border-gray-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent'
const errorClass = 'text-sm text-red-600 mt-1'

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {}
  if (!values.name || values.name.trim().length < 2) errors.name = 'Please enter your full name.'
  if (!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = 'Please enter a valid email address.'
  if (!values.region) errors.region = 'Please select a region.'
  if (!values.propertyType) errors.propertyType = 'Please select a property type.'
  return errors
}

export default function LeadForm({ defaultRegion = '' }: LeadFormProps) {
  const navigate = useNavigate()
  const [values, setValues] = useState<FormValues>({
    name: '',
    email: '',
    region: defaultRegion,
    propertyType: '',
    bedrooms: '',
    notes: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [loading, setLoading] = useState(false)
  const [submitError, setSubmitError] = useState('')

  const set = (field: keyof FormValues) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setValues((v) => ({ ...v, [field]: e.target.value }))

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const errs = validate(values)
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    setErrors({})
    setLoading(true)
    setSubmitError('')

    const formData = new FormData()
    formData.append('form-name', 'property-manager-lead')
    formData.append('name', values.name)
    formData.append('email', values.email)
    formData.append('region', values.region)
    formData.append('property_type', values.propertyType)
    formData.append('bedrooms', values.bedrooms)
    formData.append('notes', values.notes)

    try {
      await fetch('/', { method: 'POST', body: formData })
      navigate('/thank-you')
    } catch {
      setSubmitError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4" id="form">
      <input type="hidden" name="bot-field" />
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Full name *</label>
        <input type="text" name="name" placeholder="Your name" value={values.name} onChange={set('name')} className={inputClass} />
        {errors.name && <p className={errorClass}>{errors.name}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
        <input type="email" name="email" placeholder="your@email.com" value={values.email} onChange={set('email')} className={inputClass} />
        {errors.email && <p className={errorClass}>{errors.email}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Region *</label>
        <select name="region" value={values.region} onChange={set('region')} className={inputClass}>
          <option value="">Select a region</option>
          <option value="Algarve">Algarve</option>
          <option value="Lisbon">Lisbon</option>
          <option value="Porto">Porto</option>
          <option value="Other">Other</option>
        </select>
        {errors.region && <p className={errorClass}>{errors.region}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Property type *</label>
        <select name="property_type" value={values.propertyType} onChange={set('propertyType')} className={inputClass}>
          <option value="">Select property type</option>
          <option value="Apartment">Apartment</option>
          <option value="Villa">Villa</option>
          <option value="Farm/Quinta">Farm / Quinta</option>
          <option value="Other">Other</option>
        </select>
        {errors.propertyType && <p className={errorClass}>{errors.propertyType}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Number of bedrooms</label>
        <select name="bedrooms" value={values.bedrooms} onChange={set('bedrooms')} className={inputClass}>
          <option value="">Select (optional)</option>
          <option value="Studio">Studio</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4+">4+</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Additional notes</label>
        <textarea
          name="notes"
          placeholder="Anything else we should know?"
          value={values.notes}
          onChange={set('notes')}
          maxLength={500}
          rows={3}
          className={inputClass}
        />
        <p className="text-xs text-gray-400 mt-1">{values.notes.length}/500</p>
      </div>
      {submitError && <p className="text-sm text-red-600">{submitError}</p>}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-amber-500 hover:bg-amber-600 disabled:opacity-60 text-white font-medium px-6 py-3 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Sending...
          </>
        ) : (
          'Find my property manager →'
        )}
      </button>
    </form>
  )
}
