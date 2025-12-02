/**
 * Highlight component styles using vanilla-extract
 * Migrated from CSS modules for type-safe, zero-runtime CSS
 */
import { style } from '@vanilla-extract/css';

/**
 * Highlight style for matched text
 */
export const highlight = style({
  backgroundColor: 'rgba(3, 165, 44, 0.4)',
  padding: '1px',
  borderRadius: '2px',
});

