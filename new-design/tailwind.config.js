module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#171C45',
        'tgray':'#EAEEF5'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
