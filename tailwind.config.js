/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        whiteF5: "#F5F5F5",
        black20: "#202020",
        blueOne: "#357ABB",
      },
    },
  },
  plugins: [],
};
