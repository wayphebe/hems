/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 启用静态导出
  basePath: '/hems', // 设置基础路径为仓库名
  images: {
    unoptimized: true, // GitHub Pages 不支持图片优化
    domains: [],
  },
  // 禁用需要服务器的特性
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  // 添加静态页面配置
  trailingSlash: true,
  // 禁用服务器端功能
  experimental: {
    appDir: true,
  },
  // 配置资源前缀
  assetPrefix: '/hems',
} 