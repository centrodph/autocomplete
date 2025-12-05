# @centrodphlibs/css-modules-theme

CSS modules theme tokens package based on `@centrodphlibs/theme`. Provides CSS custom properties (CSS variables) that can be consumed by CSS modules components.

## Installation

```bash
npm install @centrodphlibs/css-modules-theme
```

## Usage

### Import Theme CSS

First, import the theme CSS file to ensure theme variables are available:

```typescript
import '@centrodphlibs/css-modules-theme/style.css';
```

Or in your main CSS file:

```css
@import '@centrodphlibs/css-modules-theme/style.css';
```

### Using Theme Tokens in CSS Modules

Use CSS variables directly in your CSS modules:

```css
/* MyComponent.module.css */
.myComponent {
  background-color: var(--color-primary);
  color: var(--color-text);
  padding: var(--spacing-m);
}
```

### Using Theme Tokens in TypeScript

Import and use theme tokens in your TypeScript code:

```typescript
import { themeTokens } from '@centrodphlibs/css-modules-theme';
import styles from './MyComponent.module.css';

function MyComponent() {
  return (
    <div
      className={styles.myComponent}
      style={{
        backgroundColor: themeTokens.colors.primary,
        padding: themeTokens.spacing.m,
      }}
    >
      Content
    </div>
  );
}
```

### Example: Button Component

```css
/* Button.module.css */
.button {
  background-color: var(--color-primary);
  color: var(--color-text);
  padding: var(--spacing-m) var(--spacing-l);
  border-radius: 4px;
  border: 1px solid var(--color-border);
}

.button:hover:not(:disabled) {
  background-color: var(--color-secondary);
}
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
- `@centrodphlibs/button-css-modules` - Button component using CSS modules

## Running unit tests

Run `nx test css-modules-theme` to execute the unit tests via [Vitest](https://vitest.dev/).

