import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: '#7C1A24',
          light: '#A02535',
          dark: '#5A1018',
        },
        gold: {
          DEFAULT: '#C9913A',
          light: '#E8C070',
          dark: '#9A6B20',
        },
        amber: {
          wed: '#C47832',
          light: '#E8A850',
        },
        cream: {
          DEFAULT: '#FAF3E8',
          dark: '#F0E5D0',
        },
        forest: {
          DEFAULT: '#1C0A06',
          mid: '#3C1C0C',
        },
      },
      fontFamily: {
        cormorant: ['var(--font-cormorant)', 'Georgia', 'serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
        script: ['var(--font-script)', 'cursive'],
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease-out forwards',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
