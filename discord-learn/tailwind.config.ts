/** @type {import('tailwindcss').Config} */
import tailwindScrollPlugin from 'tailwind-scrollbar'

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: '#5865F2',
        grey: {
          500: '#1E1F22',
          400: '#2B2D31',
          300: '#313338',
          200: '#DCDDDE',
        },
      },
    },
  },
  plugins: [tailwindScrollPlugin],
}
