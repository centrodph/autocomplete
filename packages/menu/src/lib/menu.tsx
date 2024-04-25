import { MenuNamespace } from './types';
import styles from './menu.module.css';

export function Menu(props: MenuNamespace.MenuProps) {
  const { isOpen, triggerRef } = props;

  console.log(isOpen, triggerRef.current);
  if (isOpen) return null;

  if (!triggerRef.current) return null;

  const { innerHeight, innerWidth } = window;
  const { top, left, width, right } =
    triggerRef.current.getBoundingClientRect();

  console.log('innerHeight', innerHeight);
  console.log('innerWidth', innerWidth);
  console.log('top', top);
  console.log('left', left);
  console.log('width', width);
  console.log('right', right);

  return (
    <div className={styles['container']}>
      <h1>Welcome to Menu!</h1>
    </div>
  );
}

export default Menu;
