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
        'dark-100': '#64748B'
      },
      colors: {
        'border': '#E2E8F0',
        'active': '#0F172A',
        'inactive': '#64748BFF',
        'light-100': '#64748B'
      }
    },
  },
  plugins: [],
}