/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "light-bg": "url('/new white backdrop.jpeg')"
      }
    },
  },
  plugins: [],
}
