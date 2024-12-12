/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ['source.unsplash.com'],
    unoptimized: true,
  },
}

module.exports = nextConfig 