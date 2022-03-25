// tailwind.config.js
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
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
        'primary': '#171c45',
        'danger': '#FF6347'
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
