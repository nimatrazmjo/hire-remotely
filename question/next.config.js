/** @type {import('next').NextConfig} */
const removeImports = require("next-remove-imports")();
const { join } = require('path');
const nextConfig = removeImports({
  reactStrictMode: true,
  tailwindcss: {
    config: join(__dirname, 'tailwind.config.js'),
  },
  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'http://localhost:8000/api/:path*'
      }
    ]
  }
});

module.exports = nextConfig
