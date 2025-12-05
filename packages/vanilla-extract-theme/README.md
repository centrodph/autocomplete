# @centrodphlibs/vanilla-extract-theme

Vanilla-extract theme tokens package based on `@centrodphlibs/theme`. Provides type-safe CSS variables that can be consumed by vanilla-extract components.

## Installation

```bash
npm install @centrodphlibs/vanilla-extract-theme
```

## Usage

### Import Theme CSS

First, import the theme CSS file to ensure theme variables are available:

```typescript
import '@centrodphlibs/vanilla-extract-theme/style.css';
```

### Using Theme Tokens

Import and use theme tokens in your vanilla-extract styles:

```typescript
import { style } from '@vanilla-extract/css';
import { themeTokens } from '@centrodphlibs/vanilla-extract-theme';

export const myComponent = style({
  backgroundColor: themeTokens.colors.primary,
  color: themeTokens.colors.text,
  padding: themeTokens.spacing.m,
});
```

### Using Theme Variables Directly

You can also access theme variables directly:

```typescript
import { style } from '@vanilla-extract/css';
import { theme } from '@centrodphlibs/vanilla-extract-theme';

export const myComponent = style({
  backgroundColor: theme.colors.primary,
  color: theme.colors.text,
  padding: theme.spacing.m,
});
```

### Example: Button Component

```typescript
import { style } from '@vanilla-extract/css';
import { themeTokens } from '@centrodphlibs/vanilla-extract-theme';

export const button = style({
  backgroundColor: themeTokens.colors.primary,
  color: themeTokens.colors.text,
  padding: `${themeTokens.spacing.m} ${themeTokens.spacing.l}`,
  borderRadius: '4px',
  border: `1px solid ${themeTokens.colors.border}`,
  
  ':hover': {
    backgroundColor: themeTokens.colors.secondary,
  },
});
```

## Available Theme Tokens

**Colors:**
- `themeTokens.colors.primary` - Primary color (#0b21b4)
- `themeTokens.colors.secondary` - Secondary color (#6b7280)
- `themeTokens.colors.success` - Success color (#10b981)
- `themeTokens.colors.warning` - Warning color (#f59e0b)
- `themeTokens.colors.error` - Error color (#ef4444)
- `themeTokens.colors.info` - Info color (#3b82f6)
- `themeTokens.colors.background` - Background color (#ffffff)
- `themeTokens.colors.surface` - Surface color (#f9fafb)
- `themeTokens.colors.text` - Primary text color (#111827)
- `themeTokens.colors.textSecondary` - Secondary text color (#6b7280)
- `themeTokens.colors.border` - Border color (#e5e7eb)

**Spacing:**
- `themeTokens.spacing.s` - Small spacing (2px)
- `themeTokens.spacing.m` - Medium spacing (4px)
- `themeTokens.spacing.l` - Large spacing (6px)

## TypeScript

Full TypeScript support is included. Theme tokens are fully typed and provide autocomplete support.

## Related Packages

- `@centrodphlibs/theme` - Base theme data package
- `@centrodphlibs/button-vanilla-extract` - Button component using vanilla-extract

## Running unit tests

Run `nx test vanilla-extract-theme` to execute the unit tests via [Vitest](https://vitest.dev/).

