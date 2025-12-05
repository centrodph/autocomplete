/**
 * Theme tokens object providing type-safe access to CSS variable names
 * This object maps theme values to CSS variable names for convenient consumption
 */
export const themeTokens = {
  colors: {
    primary: 'var(--color-primary)',
    secondary: 'var(--color-secondary)',
    success: 'var(--color-success)',
    warning: 'var(--color-warning)',
    error: 'var(--color-error)',
    info: 'var(--color-info)',
    background: 'var(--color-background)',
    surface: 'var(--color-surface)',
    text: 'var(--color-text)',
    textSecondary: 'var(--color-text-secondary)',
    border: 'var(--color-border)',
  },
  spacing: {
    s: 'var(--spacing-s)',
    m: 'var(--spacing-m)',
    l: 'var(--spacing-l)',
  },
};

