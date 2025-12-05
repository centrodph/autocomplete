/**
 * Vanilla-extract theme tokens based on @centrodphlibs/theme
 * Creates CSS variables using vanilla-extract's createGlobalTheme API
 */
import { createGlobalTheme, createThemeContract, style } from '@vanilla-extract/css';
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

/**
 * Padding utility classes
 * Provides padding utilities for all sides and spacing units
 */
export const paddingUtilities = {
  // All sides padding
  pS: style({ padding: themeContract.spacing.s }),
  pM: style({ padding: themeContract.spacing.m }),
  pL: style({ padding: themeContract.spacing.l }),
  
  // Horizontal padding (left and right)
  pxS: style({ paddingLeft: themeContract.spacing.s, paddingRight: themeContract.spacing.s }),
  pxM: style({ paddingLeft: themeContract.spacing.m, paddingRight: themeContract.spacing.m }),
  pxL: style({ paddingLeft: themeContract.spacing.l, paddingRight: themeContract.spacing.l }),
  
  // Vertical padding (top and bottom)
  pyS: style({ paddingTop: themeContract.spacing.s, paddingBottom: themeContract.spacing.s }),
  pyM: style({ paddingTop: themeContract.spacing.m, paddingBottom: themeContract.spacing.m }),
  pyL: style({ paddingTop: themeContract.spacing.l, paddingBottom: themeContract.spacing.l }),
  
  // Top padding
  ptS: style({ paddingTop: themeContract.spacing.s }),
  ptM: style({ paddingTop: themeContract.spacing.m }),
  ptL: style({ paddingTop: themeContract.spacing.l }),
  
  // Bottom padding
  pbS: style({ paddingBottom: themeContract.spacing.s }),
  pbM: style({ paddingBottom: themeContract.spacing.m }),
  pbL: style({ paddingBottom: themeContract.spacing.l }),
  
  // Left padding
  plS: style({ paddingLeft: themeContract.spacing.s }),
  plM: style({ paddingLeft: themeContract.spacing.m }),
  plL: style({ paddingLeft: themeContract.spacing.l }),
  
  // Right padding
  prS: style({ paddingRight: themeContract.spacing.s }),
  prM: style({ paddingRight: themeContract.spacing.m }),
  prL: style({ paddingRight: themeContract.spacing.l }),
};

/**
 * Margin utility classes
 * Provides margin utilities for all sides and spacing units
 */
export const marginUtilities = {
  // All sides margin
  mS: style({ margin: themeContract.spacing.s }),
  mM: style({ margin: themeContract.spacing.m }),
  mL: style({ margin: themeContract.spacing.l }),
  
  // Horizontal margin (left and right)
  mxS: style({ marginLeft: themeContract.spacing.s, marginRight: themeContract.spacing.s }),
  mxM: style({ marginLeft: themeContract.spacing.m, marginRight: themeContract.spacing.m }),
  mxL: style({ marginLeft: themeContract.spacing.l, marginRight: themeContract.spacing.l }),
  
  // Vertical margin (top and bottom)
  myS: style({ marginTop: themeContract.spacing.s, marginBottom: themeContract.spacing.s }),
  myM: style({ marginTop: themeContract.spacing.m, marginBottom: themeContract.spacing.m }),
  myL: style({ marginTop: themeContract.spacing.l, marginBottom: themeContract.spacing.l }),
  
  // Top margin
  mtS: style({ marginTop: themeContract.spacing.s }),
  mtM: style({ marginTop: themeContract.spacing.m }),
  mtL: style({ marginTop: themeContract.spacing.l }),
  
  // Bottom margin
  mbS: style({ marginBottom: themeContract.spacing.s }),
  mbM: style({ marginBottom: themeContract.spacing.m }),
  mbL: style({ marginBottom: themeContract.spacing.l }),
  
  // Left margin
  mlS: style({ marginLeft: themeContract.spacing.s }),
  mlM: style({ marginLeft: themeContract.spacing.m }),
  mlL: style({ marginLeft: themeContract.spacing.l }),
  
  // Right margin
  mrS: style({ marginRight: themeContract.spacing.s }),
  mrM: style({ marginRight: themeContract.spacing.m }),
  mrL: style({ marginRight: themeContract.spacing.l }),
};

/**
 * Color utility classes
 * Provides text color utilities for all theme colors
 */
export const colorUtilities = {
  // Text color utilities
  textPrimary: style({ color: themeContract.colors.primary }),
  textSecondary: style({ color: themeContract.colors.secondary }),
  textSuccess: style({ color: themeContract.colors.success }),
  textWarning: style({ color: themeContract.colors.warning }),
  textError: style({ color: themeContract.colors.error }),
  textInfo: style({ color: themeContract.colors.info }),
  textBackground: style({ color: themeContract.colors.background }),
  textSurface: style({ color: themeContract.colors.surface }),
  textText: style({ color: themeContract.colors.text }),
  textTextSecondary: style({ color: themeContract.colors.textSecondary }),
  textBorder: style({ color: themeContract.colors.border }),
};

/**
 * Background utility classes
 * Provides background color utilities for all theme colors
 */
export const backgroundUtilities = {
  // Background color utilities
  bgPrimary: style({ backgroundColor: themeContract.colors.primary }),
  bgSecondary: style({ backgroundColor: themeContract.colors.secondary }),
  bgSuccess: style({ backgroundColor: themeContract.colors.success }),
  bgWarning: style({ backgroundColor: themeContract.colors.warning }),
  bgError: style({ backgroundColor: themeContract.colors.error }),
  bgInfo: style({ backgroundColor: themeContract.colors.info }),
  bgBackground: style({ backgroundColor: themeContract.colors.background }),
  bgSurface: style({ backgroundColor: themeContract.colors.surface }),
  bgText: style({ backgroundColor: themeContract.colors.text }),
  bgTextSecondary: style({ backgroundColor: themeContract.colors.textSecondary }),
  bgBorder: style({ backgroundColor: themeContract.colors.border }),
};

/**
 * Combined utilities object for convenient access to all utility classes
 * This object groups all utility classes together for easier imports
 */
export const utilities = {
  ...paddingUtilities,
  ...marginUtilities,
  ...colorUtilities,
  ...backgroundUtilities,
};

