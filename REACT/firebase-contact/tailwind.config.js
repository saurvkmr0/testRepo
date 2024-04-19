/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: '#323334',
        red: '#D01C28',
        purple: '#5F00D9',
        cream: '#FFEAAE',

      }
    },
  },
  plugins: [],
}