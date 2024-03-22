/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#178AF0',
        secondary: '#3E4E50',
        tertiary: '#e8f3fe'
      },
      boxShadow: {
        custom: '2px 2px 4px 1px #D8DCDC',
      }
    },
  },
  plugins: [],
}
