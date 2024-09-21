/** @type {import('tailwindcss').Config} */
import tailwindScrollPlugin from 'tailwind-scrollbar'

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {},
  },
  plugins: [tailwindScrollPlugin],
}
