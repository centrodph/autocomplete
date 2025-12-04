import React from 'react';
import { ButtonNamespace } from './types';
import { buttonVariants, buttonSizes } from './button.css';

/**
 * Button component with variants and sizes
 * Uses vanilla-extract for type-safe styling
 */
export const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonNamespace.ButtonProps
>((props: ButtonNamespace.ButtonProps, ref) => {
  const {
    variant = 'primary',
    size = 'medium',
    disabled = false,
    className = '',
    children,
    ...rest
  } = props;

  /**
   * Combine variant, size, and custom className
   */
  const combinedClassName = [
    buttonVariants[variant],
    buttonSizes[size],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      ref={ref}
      className={combinedClassName}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;

