import type { ThemeNamespace } from './types';

/**
 * Default theme configuration with colors and spacing units.
 * This theme provides a basic color palette and spacing system.
 */
export const defaultTheme: ThemeNamespace.Theme = {
  colors: {
    primary: '#0b21b4',
    secondary: '#6b7280',
    success: '#10b981',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
    background: '#ffffff',
    surface: '#f9fafb',
    text: '#111827',
    textSecondary: '#6b7280',
    border: '#e5e7eb',
  },
  spacing: {
    s: '2px',
    m: '4px',
    l: '6px',
  },
};

