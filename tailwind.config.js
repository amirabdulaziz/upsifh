/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#b236ff",
        // primary: "#DEBCFF",
        secondary: "#000000",
        tertiary: "#FFFFFF",
        fav: "#b236ff",
      },
      text: {
        primary: "#b263ff",
        secondary: "#000000",
        tertiary: "#FFFFFF",
        fav: "#b236ff",
      }
    },
  },
  plugins: [],
};
