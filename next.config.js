/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/hems',
  images: {
    unoptimized: true,
  },
  // 禁用需要服务器的特性
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
} 