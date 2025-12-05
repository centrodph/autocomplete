/**
 * Vanilla-extract theme package exports.
 * This package provides vanilla-extract theme tokens based on @centrodphlibs/theme
 */

// Import CSS so vanilla-extract extracts it during build
// Note: Import without .ts extension - vite plugin resolves .css to .css.ts
import './lib/theme.css';

// Export theme (returned by createGlobalTheme) and theme contract
export { theme, themeContract, utilities } from './lib/theme.css';

// Export theme tokens for convenient access
export { themeTokens } from './lib/themeTokens';

// Note: Utility classes are created as global styles and are automatically available
// when this package is imported. Use them as string class names:
// - Padding: "p-s", "p-m", "p-l", "px-s", "py-s", "pt-s", "pb-s", "pl-s", "pr-s", etc.
// - Margin: "m-s", "m-m", "m-l", "mx-s", "my-s", "mt-s", "mb-s", "ml-s", "mr-s", etc.
// - Colors: "text-primary", "text-secondary", "text-success", etc.
// - Backgrounds: "bg-primary", "bg-secondary", "bg-success", etc.

