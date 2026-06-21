import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
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
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'system-ui', 'Roboto', 'Helvetica Neue', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['28px', { lineHeight: '1.43', fontWeight: '700' }],
        'display-lg': ['22px', { lineHeight: '1.18', fontWeight: '600', letterSpacing: '-0.44px' }],
        'display-md': ['21px', { lineHeight: '1.43', fontWeight: '700' }],
        'display-sm': ['20px', { lineHeight: '1.20', fontWeight: '600' }],
      },
      boxShadow: {
        'card': 'rgba(0,0,0,0.02) 0 0 0 1px, rgba(0,0,0,0.04) 0 2px 6px 0, rgba(0,0,0,0.10) 0 4px 8px 0',
      },
      borderRadius: {
        'pill': '9999px',
      },
    },
  },
  plugins: [],
} satisfies Config
