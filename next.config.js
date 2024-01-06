/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    MAP_API_KEY: process.env.MAP_API_KEY,
  },
}

module.exports = nextConfig
