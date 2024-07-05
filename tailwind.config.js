/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        // primary: "#DEBCFF",
        secondary: "#D4C685",
        tertiary: "#FFFFFF",
        fav: "#b236ff",
      },
      text: {
        primary: "#b263ff",
        secondary: "#000000",
        tertiary: "#FFFFFF",
        fav: "#b236ff",
      },
    },
  },
  plugins: [],
};
