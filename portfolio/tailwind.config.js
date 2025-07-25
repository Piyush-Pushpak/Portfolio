/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scans all components and pages
  ],
  darkMode: 'class', // Enables class-based dark mode
  theme: {
    extend: {
      colors: {
        teal: {
          50: "#e6fffa",
          100: "#b2f5ea",
          600: "#319795",
        },
        orange: {
          50: "#fffaf0",
          100: "#feebc8",
          500: "#ed8936",
        },
        gray: {
          950: "#0f0f0f", // deep dark background
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
