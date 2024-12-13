/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ['**/*html'],
  theme: {
    extend: {
    fontFamily: {
      'IRANYekanX': 'IRANYekanX',
    },
    colors: {
      'custom-blue': {
        '50': '#edf9ff',
        '100': '#d6efff',
        '200': '#b5e5ff',
        '300': '#83d7ff',
        '400': '#48beff',
        '500': '#1e9dff',
        '600': '#067dff',
        '700': '#0069ff',
        '800': '#0850c5',
        '900': '#0d479b',
        '950': '#0e2c5d',
    },
    }
    },
  },
  plugins: [],
}