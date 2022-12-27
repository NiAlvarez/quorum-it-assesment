/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'quorum-purple' : '#A075D3',
        'quorum-pink' : '#E6518A'
      }
    },
  },
  plugins: [],
}
