/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/hems',
  images: {
    unoptimized: true,
  },
  // 禁用服务器端功能
  experimental: {
    appDir: true,
  },
  // 配置重写规则
  async rewrites() {
    return [];
  },
  // 禁用需要服务器的特性
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
} 