# 家庭能源管理系统

一个基于 Next.js 开发的现代化家庭能源管理系统，帮助用户实时监控和优化家庭用电情况。

## 功能特点

- 📊 实时用电监控
- 💡 智能用电分析
- 📈 设备用电排行
- 💰 电费构成分析
- ⚡ 用电高峰提醒
- 💭 节能建议

## 技术栈

- Next.js 14
- TypeScript
- Tailwind CSS
- Heroicons
- NextAuth.js

## 开始使用

1. 克隆项目

```bash
git clone https://github.com/[your-username]/home-energy-management.git
cd home-energy-management
```

2. 安装依赖

```bash
npm install
# 或
yarn install
```

3. 配置环境变量

复制 `.env.example` 文件到 `.env.local` 并填写必要的环境变量：

```bash
cp .env.example .env.local
```

4. 启动开发服务器

```bash
npm run dev
# 或
yarn dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

## 项目结构

```
src/
  ├── app/              # App Router 路由和页面
  ├── components/       # React 组件
  ├── lib/             # 工具函数和配置
  └── types/           # TypeScript 类型定义
```

## 贡献指南

欢迎提交 Pull Request 和 Issue！

## 许可证

MIT
