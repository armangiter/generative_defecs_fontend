/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#FFF',
        'active': '#F1F5F9',
        'btn': '#475569',
        'svg': '#E2E8F0',
        'dark-100': '#64748B',
        'dark-200': '#D7DDE4',
        'dark-300': '#E0E6EF',
        'yellow-100': '#FCF3D3',
      },
      colors: {
        'border': '#E2E8F0',
        'active': '#0F172A',
        'inactive': '#64748BFF',
        'light-100': '#64748B',
        'light-200': '#6B7280',
        'light-300': '#CBD5E1',
        'dark-100': '#111827',
        'red-100': '#EF4444',
        'verify': '#219653',
        'yellow-100': '#DC7700'
      }
    },
  },
  plugins: [],
}