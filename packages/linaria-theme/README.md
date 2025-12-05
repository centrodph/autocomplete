# @centrodphlibs/linaria-theme

Linaria theme tokens package based on `@centrodphlibs/theme`. Provides CSS variables that can be consumed by Linaria components.

## Installation

```bash
npm install @centrodphlibs/linaria-theme
```

## Usage

### Import Theme CSS

First, import the theme CSS file to ensure theme variables are available:

```typescript
import '@centrodphlibs/linaria-theme/style.css';
```

### Using Theme Tokens

Import and use theme tokens in your Linaria styles:

```typescript
import { css } from 'linaria';
import { themeTokens } from '@centrodphlibs/linaria-theme';

export const myComponent = css`
  background-color: ${themeTokens.colors.primary};
  color: ${themeTokens.colors.text};
  padding: ${themeTokens.spacing.m};
`;
```

### Using Theme Variables Directly

You can also use CSS variables directly:

```typescript
import { css } from 'linaria';

export const myComponent = css`
  background-color: var(--color-primary);
  color: var(--color-text);
  padding: var(--spacing-m);
`;
```

### Example: Button Component

```typescript
import { css } from 'linaria';
import { themeTokens } from '@centrodphlibs/linaria-theme';

export const button = css`
  background-color: ${themeTokens.colors.primary};
  color: ${themeTokens.colors.text};
  padding: ${themeTokens.spacing.m} ${themeTokens.spacing.l};
  border-radius: 4px;
  border: 1px solid ${themeTokens.colors.border};

  &:hover:not(:disabled) {
    background-color: ${themeTokens.colors.secondary};
  }
`;
```

## Available Theme Tokens

**Colors:**
- `themeTokens.colors.primary` - Primary color (var(--color-primary))
- `themeTokens.colors.secondary` - Secondary color (var(--color-secondary))
- `themeTokens.colors.success` - Success color (var(--color-success))
- `themeTokens.colors.warning` - Warning color (var(--color-warning))
- `themeTokens.colors.error` - Error color (var(--color-error))
- `themeTokens.colors.info` - Info color (var(--color-info))
- `themeTokens.colors.background` - Background color (var(--color-background))
- `themeTokens.colors.surface` - Surface color (var(--color-surface))
- `themeTokens.colors.text` - Primary text color (var(--color-text))
- `themeTokens.colors.textSecondary` - Secondary text color (var(--color-text-secondary))
- `themeTokens.colors.border` - Border color (var(--color-border))

**Spacing:**
- `themeTokens.spacing.s` - Small spacing (var(--spacing-s))
- `themeTokens.spacing.m` - Medium spacing (var(--spacing-m))
- `themeTokens.spacing.l` - Large spacing (var(--spacing-l))

## CSS Variables

All theme values are available as CSS custom properties:

- `--color-primary`, `--color-secondary`, etc.
- `--spacing-s`, `--spacing-m`, `--spacing-l`

## TypeScript

Full TypeScript support is included. Theme tokens are fully typed and provide autocomplete support.

## Related Packages

- `@centrodphlibs/theme` - Base theme data package
- `@centrodphlibs/button-linaria` - Button component using Linaria

## Running unit tests

Run `nx test linaria-theme` to execute the unit tests via [Vitest](https://vitest.dev/).

