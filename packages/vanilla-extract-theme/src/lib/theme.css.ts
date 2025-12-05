/**
 * Vanilla-extract theme tokens based on @centrodphlibs/theme
 * Creates CSS variables using vanilla-extract's createGlobalTheme API
 */
import { createGlobalTheme } from '@vanilla-extract/css';
import { defaultTheme } from '@centrodphlibs/theme';

/**
 * Global theme contract defining CSS variable names
 * This contract ensures type safety when accessing theme tokens
 */
export const themeContract = {
  colors: {
    primary: '',
    secondary: '',
    success: '',
    warning: '',
    error: '',
    info: '',
    background: '',
    surface: '',
    text: '',
    textSecondary: '',
    border: '',
  },
  spacing: {
    s: '',
    m: '',
    l: '',
  },
};

/**
 * Global theme variables created from defaultTheme
 * These CSS variables are available globally and can be consumed by components
 */
export const theme = createGlobalTheme(':root', themeContract, {
  colors: {
    primary: defaultTheme.colors.primary,
    secondary: defaultTheme.colors.secondary,
    success: defaultTheme.colors.success,
    warning: defaultTheme.colors.warning,
    error: defaultTheme.colors.error,
    info: defaultTheme.colors.info,
    background: defaultTheme.colors.background,
    surface: defaultTheme.colors.surface,
    text: defaultTheme.colors.text,
    textSecondary: defaultTheme.colors.textSecondary,
    border: defaultTheme.colors.border,
  },
  spacing: {
    s: defaultTheme.spacing.s,
    m: defaultTheme.spacing.m,
    l: defaultTheme.spacing.l,
  },
});

