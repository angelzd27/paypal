/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paypal: {
          100: "#ffffff",
          200: "#faf8f5",
          300: "#d1f1ff",
          400: "#0070e0",
          500: "#27419a",
          600: "#142c8e",
          700: "#003087"
        }
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}