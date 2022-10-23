/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#151718",
      },
    },
    fontFamily: {
      custom: ["Josefin Sans", "Sans-serif"],
    },
  },
  plugins: [],
};
