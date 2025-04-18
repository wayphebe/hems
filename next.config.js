/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/hems',
  images: {
    unoptimized: true,
  },
  // 禁用不必要的实验性功能
  experimental: {
    appDir: true,
  },
  // 配置静态页面
  trailingSlash: true,
  // 禁用需要服务器的特性
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // 配置环境变量
  env: {
    NEXTAUTH_URL: 'https://wayphebe.github.io/hems',
  },
} 