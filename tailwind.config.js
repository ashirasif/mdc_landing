/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        inter: 'inter'
      },
      boxShadow: {
        heroBtn: '0px 0px 20px 5px rgba(366, 366, 366, 0.3)',
      }
    },
  },
  plugins: [],
}

