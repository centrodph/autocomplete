/**
 * Autocomplete component styles using vanilla-extract
 * Migrated from CSS modules for type-safe, zero-runtime CSS
 */
import { style, keyframes, globalStyle } from '@vanilla-extract/css';

/**
 * Global box-sizing reset
 */
globalStyle('*', {
  boxSizing: 'border-box',
});

/**
 * Infinite loop animation for the loading indicator
 */
export const infiniteLoop = keyframes({
  '0%': {
    backgroundSize: '200% 100%',
    backgroundPosition: 'left -30% top 0%',
  },
  '50%': {
    backgroundSize: '800% 100%',
    backgroundPosition: 'left -50% top 0%',
  },
  '100%': {
    backgroundSize: '400% 100%',
    backgroundPosition: 'left -100% top 0%',
  },
});

/**
 * Main autocomplete wrapper container
 */
export const autocompleteWrapper = style({
  width: '100%',
  position: 'relative',
});

/**
 * Global style for input within autocomplete wrapper
 */
globalStyle(`${autocompleteWrapper} input`, {
  padding: '3px 5px',
  border: 'solid 1px #ccc',
  width: '100%',
  borderRadius: 'none',
  outline: 'none',
});

globalStyle(`${autocompleteWrapper} input:focus`, {
  border: 'solid 2px #0b21b4',
});

/**
 * Loading indicator element
 */
export const autocompleteLoader = style({
  position: 'absolute',
  width: '100%',
  height: '4px',
  backgroundImage: `linear-gradient(to right, transparent 20%, #00bdf6 30%, #00bdf6 40%, transparent 50%, transparent 60%, #00bdf6 70%, #00bdf6 80%, transparent 80%)`,
  animation: `${infiniteLoop} 3s infinite linear`,
});

/**
 * Hidden state utility class
 */
export const hidden = style({
  visibility: 'hidden',
});

/**
 * Active state utility class
 */
export const active = style({
  visibility: 'initial',
});

