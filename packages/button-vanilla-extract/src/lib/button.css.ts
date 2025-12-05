/**
 * Button component styles using vanilla-extract
 * Provides type-safe, zero-runtime CSS for button variants and sizes
 */
import { style, styleVariants } from '@vanilla-extract/css';
import { themeTokens } from '@centrodphlibs/vanilla-extract-theme';

/**
 * Base button style with common properties
 */
const buttonBase = style({
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  fontFamily: 'inherit',
  fontWeight: 500,
  transition: 'all 0.2s ease-in-out',
  outline: 'none',
  textDecoration: 'none',
  userSelect: 'none',
  ':focus': {
    outline: `2px solid ${themeTokens.colors.primary}`,
    outlineOffset: '2px',
  },
  ':disabled': {
    opacity: 0.5,
    cursor: 'not-allowed',
    pointerEvents: 'none',
  },
});

/**
 * Button variant styles
 */
export const buttonVariants = styleVariants({
  primary: [
    buttonBase,
    {
      backgroundColor: themeTokens.colors.primary,
      color: themeTokens.colors.background,
      ':hover': {
        backgroundColor: themeTokens.colors.secondary,
      },
      ':active': {
        backgroundColor: themeTokens.colors.textSecondary,
      },
    },
  ],
  secondary: [
    buttonBase,
    {
      backgroundColor: themeTokens.colors.secondary,
      color: themeTokens.colors.background,
      ':hover': {
        backgroundColor: themeTokens.colors.textSecondary,
      },
      ':active': {
        backgroundColor: themeTokens.colors.border,
      },
    },
  ],
  outline: [
    buttonBase,
    {
      backgroundColor: 'transparent',
      color: themeTokens.colors.primary,
      border: `2px solid ${themeTokens.colors.primary}`,
      ':hover': {
        backgroundColor: themeTokens.colors.surface,
      },
      ':active': {
        backgroundColor: themeTokens.colors.border,
      },
    },
  ],
  ghost: [
    buttonBase,
    {
      backgroundColor: 'transparent',
      color: themeTokens.colors.primary,
      ':hover': {
        backgroundColor: themeTokens.colors.surface,
      },
      ':active': {
        backgroundColor: themeTokens.colors.border,
      },
    },
  ],
});

/**
 * Button size styles
 */
export const buttonSizes = styleVariants({
  small: {
    padding: `${themeTokens.spacing.m} ${themeTokens.spacing.l}`,
    fontSize: '14px',
    minHeight: '32px',
  },
  medium: {
    padding: `${themeTokens.spacing.l} calc(${themeTokens.spacing.l} * 5)`,
    fontSize: '16px',
    minHeight: '40px',
  },
  large: {
    padding: `calc(${themeTokens.spacing.l} * 2.3) calc(${themeTokens.spacing.l} * 4.7)`,
    fontSize: '18px',
    minHeight: '48px',
  },
});

