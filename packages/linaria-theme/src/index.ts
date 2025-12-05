/**
 * Linaria theme package exports.
 * This package provides Linaria theme tokens based on @centrodphlibs/theme
 */

// Import theme CSS so Linaria extracts it during build
import './lib/theme';

// Export theme variables
export { themeVariables } from './lib/theme';

// Export theme tokens for convenient access
export { themeTokens } from './lib/themeTokens';

