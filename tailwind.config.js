/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'center': '-50%'
      }
    },
    container: {
      center: true
    }
  },
  plugins: [],
}

