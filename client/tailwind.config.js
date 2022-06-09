// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')
const withMT = require('next-transpile-modules')(["@material-tailwind/react"]);
module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Proxima-Nova', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'editor-background': '#282c34',
        'primary': '#171C45',
        'danger': '#FF6347',
        'main-blue': '#0153CC',
        'light-blue':'#1FB9FF',
        'light-blue2':'#EAEEF5',
        'main-gray': '#93A4C3',
        'main-green': '#3AE794',
        'main-orange': '#E78F35',
      },
    },
  },
  variants: {
    opacity: ({ after }) => after(['disabled'])
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
})
