/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      Lato: ["Lato"],
    },
    colors: {
      primary: "#47455A",
      accent: "#D6532B",
      secondary: "#D1D1D1",
      white: "#FFFFFF",
      black: "#000000",
      background: "#FCFCFD",
    },
  },
  plugins: [],
};
