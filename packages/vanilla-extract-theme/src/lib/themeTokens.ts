/**
 * Theme tokens object providing easy access to vanilla-extract theme variables
 * This object maps theme values to vanilla-extract CSS variables for convenient consumption
 */
import { themeContract } from './theme.css';

/**
 * Theme tokens object that can be imported and used in components
 * Provides type-safe access to theme variables
 * After createGlobalTheme is called, themeContract contains CSS variable references
 */
export const themeTokens = {
  colors: {
    primary: themeContract.colors.primary,
    secondary: themeContract.colors.secondary,
    success: themeContract.colors.success,
    warning: themeContract.colors.warning,
    error: themeContract.colors.error,
    info: themeContract.colors.info,
    background: themeContract.colors.background,
    surface: themeContract.colors.surface,
    text: themeContract.colors.text,
    textSecondary: themeContract.colors.textSecondary,
    border: themeContract.colors.border,
  },
  spacing: {
    s: themeContract.spacing.s,
    m: themeContract.spacing.m,
    l: themeContract.spacing.l,
  },
};

