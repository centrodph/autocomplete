/**
 * Theme tokens object providing easy access to vanilla-extract theme variables
 * This object maps theme values to vanilla-extract CSS variables for convenient consumption
 */
import { theme } from './theme.css';

/**
 * Theme tokens object that can be imported and used in components
 * Provides type-safe access to theme variables
 */
export const themeTokens = {
  colors: {
    primary: theme.colors.primary,
    secondary: theme.colors.secondary,
    success: theme.colors.success,
    warning: theme.colors.warning,
    error: theme.colors.error,
    info: theme.colors.info,
    background: theme.colors.background,
    surface: theme.colors.surface,
    text: theme.colors.text,
    textSecondary: theme.colors.textSecondary,
    border: theme.colors.border,
  },
  spacing: {
    s: theme.spacing.s,
    m: theme.spacing.m,
    l: theme.spacing.l,
  },
};

