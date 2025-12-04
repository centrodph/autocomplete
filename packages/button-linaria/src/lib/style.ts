/**
 * Button component styles using Linaria
 * Provides zero-runtime CSS-in-JS with compile-time extraction
 */
import { css } from 'linaria';

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
    outline: 2px solid #0b21b4;
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
    background-color: #0b21b4;
    color: #ffffff;

    &:hover:not(:disabled) {
      background-color: #0a1a9a;
    }

    &:active:not(:disabled) {
      background-color: #081580;
    }
  `,
  secondary: css`
    background-color: #6c757d;
    color: #ffffff;

    &:hover:not(:disabled) {
      background-color: #5a6268;
    }

    &:active:not(:disabled) {
      background-color: #484f54;
    }
  `,
  outline: css`
    background-color: transparent;
    color: #0b21b4;
    border: 2px solid #0b21b4;

    &:hover:not(:disabled) {
      background-color: #f0f4ff;
    }

    &:active:not(:disabled) {
      background-color: #e0e9ff;
    }
  `,
  ghost: css`
    background-color: transparent;
    color: #0b21b4;

    &:hover:not(:disabled) {
      background-color: #f0f4ff;
    }

    &:active:not(:disabled) {
      background-color: #e0e9ff;
    }
  `,
};

/**
 * Button size styles
 */
export const buttonSizes = {
  small: css`
    padding: 6px 12px;
    font-size: 14px;
    min-height: 32px;
  `,
  medium: css`
    padding: 10px 20px;
    font-size: 16px;
    min-height: 40px;
  `,
  large: css`
    padding: 14px 28px;
    font-size: 18px;
    min-height: 48px;
  `,
};

