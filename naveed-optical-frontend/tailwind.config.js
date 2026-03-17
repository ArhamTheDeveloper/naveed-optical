/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          light: '#004d99',
          DEFAULT: '#003366',
          dark: '#001a33',
        },
        gold: {
          light: '#dfc274',
          DEFAULT: '#C9A84C',
          dark: '#a38435',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
