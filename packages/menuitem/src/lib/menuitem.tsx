import { MenuItemNamespace } from './types';
import styles from './menuitem.module.css';

export function Menuitem(props: MenuItemNamespace.MenuOption) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Menuitem!</h1>
    </div>
  );
}

export default Menuitem;
