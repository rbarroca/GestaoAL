import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Loader2, ChevronDown } from 'lucide-react'

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

const inputClass =
  'w-full bg-canvas border border-hairline rounded-lg px-4 h-14 text-base text-ink placeholder:text-muted focus:outline-none focus:border-2 focus:border-ink transition-colors duration-150'

const selectClass =
  'w-full bg-canvas border border-hairline rounded-lg px-4 h-14 text-base text-ink appearance-none focus:outline-none focus:border-2 focus:border-ink transition-colors duration-150 cursor-pointer'

const errorClass = 'text-sm text-error mt-1'

const labelClass = 'text-xs font-medium text-muted uppercase tracking-wide'

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {}
  if (!values.name || values.name.trim().length < 2) errors.name = 'Please enter your full name.'
  if (!values.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    errors.email = 'Please enter a valid email address.'
  if (!values.region) errors.region = 'Please select a region.'
  if (!values.propertyType) errors.propertyType = 'Please select a property type.'
  return errors
}

function SelectWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {children}
      <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted pointer-events-none" />
    </div>
  )
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

  const set =
    (field: keyof FormValues) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
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
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <input type="hidden" name="bot-field" />

      <div className="flex flex-col gap-1">
        <label htmlFor="name" className={labelClass}>Full name *</label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder="Your name"
          value={values.name}
          onChange={set('name')}
          className={inputClass}
          aria-required="true"
        />
        {errors.name && <span className={errorClass} role="alert">{errors.name}</span>}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className={labelClass}>Email *</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="your@email.com"
          value={values.email}
          onChange={set('email')}
          className={inputClass}
          aria-required="true"
        />
        {errors.email && <span className={errorClass} role="alert">{errors.email}</span>}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="region" className={labelClass}>Region *</label>
        <SelectWrapper>
          <select
            id="region"
            name="region"
            value={values.region}
            onChange={set('region')}
            className={selectClass}
            aria-required="true"
            aria-label="Select your property region"
          >
            <option value="">Select a region</option>
            <option value="Algarve">Algarve</option>
            <option value="Lisbon">Lisbon</option>
            <option value="Porto">Porto</option>
            <option value="Other">Other</option>
          </select>
        </SelectWrapper>
        {errors.region && <span className={errorClass} role="alert">{errors.region}</span>}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="property_type" className={labelClass}>Property type *</label>
        <SelectWrapper>
          <select
            id="property_type"
            name="property_type"
            value={values.propertyType}
            onChange={set('propertyType')}
            className={selectClass}
            aria-required="true"
            aria-label="Select your property type"
          >
            <option value="">Select property type</option>
            <option value="Apartment">Apartment</option>
            <option value="Villa">Villa</option>
            <option value="Farm/Quinta">Farm / Quinta</option>
            <option value="Other">Other</option>
          </select>
        </SelectWrapper>
        {errors.propertyType && <span className={errorClass} role="alert">{errors.propertyType}</span>}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="bedrooms" className={labelClass}>Number of bedrooms</label>
        <SelectWrapper>
          <select
            id="bedrooms"
            name="bedrooms"
            value={values.bedrooms}
            onChange={set('bedrooms')}
            className={selectClass}
            aria-label="Select number of bedrooms"
          >
            <option value="">Select (optional)</option>
            <option value="Studio">Studio</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4+">4+</option>
          </select>
        </SelectWrapper>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="notes" className={labelClass}>Additional notes</label>
        <textarea
          id="notes"
          name="notes"
          placeholder="Anything else we should know?"
          value={values.notes}
          onChange={set('notes')}
          maxLength={500}
          rows={3}
          className="w-full bg-canvas border border-hairline rounded-lg px-4 py-3 text-base text-ink placeholder:text-muted resize-none focus:outline-none focus:border-2 focus:border-ink transition-colors duration-150"
        />
        <span className="text-xs text-muted-soft text-right">{values.notes.length}/500</span>
      </div>

      {submitError && <span className={errorClass} role="alert">{submitError}</span>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-brand-coral hover:bg-brand-coral-active disabled:bg-brand-coral-disabled disabled:cursor-not-allowed text-on-brand text-base font-medium px-6 py-3 rounded-full min-h-[48px] transition-colors duration-150 flex items-center justify-center gap-2"
      >
        {loading ? (
          <>
            <Loader2 size={18} className="animate-spin" aria-hidden="true" />
            Sending...
          </>
        ) : (
          'Find my property manager →'
        )}
      </button>
    </form>
  )
}
