import React from 'react';
import { MenuItemNamespace } from './types';
import styles from './menuitem.module.css';

export const Menuitem = React.forwardRef<
  HTMLDivElement,
  MenuItemNamespace.MenuOptionProps
>((props: MenuItemNamespace.MenuOptionProps, ref) => {
  const { value, selected, children, ...rest } = props;
  return (
    <div
      className={styles['menu-item']}
      {...rest}
      tabIndex={-1}
      role="option"
      aria-selected={selected}
      ref={ref}
    >
      {children}
    </div>
  );
});

export default Menuitem;
