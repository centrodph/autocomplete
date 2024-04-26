import { MenuItemNamespace } from './types';
import styles from './menuitem.module.css';

export const Menuitem = (props: MenuItemNamespace.MenuOption) => {
  const { label, value, selected, ...rest } = props;
  return (
    <div
      className={styles['menu-item']}
      {...rest}
      tabIndex={0}
      role="option"
      aria-selected={selected}
    >
      {label}
    </div>
  );
};

export default Menuitem;
