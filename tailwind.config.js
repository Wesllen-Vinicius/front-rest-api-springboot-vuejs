/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms"), require("flowbite/plugin")],
  screens: {
    sm: "480px",
    md: "768px",
    lg: "976px",
    xl: "1440px",
  },
  colors: {
    gray: colors.Gray,
    blue: colors.sky,
    red: colors.rose,
    pink: colors.fuchsia,
  },
  fontFamily: {
    sans: ["Graphik", "sans-serif"],
    serif: ["Merriweather", "serif"],
  },
  extend: {
    spacing: {
      128: "32rem",
      144: "36rem",
    },
    borderRadius: {
      "4xl": "2rem",
    },
  },
};
