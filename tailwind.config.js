/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'primary': '#1F2937',
        'dark-100': '#111827',
        'dark-200': '#374151',
        'dark-300': '#2F3949',
        'dark-400': '#353F4F',
        'light-100': '#FFFFFF',
      },
      colors: {
        'primary': '#D1D5DB',
        'light-100': '#FFFFFF',
        'light-200': '#9CA3AF',
        'light-300': '#A5ACBA',
        'light-400': '#6B7280',
        'light-500': '#434B57',
        'light-600': '#F9F9F9',
        'dark-100': '#1F2937',
        'dark-200': '#374151',
        'green-100': '#22C55E',
        'red-100': '#EF4444',
      }
    },
  },
  plugins: [],
}