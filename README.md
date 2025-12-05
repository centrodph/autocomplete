# @centrodphlibs Component Library Monorepo

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

A modern monorepo containing React component libraries built with different CSS-in-JS and styling approaches. This repository demonstrates and provides reusable UI components styled with **Vanilla Extract**, **Linaria**, and **CSS Modules**, along with their corresponding theme packages.

## 📋 Table of Contents

- [Overview](#overview)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Available Packages](#available-packages)
- [Development](#development)
- [Testing](#testing)
- [Building](#building)
- [Publishing](#publishing)
- [Technology Stack](#technology-stack)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

This monorepo contains a collection of React component libraries that showcase different styling methodologies:

- **Vanilla Extract**: Type-safe, zero-runtime CSS-in-TypeScript
- **Linaria**: Zero-runtime CSS-in-JS with compile-time extraction
- **CSS Modules**: Traditional scoped CSS modules

Each styling approach has its own button component implementation and theme package, allowing developers to choose the styling solution that best fits their project needs.

## 📁 Project Structure

```
autocomplete/
├── packages/                    # Published npm packages
│   ├── button-vanilla-extract/  # Button component using Vanilla Extract
│   ├── button-linaria/          # Button component using Linaria
│   ├── button-css-modules/      # Button component using CSS Modules
│   ├── vanilla-extract-theme/   # Theme tokens for Vanilla Extract
│   ├── linaria-theme/           # Theme tokens for Linaria
│   ├── css-modules-theme/       # Theme tokens for CSS Modules
│   └── theme/                   # Base theme data (colors, spacing)
├── environments/                # Application environments
│   └── app/                     # Showcase application
├── scripts/                     # Build and publish scripts
└── dist/                        # Build output directory
```

## 🚀 Getting Started

### Prerequisites

- **Node.js**: Version 22.16.0 (specified in `.nvmrc`)
- **pnpm**: Version 10.12.1 or higher (required for workspace management)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd styled-components-migration
   ```

2. Switch to the correct Node.js version (if using nvm):
   ```bash
   nvm use
   ```
   This will automatically use the version specified in `.nvmrc` (v22.16.0).

3. Install dependencies:
   ```bash
   pnpm install
   ```

### Start the Development Server

Run the showcase application to see all components in action:

```bash
pnpm run start
```

This will start the development server, typically at `http://localhost:4200` (or the next available port).

## 📦 Available Packages

### Button Components

#### `@centrodphlibs/button-vanilla-extract`

React button component using Vanilla Extract for type-safe, zero-runtime CSS styling.

**Features:**
- Type-safe styling with TypeScript
- Zero runtime CSS overhead
- Multiple variants: `primary`, `secondary`, `outline`, `ghost`
- Three sizes: `small`, `medium`, `large`
- Full TypeScript support

**Installation:**
```bash
npm install @centrodphlibs/button-vanilla-extract @vanilla-extract/css
```

**Usage:**
```tsx
import { Button } from '@centrodphlibs/button-vanilla-extract';
import '@centrodphlibs/button-vanilla-extract/style.css';

<Button variant="primary" size="medium" onClick={() => alert('Clicked!')}>
  Click Me
</Button>
```

#### `@centrodphlibs/button-linaria`

React button component using Linaria for zero-runtime CSS-in-JS with compile-time extraction.

**Features:**
- Zero runtime CSS-in-JS
- Compile-time CSS extraction
- Same API as vanilla-extract version
- Full TypeScript support

**Installation:**
```bash
npm install @centrodphlibs/button-linaria
```

**Usage:**
```tsx
import { Button } from '@centrodphlibs/button-linaria';
import '@centrodphlibs/button-linaria/style.css';

<Button variant="secondary" size="large">
  Secondary Button
</Button>
```

#### `@centrodphlibs/button-css-modules`

React button component using traditional CSS Modules for scoped styling.

**Features:**
- Traditional CSS Modules approach
- Scoped class names
- Same API as other button components
- Full TypeScript support

**Installation:**
```bash
npm install @centrodphlibs/button-css-modules
```

**Usage:**
```tsx
import { Button } from '@centrodphlibs/button-css-modules';
import '@centrodphlibs/button-css-modules/style.css';

<Button variant="outline" size="small">
  Outline Button
</Button>
```

### Theme Packages

#### `@centrodphlibs/theme`

Base theme package containing design tokens (colors, spacing, etc.) used by all theme packages.

#### `@centrodphlibs/vanilla-extract-theme`

Vanilla Extract theme tokens based on `@centrodphlibs/theme`.

#### `@centrodphlibs/linaria-theme`

Linaria theme tokens based on `@centrodphlibs/theme`.

#### `@centrodphlibs/css-modules-theme`

CSS Modules theme tokens based on `@centrodphlibs/theme`.

## 🛠️ Development

### Running Individual Packages

Each package can be developed independently. Use Nx commands to target specific packages:

```bash
# Build a specific package
nx build button-vanilla-extract

# Test a specific package
nx test button-vanilla-extract

# Lint a specific package
nx lint button-vanilla-extract
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `pnpm run start` | Start the showcase application development server |
| `pnpm run build` | Build the showcase application |
| `pnpm run build:all` | Build all packages |
| `pnpm run test` | Run tests for all packages |
| `pnpm run test:all` | Run tests for all packages using Nx |
| `pnpm run prepare:publish` | Prepare packages for publishing (copies necessary files) |

## 🧪 Testing

This project uses [Vitest](https://vitest.dev/) for unit testing.

### Run All Tests

```bash
pnpm run test:all
```

### Run Tests for a Specific Package

```bash
nx test button-vanilla-extract
nx test vanilla-extract-theme
```

### Run Tests in Watch Mode

```bash
nx test button-vanilla-extract --watch
```

## 🏗️ Building

### Build All Packages

```bash
pnpm run build:all
```

This command builds all packages in the monorepo and outputs them to the `dist/` directory.

### Build Individual Packages

```bash
nx build button-vanilla-extract
nx build button-linaria
nx build button-css-modules
```

## 📤 Publishing

Packages are published to npm under the `@centrodphlibs` scope. See [PUBLISHING.md](./PUBLISHING.md) for detailed publishing instructions.

### Quick Publish Commands

```bash
# Publish a single package
pnpm run publish:button-vanilla-extract

# Publish all packages
pnpm run publish:all
```

**Note:** Before publishing, ensure you:
1. Are logged into npm (`npm login`)
2. Have permission to publish to the `@centrodphlibs` scope
3. Have updated version numbers in package.json files
4. Have built all packages (`pnpm run build:all`)

## 🛠️ Technology Stack

### Core Technologies

- **React**: 18.2.0 - UI library
- **TypeScript**: ~5.4.2 - Type safety
- **Nx**: 18.3.3 - Monorepo tooling
- **Vite**: ~5.0.0 - Build tool and dev server
- **pnpm**: Package manager with workspace support

### Styling Solutions

- **Vanilla Extract**: ^1.17.5 - Type-safe CSS-in-TypeScript
- **Linaria**: ^5.0.0 - Zero-runtime CSS-in-JS
- **CSS Modules**: Traditional scoped CSS

### Testing & Quality

- **Vitest**: ^1.3.1 - Unit testing framework
- **ESLint**: ~8.57.0 - Code linting
- **Prettier**: ^2.6.2 - Code formatting
- **TypeScript ESLint**: ^7.3.0 - TypeScript-specific linting

### Development Tools

- **@nx/react**: React plugin for Nx
- **@nx/vite**: Vite plugin for Nx
- **@vitejs/plugin-react**: React plugin for Vite
- **@vanilla-extract/vite-plugin**: Vanilla Extract plugin for Vite
- **@linaria/vite**: Linaria plugin for Vite

## 📝 Component API

All button components share a consistent API:

### Button Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost'` | `'primary'` | Button style variant |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Button size |
| `disabled` | `boolean` | `false` | Whether the button is disabled |
| `onClick` | `(event: React.MouseEvent<HTMLButtonElement>) => void` | - | Click event handler |
| `children` | `React.ReactNode` | - | Button content (required) |
| `className` | `string` | - | Additional CSS class name |
| `p` | `'s' \| 'm' \| 'l'` | - | Padding utility (Vanilla Extract only) |
| `m` | `'s' \| 'm' \| 'l'` | - | Margin utility (Vanilla Extract only) |

### Variants

- **primary**: Solid background with high contrast text
- **secondary**: Alternative solid background
- **outline**: Transparent background with border
- **ghost**: Transparent background, no border

### Sizes

- **small**: Compact padding and smaller font size
- **medium**: Default padding and font size
- **large**: Larger padding and font size

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Ensure all tests pass before submitting
2. Follow the existing code style and conventions
3. Add tests for new features
4. Update documentation as needed
5. Use descriptive commit messages

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔗 Resources

- [Nx Documentation](https://nx.dev)
- [Vanilla Extract Documentation](https://vanilla-extract.style)
- [Linaria Documentation](https://linaria.dev)
- [Vite Documentation](https://vitejs.dev)
- [React Documentation](https://react.dev)
- [Vitest Documentation](https://vitest.dev)

**Built with ❤️ using Nx, React, and modern CSS-in-JS solutions**
