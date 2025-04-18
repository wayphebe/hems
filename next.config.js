/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // 启用静态导出
  basePath: '/hems', // 设置基础路径为仓库名
  images: {
    unoptimized: true, // GitHub Pages 不支持图片优化
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
} 