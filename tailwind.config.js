/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'monoton': ['Monoton', 'cursive'],
      'notable': ['Notable', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}

