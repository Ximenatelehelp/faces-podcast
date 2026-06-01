/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'black-deep': '#0A0A0A',
        'black-rich': '#111111',
        'charcoal': '#1A1A1A',
        'charcoal-light': '#232323',
        'gold': '#CD7F32',
        'gold-light': '#D4AF5A',
        'gold-pale': '#E8D5A3',
        'beige': '#F0E6D0',
        'cream': '#FAF5EC',
        'gray-warm': '#8A8580',
        'gray-muted': '#5A5550',
      },
      fontFamily: {
        'display': ['var(--font-display)', 'Georgia', 'serif'],
        'body': ['var(--font-body)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'ultra': '0.25em',
        'wide-xl': '0.15em',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}
