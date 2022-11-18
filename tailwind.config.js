/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./helper/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      ...colors,
      primary: "var(--color-primary)",
      secondary: "var(--color-secondary)",
      black: {
        light: "var(--color-black-light)",
      },
      gradient: "var(--color-gradient)",
    },
    extend: {},
  },
  plugins: [require("@headlessui/tailwindcss")({ prefix: "ui" })],
};
