/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      screens: {
        'lg-landscape': {'raw': '(min-width: 1015px) and (orientation: landscape)'},
      },
    },
    colors: {
      'pink': '#E78C98',
      'cream': '#FAF0EE',
      'black': '#30343F',
    },
    fontFamily: {
      'angel': 'Angelface',
      'kaoly': 'Kaoly',
      'mont': ['Montserrat', 'sans-serif'],
      'fah': ['Fahkwang', 'sans-serif']
    }
  },
  plugins: [require('flowbite/plugin')],
}

