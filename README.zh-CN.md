<p align="center">
  <img src=".proj/images/logo.svg" width="120" alt="Vibe V0 Logo" />
</p>

<h1 align="center">Vibe V0</h1>

<p align="center">
  <strong>AI 驱动的组件库生成器</strong>
</p>

<p align="center">
  通过自然语言描述，生成可直接下载使用的生产级组件库
</p>

<p align="center">
  简体中文 | <a href="./README.md">English</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/version-0.1.0-blue.svg" alt="Version" />
  <img src="https://img.shields.io/badge/node-%3E%3D18-green.svg" alt="Node" />
  <img src="https://img.shields.io/badge/pnpm-9.15.4-orange.svg" alt="pnpm" />
  <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg" alt="License" />
</p>

---

## 项目简介

**Vibe V0** 是一个企业级的 AI 驱动组件库生成平台。用户可以通过编辑器输入提示词，生成定制化的业务组件，并以完整的组件库形式下载，直接导入到项目中使用。

### 核心流程

```
提示词输入 → AI 生成 → 组件代码 → 可下载的组件库
```

### 核心差异化

| 特性 | 传统生成器 | Vibe V0 |
|-----|----------|---------|
| 框架支持 | 单一框架 | 多框架预设 |
| 输出类型 | 页面片段 | 可复用的组件库 |
| 使用方式 | 复制粘贴代码 | 下载后直接 `import` |
| 定制化程度 | 有限 | 通过提示词高度定制 |

## 功能特性

- **多框架支持** - 支持生成 React、Vue 3、微信小程序等多种框架的组件
- **UI 库预设** - 支持 Shadcn/ui、Ant Design、Element Plus、Vant Weapp 或纯样式组件
- **AI 驱动生成** - 自然语言描述直接转换为生产级代码
- **可下载组件包** - 导出完整的、可直接发布到 npm 的组件库
- **企业级品质** - TypeScript 优先，完整的类型定义
- **可扩展架构** - 轻松添加新的框架和 UI 库预设

## 支持的预设

### 框架
- React
- Vue 3
- 微信小程序
- *更多框架即将支持...*

### UI 库
- Shadcn/ui
- Ant Design
- Element Plus
- Vant Weapp
- 纯 CSS / Tailwind CSS
- *可扩展...*

### 预设组合示例
- `React + Shadcn/ui`
- `React + Ant Design`
- `Vue 3 + Element Plus`
- `微信小程序 + Vant Weapp`

## 技术栈

### 前端
- **React 19** - UI 框架
- **Vite 6** - 构建工具，支持热更新
- **Tailwind CSS 4** - 原子化 CSS
- **TypeScript 5** - 类型安全
- **React Router 7** - 路由管理

### 后端
- **Fastify 5** - 高性能 Node.js 框架
- **TypeScript 5** - 类型安全

### 基础设施
- **pnpm** - 快速、节省磁盘空间的包管理器
- **Monorepo** - 工作区架构
- **ESLint** - 代码质量保障

## 快速开始

### 环境要求

- Node.js >= 18
- pnpm >= 9.15.4

### 安装

```bash
# 克隆仓库
git clone https://github.com/jsy-0526/vibe-components-lib.git
cd vibe-v0

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

### 可用脚本

```bash
# 开发
pnpm dev              # 并行启动所有包
pnpm dev:app          # 仅启动前端
pnpm dev:server       # 仅启动后端

# 构建
pnpm build            # 构建所有包

# 代码质量
pnpm lint             # 运行 ESLint
pnpm lint:fix         # 自动修复代码问题

# 清理
pnpm clean            # 删除所有 dist 和 node_modules
```

## 项目结构

```
vibe-v0/
├── packages/
│   ├── app/              # 前端应用
│   │   ├── src/
│   │   │   ├── main.tsx
│   │   │   └── App.tsx
│   │   ├── vite.config.ts
│   │   └── package.json
│   │
│   ├── server/           # 后端 API
│   │   ├── src/
│   │   │   └── index.ts
│   │   └── package.json
│   │
│   └── shared/           # 共享类型和工具
│       ├── src/
│       │   └── index.ts
│       └── package.json
│
├── .proj/                # 项目文档
├── pnpm-workspace.yaml   # 工作区配置
├── eslint.config.js      # ESLint 配置
└── package.json          # 根 package.json
```

## 开发指南

### 添加新的框架预设

1. 在 `packages/shared` 中定义预设配置
2. 在 `packages/server` 中实现代码生成器
3. 在 `packages/app` 中添加 UI 支持

### 代码规范

本项目使用 [@antfu/eslint-config](https://github.com/antfu/eslint-config) 保持一致的代码风格。Git hooks 会在提交前自动检查暂存的文件。

## 路线图

- [ ] 核心 AI 生成引擎
- [ ] React + Shadcn/ui 预设
- [ ] Vue 3 + Element Plus 预设
- [ ] 组件预览与编辑
- [ ] 导出为 npm 包
- [ ] 模板市场
- [ ] 团队协作功能

## 参与贡献

我们欢迎各种形式的贡献！请查看 [贡献指南](CONTRIBUTING.md) 了解详情。

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 发起 Pull Request

## 开源协议

本项目基于 MIT 协议开源 - 查看 [LICENSE](LICENSE) 文件了解详情。

---

<p align="center">
  由 Vibe V0 团队用心打造
</p>
