const withMT = require('next-transpile-modules')(["@material-tailwind/react"]);
module.exports = withMT({
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://api:8000/api/:path*'
      }
    ]
  },
  experimental: {
    outputStandalone: true,
  },
})
