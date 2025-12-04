/**
 * Button component styles using vanilla-extract
 * Provides type-safe, zero-runtime CSS for button variants and sizes
 */
import { style, styleVariants } from '@vanilla-extract/css';

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
    outline: '2px solid #0b21b4',
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
      backgroundColor: '#0b21b4',
      color: '#ffffff',
      ':hover': {
        backgroundColor: '#0a1a9a',
      },
      ':active': {
        backgroundColor: '#081580',
      },
    },
  ],
  secondary: [
    buttonBase,
    {
      backgroundColor: '#6c757d',
      color: '#ffffff',
      ':hover': {
        backgroundColor: '#5a6268',
      },
      ':active': {
        backgroundColor: '#484f54',
      },
    },
  ],
  outline: [
    buttonBase,
    {
      backgroundColor: 'transparent',
      color: '#0b21b4',
      border: '2px solid #0b21b4',
      ':hover': {
        backgroundColor: '#f0f4ff',
      },
      ':active': {
        backgroundColor: '#e0e9ff',
      },
    },
  ],
  ghost: [
    buttonBase,
    {
      backgroundColor: 'transparent',
      color: '#0b21b4',
      ':hover': {
        backgroundColor: '#f0f4ff',
      },
      ':active': {
        backgroundColor: '#e0e9ff',
      },
    },
  ],
});

/**
 * Button size styles
 */
export const buttonSizes = styleVariants({
  small: {
    padding: '6px 12px',
    fontSize: '14px',
    minHeight: '32px',
  },
  medium: {
    padding: '10px 20px',
    fontSize: '16px',
    minHeight: '40px',
  },
  large: {
    padding: '14px 28px',
    fontSize: '18px',
    minHeight: '48px',
  },
});

