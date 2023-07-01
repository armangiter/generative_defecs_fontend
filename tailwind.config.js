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
        'secondary': '#F1F5F9',
        'active': '#F1F5F9',
        'btn': '#475569'
      },
      colors: {
        'border': '#E2E8F0',
        'active': '#0F172A',
        'inactive': '#64748BFF'
      }
    },
  },
  plugins: [],
}