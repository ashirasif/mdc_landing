/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        secondary: '#15151599',
        borderColor: '#2E2C2C',
        
      },
      fontFamily:{
        inter: 'inter'
      },
      boxShadow: {
        heroBtn: '0px 0px 20px 5px rgba(366, 366, 366, 0.3)',
      },
      animation: {
        circulate: 'circulate 4s linear infinite',  // New animation for circulating glow
      },
      keyframes: {
        circulate: {
          '0%': { 'box-shadow': '0 0 2px white, inset 0 0 2px white' },
          '25%': { 'box-shadow': '2px 0 5px white, inset 2px 0 5px white' },
          '50%': { 'box-shadow': '0 2px 5px white, inset 0 2px 5px white' },
          '75%': { 'box-shadow': '-2px 0 5px white, inset -2px 0 5px white' },
          '100%': { 'box-shadow': '0 -2px 2px white, inset 0 -2px 2px white' },
        },
      },
    },
  },
  plugins: [],
}

