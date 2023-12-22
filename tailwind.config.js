const colors = require('tailwindcss/colors');
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gpc: {
          purple: {
            DEFAULT: "#8C52FF",
            darker: "#7042CC"
          },
          aqua: {
            DEFAULT: "#5CE1E6",
            darker: "#4AB4B8"
          }
        },
        dark: "#24253e",
        darkest: colors.slate["900"],
        light: "#ffffff",
        complementary: {
          light: colors.slate["700"],
          dark: colors.slate["300"]
        }
      }
    },
  },
  plugins: [],
}

