/**
 * Theme namespace containing all theme-related types and interfaces.
 */
export namespace ThemeNamespace {
  /**
   * Spacing unit values in pixels.
   * - s: Small spacing (2px)
   * - m: Medium spacing (4px)
   * - l: Large spacing (6px)
   */
  export type SpacingUnit = 's' | 'm' | 'l';

  /**
   * Spacing values mapped to pixel values.
   */
  export interface Spacing {
    /** Small spacing unit: 2px */
    s: string;
    /** Medium spacing unit: 4px */
    m: string;
    /** Large spacing unit: 6px */
    l: string;
  }

  /**
   * Color palette for the theme.
   */
  export interface Colors {
    /** Primary color for main actions and highlights */
    primary: string;
    /** Secondary color for secondary actions */
    secondary: string;
    /** Success color for positive feedback */
    success: string;
    /** Warning color for cautionary messages */
    warning: string;
    /** Error color for errors and destructive actions */
    error: string;
    /** Info color for informational messages */
    info: string;
    /** Background color for main content areas */
    background: string;
    /** Surface color for cards and elevated elements */
    surface: string;
    /** Text color for primary content */
    text: string;
    /** Text color for secondary/less important content */
    textSecondary: string;
    /** Border color for dividers and borders */
    border: string;
  }

  /**
   * Complete theme object containing colors and spacing units.
   */
  export interface Theme {
    /** Color palette */
    colors: Colors;
    /** Spacing units */
    spacing: Spacing;
  }
}

