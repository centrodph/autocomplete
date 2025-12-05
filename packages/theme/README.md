# @centrodphlibs/theme

Theme data package providing colors and spacing units for design systems. This package exports theme data that can be consumed by styling-specific theme packages (vanilla-extract, Linaria, CSS modules, etc.).

## Installation

```bash
npm install @centrodphlibs/theme
```

## Usage

Import the default theme and use it in your styling packages:

```typescript
import { defaultTheme } from '@centrodphlibs/theme';

// Access colors
const primaryColor = defaultTheme.colors.primary;
const secondaryColor = defaultTheme.colors.secondary;

// Access spacing units
const smallSpacing = defaultTheme.spacing.s;
const mediumSpacing = defaultTheme.spacing.m;
const largeSpacing = defaultTheme.spacing.l;
```

### Custom Theme

You can create a custom theme using the same structure:

```typescript
import type { ThemeNamespace } from '@centrodphlibs/theme';

const customTheme: ThemeNamespace.Theme = {
  colors: {
    primary: '#ff0000',
    secondary: '#00ff00',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
    background: '#ffffff',
    surface: '#f9fafb',
    text: '#000000',
    textSecondary: '#666666',
    border: '#e5e7eb',
  },
  spacing: {
    s: '2px',
    m: '4px',
    l: '6px',
  },
};
```

## Default Theme

The default theme includes:

**Colors:**
- `primary`: `#0b21b4` (Primary color for main actions)
- `secondary`: `#6b7280` (Secondary color)
- `success`: `#10b981` (Success/positive feedback)
- `warning`: `#f59e0b` (Warning/caution)
- `error`: `#ef4444` (Error/destructive actions)
- `info`: `#3b82f6` (Informational messages)
- `background`: `#ffffff` (Main background)
- `surface`: `#f9fafb` (Cards/elevated elements)
- `text`: `#111827` (Primary text)
- `textSecondary`: `#6b7280` (Secondary text)
- `border`: `#e5e7eb` (Borders/dividers)

**Spacing Units:**
- `s`: `2px` (Small spacing)
- `m`: `4px` (Medium spacing)
- `l`: `6px` (Large spacing)

## TypeScript

Full TypeScript support is included. Import types as needed:

```typescript
import type { ThemeNamespace } from '@centrodphlibs/theme';

const myTheme: ThemeNamespace.Theme = {
  colors: {
    // ...,
  },
  spacing: {
    s: ...,
  },
};
```

## Related Packages

This package is consumed by:
- `@centrodphlibs/vanilla-extract-theme` - Vanilla-extract theme tokens
- `@centrodphlibs/linaria-theme` - Linaria theme tokens
- `@centrodphlibs/css-modules-theme` - CSS modules theme tokens

## Running unit tests

Run `nx test theme` to execute the unit tests via [Vitest](https://vitest.dev/).
