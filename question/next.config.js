/** @type {import('next').NextConfig} */

const { join } = require('path');
const nextConfig = {
  reactStrictMode: true,
  tailwindcss: {
    config: join(__dirname, 'tailwind.config.js'),
  },
}

module.exports = nextConfig
