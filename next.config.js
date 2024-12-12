/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ['source.unsplash.com'],
    unoptimized: true,
  },
  basePath: '/shenyu',
}

module.exports = nextConfig 