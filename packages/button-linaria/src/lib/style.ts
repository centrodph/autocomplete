/**
 * Button component styles using Linaria
 * Provides zero-runtime CSS-in-JS with compile-time extraction
 */
import { css } from 'linaria';
import { themeTokens } from '@centrodphlibs/linaria-theme';

/**
 * Base button styles
 */
export const buttonBase = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: inherit;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
  outline: none;
  text-decoration: none;
  user-select: none;

  &:focus {
    outline: 2px solid ${themeTokens.colors.primary};
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
  }
`;

/**
 * Button variant styles
 */
export const buttonVariants = {
  primary: css`
    background-color: ${themeTokens.colors.primary};
    color: ${themeTokens.colors.background};

    &:hover:not(:disabled) {
      background-color: ${themeTokens.colors.secondary};
    }

    &:active:not(:disabled) {
      background-color: ${themeTokens.colors.textSecondary};
    }
  `,
  secondary: css`
    background-color: ${themeTokens.colors.secondary};
    color: ${themeTokens.colors.background};

    &:hover:not(:disabled) {
      background-color: ${themeTokens.colors.textSecondary};
    }

    &:active:not(:disabled) {
      background-color: ${themeTokens.colors.border};
    }
  `,
  outline: css`
    background-color: transparent;
    color: ${themeTokens.colors.primary};
    border: 2px solid ${themeTokens.colors.primary};

    &:hover:not(:disabled) {
      background-color: ${themeTokens.colors.surface};
    }

    &:active:not(:disabled) {
      background-color: ${themeTokens.colors.border};
    }
  `,
  ghost: css`
    background-color: transparent;
    color: ${themeTokens.colors.primary};

    &:hover:not(:disabled) {
      background-color: ${themeTokens.colors.surface};
    }

    &:active:not(:disabled) {
      background-color: ${themeTokens.colors.border};
    }
  `,
};

/**
 * Button size styles
 */
export const buttonSizes = {
  small: css`
    padding: ${themeTokens.spacing.m} ${themeTokens.spacing.l};
    font-size: 14px;
    min-height: 32px;
  `,
  medium: css`
    padding: ${themeTokens.spacing.l} calc(${themeTokens.spacing.l} * 5);
    font-size: 16px;
    min-height: 40px;
  `,
  large: css`
    padding: calc(${themeTokens.spacing.l} * 2.3) calc(${themeTokens.spacing.l} * 4.7);
    font-size: 18px;
    min-height: 48px;
  `,
};

