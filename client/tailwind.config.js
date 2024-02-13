/** @type {import('tailwindcss').Config} */

// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow:{
        'background':'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px'
      }
    },
  },
  plugins: [],
}

