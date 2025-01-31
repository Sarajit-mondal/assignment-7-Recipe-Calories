/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      lexend: ["Lexend", "sans-serif"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
};
