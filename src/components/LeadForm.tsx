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

// DS v1.0 — inputs: radius-sm (12px), border-ds-strong, accent focus ring via .ds-focus
const inputClass =
  'w-full bg-white border border-ds-border-strong rounded-ds-sm px-4 h-14 text-ds-body text-ink-900 placeholder:text-ink-400 focus:outline-none ds-focus transition-colors duration-[0.18s]'

const selectClass =
  'w-full bg-white border border-ds-border-strong rounded-ds-sm px-4 h-14 text-ds-body text-ink-900 appearance-none focus:outline-none ds-focus transition-colors duration-[0.18s] cursor-pointer'

// Labels: 11px, uppercase, weight-700, ink-500 (4.83:1 — AA ✓)
const labelClass = 'text-ds-label uppercase text-ink-500'

// Errors: --ds-danger (#DC2626, 4.53:1 — AA ✓)
const errorClass = 'text-sm text-ds-danger mt-1'

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
      <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-ink-400 pointer-events-none" />
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

      if (typeof window !== 'undefined' && (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag) {
        ;(window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', 'lead_submitted', {
          event_category: 'lead',
          event_label: 'property_manager_match',
          region: values.region,
          property_type: values.propertyType,
          bedrooms: values.bedrooms || 'not_specified',
          value: 1,
        })
      }

      navigate('/thank-you')
    } catch {
      setSubmitError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
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

      <div className="grid grid-cols-2 gap-3">
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
              <option value="">Region</option>
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
              <option value="">Type</option>
              <option value="Apartment">Apartment</option>
              <option value="Villa">Villa</option>
              <option value="Farm/Quinta">Farm / Quinta</option>
              <option value="Other">Other</option>
            </select>
          </SelectWrapper>
          {errors.propertyType && <span className={errorClass} role="alert">{errors.propertyType}</span>}
        </div>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="bedrooms" className={labelClass}>Bedrooms</label>
        <SelectWrapper>
          <select
            id="bedrooms"
            name="bedrooms"
            value={values.bedrooms}
            onChange={set('bedrooms')}
            className={selectClass}
            aria-label="Select number of bedrooms"
          >
            <option value="">Bedrooms (optional)</option>
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
          className="w-full bg-white border border-ds-border-strong rounded-ds-sm px-4 py-3 text-ds-body text-ink-900 placeholder:text-ink-400 resize-none focus:outline-none ds-focus transition-colors duration-[0.18s]"
        />
        <span className="text-xs text-ink-400 text-right">{values.notes.length}/500</span>
      </div>

      {submitError && <span className={errorClass} role="alert">{submitError}</span>}

      <button
        type="submit"
        disabled={loading}
        className="w-full text-white text-ds-body font-semibold px-6 py-3.5 rounded-ds-md min-h-[52px] transition-all duration-[0.18s] flex items-center justify-center gap-2 ds-focus disabled:opacity-50 disabled:cursor-not-allowed"
        style={{ background: 'var(--accent-ui)' }}
        onMouseEnter={e => { if (!loading) e.currentTarget.style.background = '#e6314e' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'var(--accent-ui)' }}
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
