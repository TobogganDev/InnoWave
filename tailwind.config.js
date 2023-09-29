/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'custom-black': '#313235',
      'custom-purple': '#7E49F2',
      'custom-light-purple': '#A36BF2',
      'custom-pink': '#EAACF2',
      'custom-light-pink': '#F1C4F2',
    },
    fontFamily: {
      'monoton': ['Monoton', 'cursive'],
      'notable': ['Notable', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
    },
  },
  plugins: [],
}

