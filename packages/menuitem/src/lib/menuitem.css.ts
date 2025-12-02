/**
 * Menu item component styles using vanilla-extract
 * Migrated from CSS modules for type-safe, zero-runtime CSS
 */
import { style } from '@vanilla-extract/css';

/**
 * Menu item base style
 */
export const menuItem = style({
  borderBottom: 'solid 1px lightgray',
  padding: '0.2rem 0.5rem',
  cursor: 'pointer',
  selectors: {
    '&:hover': {
      backgroundColor: 'rgba(11, 176, 222, 0.1)',
    },
    '&[aria-selected="true"]': {
      backgroundColor: 'rgba(11, 176, 222, 0.3)',
    },
  },
});

