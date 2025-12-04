// Import CSS so vanilla-extract extracts it during build
// Note: Import without .ts extension - vite plugin resolves .css to .css.ts
import './lib/button.css';

export { Button } from './lib/button';
export type { ButtonNamespace } from './lib/types';

