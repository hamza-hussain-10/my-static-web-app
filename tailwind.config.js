/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "funnel":["Funnel Display", "sans-serif"],
        "roboto":["Roboto", "sans-serif"],
        "poppins":["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}

