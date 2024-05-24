/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily:{
        blackhan:["Black Han Sans", "sans-serif"],
        manrope:["Manrope", "sans-serif"]
      }
    },
  },
  plugins: [],
}

