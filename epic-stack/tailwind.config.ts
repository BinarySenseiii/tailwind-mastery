import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      screens: {
        sm: '520px',
        lg: '976px',
      },
      colors: {
        highlight: '#6202FF',
      },
      fontSize: {
        '4.5xl': ['2.625rem', '1.15'],
        '5.5xl': ['3.375rem', '1'],
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
    },
  },
  plugins: [],
}
export default config
