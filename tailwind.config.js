/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "light-text": "#858785",
        "normal-text": "#787878",
        "ash-gray": "#999999",
        "theme-orange": "#FF6666",
        "theme-pink": "#FF8F9C",
        "theme-dark": "#212121",
        "dark-border": "#454545",
      },
    },
  },
  plugins: [],
};
