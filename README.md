<p align="center">
  <img src=".proj/images/logo.svg" width="120" alt="Vibe V0 Logo" />
</p>

<h1 align="center">Vibe V0</h1>

<p align="center">
  <strong>AI-Powered Component Library Generator</strong>
</p>

<p align="center">
  Transform natural language prompts into production-ready, downloadable component libraries
</p>

<p align="center">
  <a href="./README.zh-CN.md">简体中文</a> | English
</p>

<p align="center">
  <img src="https://img.shields.io/badge/version-0.1.0-blue.svg" alt="Version" />
  <img src="https://img.shields.io/badge/node-%3E%3D18-green.svg" alt="Node" />
  <img src="https://img.shields.io/badge/pnpm-9.15.4-orange.svg" alt="pnpm" />
  <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg" alt="License" />
</p>

---

## Overview

**Vibe V0** is an enterprise-grade AI-driven platform that generates customizable business component libraries from natural language descriptions. Unlike traditional component generators that produce page fragments, Vibe V0 creates complete, reusable component packages ready for direct import into your projects.

### Core Workflow

```
Prompt → AI Generation → Component Code → Downloadable Library
```

### Key Differentiators

| Feature | Traditional Generators | Vibe V0 |
|---------|----------------------|---------|
| Framework Support | Single framework | Multi-framework presets |
| Output Type | Page fragments | Reusable component libraries |
| Usage | Copy-paste code | Download & `import` directly |
| Customization | Limited | Highly customizable via prompts |

## Features

- **Multi-Framework Support** - Generate components for React, Vue 3, WeChat Mini Program, and more
- **UI Library Presets** - Support for Shadcn/ui, Ant Design, Element Plus, Vant Weapp, or pure styled components
- **AI-Powered Generation** - Natural language to production-ready code
- **Downloadable Packages** - Export complete npm-ready component libraries
- **Enterprise Ready** - TypeScript-first, fully typed components
- **Extensible Architecture** - Easy to add new framework and UI library presets

## Supported Presets

### Frameworks

- React
- Vue 3
- WeChat Mini Program
- *More coming soon...*

### UI Libraries

- Shadcn/ui
- Ant Design
- Element Plus
- Vant Weapp
- Pure CSS / Tailwind CSS
- *Extensible...*

### Example Combinations

- `React + Shadcn/ui`
- `React + Ant Design`
- `Vue 3 + Element Plus`
- `WeChat Mini Program + Vant Weapp`

## Tech Stack

### Frontend

- **React 19** - UI framework
- **Vite 6** - Build tool with HMR
- **Tailwind CSS 4** - Utility-first styling
- **TypeScript 5** - Type safety
- **React Router 7** - Routing

### Backend

- **Fastify 5** - High-performance Node.js framework
- **TypeScript 5** - Type safety

### Infrastructure

- **pnpm** - Fast, disk space efficient package manager
- **Monorepo** - Workspace-based architecture
- **ESLint** - Code quality

## Getting Started

### Prerequisites

- Node.js >= 18
- pnpm >= 9.15.4

### Installation

```bash
# Clone the repository
git clone https://github.com/jsy-0526/vibe-components-lib.git
cd vibe-v0

# Install dependencies
pnpm install

# Start development servers
pnpm dev
```

### Available Scripts

```bash
# Development
pnpm dev              # Start all packages in parallel
pnpm dev:app          # Start frontend only
pnpm dev:server       # Start backend only

# Build
pnpm build            # Build all packages

# Code Quality
pnpm lint             # Run ESLint
pnpm lint:fix         # Fix linting issues

# Cleanup
pnpm clean            # Remove all dist and node_modules
```

## Project Structure

```
vibe-v0/
├── packages/
│   ├── app/              # Frontend application
│   │   ├── src/
│   │   │   ├── main.tsx
│   │   │   └── App.tsx
│   │   ├── vite.config.ts
│   │   └── package.json
│   │
│   ├── server/           # Backend API
│   │   ├── src/
│   │   │   └── index.ts
│   │   └── package.json
│   │
│   └── shared/           # Shared types & utilities
│       ├── src/
│       │   └── index.ts
│       └── package.json
│
├── .proj/                # Project documentation
├── pnpm-workspace.yaml   # Workspace configuration
├── eslint.config.js      # ESLint configuration
└── package.json          # Root package.json
```

## Development Guide

### Adding a New Framework Preset

1. Define the preset configuration in `packages/shared`
2. Implement the code generator in `packages/server`
3. Add UI support in `packages/app`

### Code Style

This project uses [@antfu/eslint-config](https://github.com/antfu/eslint-config) for consistent code style. Git hooks automatically lint staged files before commits.

## Roadmap

- [ ] Core AI generation engine
- [ ] React + Shadcn/ui preset
- [ ] Vue 3 + Element Plus preset
- [ ] Component preview & editing
- [ ] Export as npm package
- [ ] Template marketplace
- [ ] Team collaboration features

## Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<p align="center">
  Built with passion by the Vibe V0 Team
</p>
