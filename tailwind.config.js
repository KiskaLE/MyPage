/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      animation: {
        slideLeft: "slide ease-in-out duration-300ms",
      },
      keyframes: {
        slide: {
          "0%": { translate: "translate-x-0" },
          "100%": { translate: "translate-x-full" },
        },
      },
    },
    colors: {
      grey: "#71717a",
      darkgreen: "#7E998A",
      green: "#7FBEAB",
      lightblue: "#6AD5CB",
      bluegreen: "#2DE1C2",
      whitegrey: "#e2e8f0",
      white: "#FFFFFF",
      blue: "#2563eb",
      black: "#000000",
    },
  },
  plugins: [],
};
