/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#7B2D8B',
      },
      fontFamily: {
        heading: ['"Bookman Old Style"', 'Bookman', 'Garamond', 'serif'],
        serif: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
