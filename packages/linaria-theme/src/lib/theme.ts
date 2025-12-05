/**
 * Linaria theme tokens based on @centrodphlibs/theme
 * Creates CSS variables using Linaria's css template tags
 */
import { css } from 'linaria';
import { defaultTheme } from '@centrodphlibs/theme';

/**
 * Global theme CSS variables created from defaultTheme
 * These CSS variables are available globally and can be consumed by components
 */
export const themeVariables = css`
  :root {
    /* Colors */
    --color-primary: ${defaultTheme.colors.primary};
    --color-secondary: ${defaultTheme.colors.secondary};
    --color-success: ${defaultTheme.colors.success};
    --color-warning: ${defaultTheme.colors.warning};
    --color-error: ${defaultTheme.colors.error};
    --color-info: ${defaultTheme.colors.info};
    --color-background: ${defaultTheme.colors.background};
    --color-surface: ${defaultTheme.colors.surface};
    --color-text: ${defaultTheme.colors.text};
    --color-text-secondary: ${defaultTheme.colors.textSecondary};
    --color-border: ${defaultTheme.colors.border};

    /* Spacing */
    --spacing-s: ${defaultTheme.spacing.s};
    --spacing-m: ${defaultTheme.spacing.m};
    --spacing-l: ${defaultTheme.spacing.l};
  }
`;

