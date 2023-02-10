/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  content: ["*./src/**/*.{html,js}"],
  corePlugins: {
    preflight: false,
  },
  prefix: 'tw-',
  theme: {
    extend: {
      colors: {
        emerald: colors.emerald
      }
    },
  },
  plugins: [],
}
