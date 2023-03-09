/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      poppin: ["Poppins", "sans-serif"],
      workSans: ["Work Sans", "sans-serif"],
    },
    extend: {
      colors: {
        primary_blue: "#2664ea",
        secondary: "#f7faff",
        subText: "#8e9bac",
      },
    },
  },
  plugins: [],
};
