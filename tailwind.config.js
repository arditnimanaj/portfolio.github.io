/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        lilita: ["Lilita One", "cursive"],
        vina: ["Vina Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
