const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["pages/*.{vue,js}", "components/**/*.{vue,js}", "assets/data/*.js"],
  darkMode: false,
  theme: {
    container: {
      center: true,
      padding: "1rem"
    },
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        "blue-gray": colors.blueGray,
        "cool-gray": colors.coolGray,
        "true-gray": colors.trueGray,
        "warm-gray": colors.warmGray,
        orange: colors.orange,
        amber: colors.amber,
        lime: colors.lime,
        emerald: colors.emerald,
        teal: colors.teal,
        cyan: colors.cyan,
        sky: colors.sky,
        violet: colors.violet,
        purple: colors.purple,
        fuchsia: colors.fuchsia,
        rose: colors.rose
      },
      backgroundImage: {
        conic: "conic-gradient(var(--tw-gradient-stops))",
        "conic-to-t": "conic-gradient(at top, var(--tw-gradient-stops))",
        "conic-to-b": "conic-gradient(at bottom, var(--tw-gradient-stops))",
        "conic-to-l": "conic-gradient(at left, var(--tw-gradient-stops))",
        "conic-to-r": "conic-gradient(at right, var(--tw-gradient-stops))",
        "conic-to-tl": "conic-gradient(at top left, var(--tw-gradient-stops))",
        "conic-to-tr": "conic-gradient(at top right, var(--tw-gradient-stops))",
        "conic-to-bl": "conic-gradient(at bottom left, var(--tw-gradient-stops))",
        "conic-to-br": "conic-gradient(at bottom right, var(--tw-gradient-stops))",
        radial: "radial-gradient(ellipse at center, var(--tw-gradient-stops))",
        "radial-at-t": "radial-gradient(ellipse at top, var(--tw-gradient-stops))",
        "radial-at-b": "radial-gradient(ellipse at bottom, var(--tw-gradient-stops))",
        "radial-at-l": "radial-gradient(ellipse at left, var(--tw-gradient-stops))",
        "radial-at-r": "radial-gradient(ellipse at right, var(--tw-gradient-stops))",
        "radial-at-tl": "radial-gradient(ellipse at top left, var(--tw-gradient-stops))",
        "radial-at-tr": "radial-gradient(ellipse at top right, var(--tw-gradient-stops))",
        "radial-at-bl": "radial-gradient(ellipse at bottom left, var(--tw-gradient-stops))",
        "radial-at-br": "radial-gradient(ellipse at bottom right, var(--tw-gradient-stops))"
      },
      rotate: {
        "135": "135deg",
        "-135": "-135deg"
      }
    }
  },
  variants: {
    gradientColorStops: [],
    backgroundImage: [],
    extend: {}
  },
  plugins: [require("@tailwindcss/forms")]
};