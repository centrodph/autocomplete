import React from 'react';
import * as ReactDOM from 'react-dom';
import { MenuNamespace } from './types';
import styles from './menu.module.css';
import { useMenu } from './useMenu';

export const Menu = React.forwardRef<HTMLDivElement, MenuNamespace.MenuProps>(
  (props: MenuNamespace.MenuProps, ref) => {
    const { triggerRef, isOpen, children, ...rest } = props;
    const { valueToOpen, width, positionToOpen, maxHeight, left } =
      useMenu(props);
    if (!isOpen) return null;
    if (!triggerRef.current) return null;

    return ReactDOM.createPortal(
      <div
        ref={ref}
        className={`${styles['menu-box-popup']}`}
        style={{
          [positionToOpen]: valueToOpen,
          width,
          maxHeight,
          left,
        }}
        role="listbox"
        {...rest}
      >
        {children}
      </div>,
      document.body
    );
  }
);

export default Menu;
