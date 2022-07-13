/** @type {import('next').NextConfig} */
const removeImports = require("next-remove-imports")();
const { join } = require('path');
const nextConfig = removeImports({
  reactStrictMode: true,
  tailwindcss: {
    config: join(__dirname, 'tailwind.config.js'),
  },
});

module.exports = nextConfig
