/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
    screens: {
      // prettier-ignore
      "xs": {'min': '0px', 'max':'400px'},
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
