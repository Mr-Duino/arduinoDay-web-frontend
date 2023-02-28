/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        1: "#FFFFFF",
        2: "#7FCBCD",
        3: "#00979D",
        4: "#00676B",
        5: "#F1C40F",
        6: "#F39C12",
        7: "#F26727",
        8: "#0E0E0E",
      }
    },
  },
  plugins: [],
}