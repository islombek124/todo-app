/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundColor: {
        div: "#25273D",
      },
      colors: {
        border: "#393A4B",
        todo: "#C8CBE7",
      },
    },
  },
  plugins: [],
};
