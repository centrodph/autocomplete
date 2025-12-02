import React from 'react';
import { MenuItemNamespace } from './types';
import * as styles from './menuitem.css';

export const Menuitem = React.forwardRef<
  HTMLDivElement,
  MenuItemNamespace.MenuOptionProps
>((props: MenuItemNamespace.MenuOptionProps, ref) => {
  const { value, selected, children, ...rest } = props;
  return (
    <div
      className={styles.menuItem}
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
