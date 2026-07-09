import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // ── legacy tokens (keep for untouched components) ──────────────────
        'brand-coral':          '#e84c4c',
        'brand-coral-active':   '#cc3535',
        'brand-coral-disabled': '#f5b8b8',
        'ink':                  '#222222',
        'body':                 '#3f3f3f',
        'muted':                '#595959',
        'muted-soft':           '#767676',
        'canvas':               '#ffffff',
        'surface-soft':         '#f7f7f7',
        'surface-card':         '#ffffff',
        'surface-strong':       '#f2f2f2',
        'hairline':             '#dddddd',
        'hairline-soft':        '#ebebeb',
        'border-strong':        '#c1c1c1',
        'on-brand':             '#ffffff',
        'legal-link':           '#428bff',
        'error':                '#c13515',
        'error-hover':          '#b32505',
        // ── Design System AL v1.0 ───────────────────────────────────────────
        // Ink neutrals
        'ink-900': '#1c1c1e',
        'ink-700': '#48484a',
        'ink-500': '#6b7280',
        'ink-400': '#8a8a8e',
        'ink-300': '#a8a8a8',
        'ink-200': '#c4c4c4',
        // Surfaces
        'surface-page':   '#ffffff',
        'surface-subtle': '#fafafa',
        'surface-ink':    '#1c1c1e',
        // Borders (DS)
        'ds-border-strong':  '#e2e2e2',
        'ds-border-default': '#ededed',
        'ds-border-soft':    '#ececec',
        'ds-border-faint':   '#efefef',
        // Accent — consumed from CSS vars set by [data-site] selector
        'accent-ui':   'var(--accent-ui)',
        'accent-text': 'var(--accent-text)',
        // Semantic
        'ds-success': '#0B7568',
        'ds-warning': '#B45309',
        'ds-danger':  '#DC2626',
        'ds-info':    '#1D4ED8',
      },
      fontFamily: {
        sans: ['Figtree', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        // legacy
        'display-xl': ['28px', { lineHeight: '1.43', fontWeight: '700' }],
        'display-lg': ['22px', { lineHeight: '1.18', fontWeight: '600', letterSpacing: '-0.44px' }],
        'display-md': ['21px', { lineHeight: '1.43', fontWeight: '700' }],
        'display-sm': ['20px', { lineHeight: '1.20', fontWeight: '600' }],
        // DS v1.0 — fixed sizes (clamp applied via inline style where needed)
        'ds-h3':     ['1.1875rem', { lineHeight: '1.35', fontWeight: '700', letterSpacing: '-0.01em' }],
        'ds-lead':   ['1.1875rem', { lineHeight: '1.5' }],
        'ds-body':   ['1.0625rem', { lineHeight: '1.55' }],
        'ds-base':   ['0.9375rem', { lineHeight: '1.55' }],
        'ds-label':  ['0.6875rem', { lineHeight: '1.4', fontWeight: '700', letterSpacing: '0.08em' }],
        'ds-eyebrow':['0.75rem',   { lineHeight: '1.4', fontWeight: '700', letterSpacing: '0.14em' }],
      },
      boxShadow: {
        // legacy
        'card': 'rgba(0,0,0,0.02) 0 0 0 1px, rgba(0,0,0,0.04) 0 2px 6px 0, rgba(0,0,0,0.10) 0 4px 8px 0',
        // DS v1.0
        'ds-card':  '0 18px 40px rgba(0,0,0,0.10)',
        'ds-float': '0 30px 70px rgba(0,0,0,0.30)',
        'ds-nav':   '0 8px 30px rgba(0,0,0,0.14)',
      },
      borderRadius: {
        'pill':    '999px',
        'ds-sm':   '12px',
        'ds-md':   '14px',
        'ds-lg':   '20px',
        'ds-xl':   '24px',
      },
    },
  },
  plugins: [],
} satisfies Config
