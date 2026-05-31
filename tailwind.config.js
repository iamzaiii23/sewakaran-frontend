/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#B2B2B2",
        secondary: "#DEDEDE",
        dark: "#707070",
      },
    },
  },

  plugins: [],
}