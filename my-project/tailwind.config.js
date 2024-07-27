/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        play:["Playwrite NZ", "cursive"],
        kalam:["Kalam", "cursive"]
      },

      screens:{
        "sm":"320px"
      },

      lineHeight:{
        mid:"60px"
      }
    },
  },
  plugins: [],
}

