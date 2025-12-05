/**
 * Vanilla-extract theme package exports.
 * This package provides vanilla-extract theme tokens based on @centrodphlibs/theme
 */

// Import CSS so vanilla-extract extracts it during build
// Note: Import without .ts extension - vite plugin resolves .css to .css.ts
import './lib/theme.css';

// Export theme and theme contract
export { theme, themeContract } from './lib/theme.css';

// Export theme tokens for convenient access
export { themeTokens } from './lib/themeTokens';

