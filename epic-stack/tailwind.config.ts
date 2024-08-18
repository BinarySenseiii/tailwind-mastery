import type { Config } from 'tailwindcss'
import easing from 'open-props/src/props.easing.js'

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
      keyframes: {
        'slide-top': {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-left': {
          from: { opacity: '0', transform: 'translateX(20px)' },
          to: { opacity: '1', transform: 'translateX(0)' },
        },
        'roll-reveal': {
          from: { opacity: '0', transform: 'rotate(12deg) scale(0)' },
          to: { opacity: '1', transform: 'rotate(0deg) scale(1)' },
        },
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
      animation: {
        'slide-top': 'slide-top 0.3s ease-out backwards',
        'slide-left': 'slide-left 0.3s ease-out backwards',
        'fade-in': 'fade-in 0.4s ease-out backwards',
        'roll-reveal': `roll-reveal 0.4s ${easing['--ease-spring-2']} backwards`,
      },
    },
  },
  plugins: [],
}
export default config
