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
        'dark-100': '#FFEDD5',
        'dark-200': '#FFFFFF',
        'dark-300': '#2F3949',
        'dark-400': '#FFFFFF',
        'dark-500': '#3F4959',
        'dark-600': '#F3F4F6',
        'light-100': '#FFFFFF',
      },
      colors: {
        'primary': '#374151',
        'light-100': '#2C2E36',
        'light-200': '#9CA3AF',
        'light-300': '#A5ACBA',
        'light-400': '#6B7280',
        'light-500': '#434B57',
        'light-600': '#2C2E36',
        'light-700': '#F97316',
        'light-800': '#FEF08A',
        'dark-100': '#1F2937',
        'dark-200': '#FFFFFF',
        'dark-300': '#2C2E36',
        'dark-400': '#E2E8F0',
        'green-100': '#22C55E',
        'red-100': '#EF4444',
      }
    },
  },
  plugins: [],
}