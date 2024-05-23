const plugin = require("tailwindcss/plugin");

module.exports = {
  /** @type {import('rippleui').Config} */
  rippleui: {
    removeThemes: ["dark"],
  },
  daisyui: {
    themes: [],
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    // "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
        serif: ["Georgia", "serif"],
        mono: ["Menlo", "monospace"],
      },
      colors: {
        primary: "#EFC81A",
        secondary: "#2E266F",
        tertiary: "#3F3A3A",
        accent: {
          100: "#E6E6E6",
          200: "#CCCCCC",
          300: "#B3B3B3",
          400: "#999999",
          500: "#808080",
          600: "#666666",
          700: "#4D4D4D",
          800: "#333333",
          900: "#1A1A1A",
        },
      },
    },
  },
  plugins: [
    require("rippleui"),
    require("daisyui"),
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          fontSize: "4.5rem",
          fontWeight: theme("fontWeight.semibold"),
        },
        h2: {
          fontSize: "3.5rem",
          fontWeight: theme("fontWeight.medium"),
        },
        h3: {
          fontSize: "3rem",
          fontWeight: theme("fontWeight.medium"),
        },
      });
    }),
  ],
};
