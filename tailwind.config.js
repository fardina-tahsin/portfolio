/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: '#4D694E',
        'forest-light': '#69916a',
        cream: '#EEDEC5',
        gold: '#C9A84C',
        purple: '#7B2D8B',
        'bg-primary': '#0D1A0E',
      },
      fontFamily: {
        heading: ['"Bookman Old Style"', '"Libre Baskerville"', 'Bookman', 'Garamond', 'serif'],
        serif: ['Georgia', 'Lora', 'serif'],
      },
    },
  },
  plugins: [],
}
