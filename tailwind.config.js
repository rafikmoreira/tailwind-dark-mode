/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{html,js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "10px",
        },
      },
      colors: {
        primary: {
          DEFAULT: "#FFB25A",
          dark: "#EAE9FF",
        },
        secondary: {
          DEFAULT: "#FFF0CE",
          dark: "#B19EF4",
        },
        background: {
          DEFAULT: "#FFFDEB",
          dark: "#413B5E",
        },
      },
    },
  },
  plugins: [],
};
