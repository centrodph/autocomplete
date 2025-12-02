/**
 * Menu component styles using vanilla-extract
 * Migrated from CSS modules for type-safe, zero-runtime CSS
 */
import { style } from '@vanilla-extract/css';

/**
 * Menu popup container style
 */
export const menuBoxPopup = style({
  position: 'fixed',
  background: 'white',
  borderRadius: '2px',
  border: 'solid 1px lightgray',
  marginTop: '2px',
  marginBottom: '2px',
  overflow: 'auto',
  selectors: {
    '&:last-child': {
      borderBottom: 'none',
    },
  },
});

