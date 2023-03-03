/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
    

      colors: {
        10: "#FFFFFF",
        20: "#7FCBCD",
        30: "#00979D",
        40: "#00676B",
        50: "#F1C40F",
        60: "#F39C12",
        70: "#F26727",
        80: "#0E0E0E",
      },

      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};