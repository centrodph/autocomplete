/**
 * Vanilla-extract theme tokens based on @centrodphlibs/theme
 * Creates CSS variables using vanilla-extract's createGlobalTheme API
 */
import { createGlobalTheme, createThemeContract } from '@vanilla-extract/css';
import { defaultTheme } from '@centrodphlibs/theme';

/**
 * Global theme contract defining CSS variable names
 * This contract ensures type safety when accessing theme tokens
 * createThemeContract creates a contract structure that createGlobalTheme expects
 */
export const themeContract = createThemeContract({
  colors: {
    primary: null,
    secondary: null,
    success: null,
    warning: null,
    error: null,
    info: null,
    background: null,
    surface: null,
    text: null,
    textSecondary: null,
    border: null,
  },
  spacing: {
    s: null,
    m: null,
    l: null,
  },
});

/**
 * Global theme variables created from defaultTheme
 * These CSS variables are available globally and can be consumed by components
 * createGlobalTheme creates CSS variables in :root and returns an object with CSS variable references
 */
export const theme = createGlobalTheme(':root', themeContract, defaultTheme);

