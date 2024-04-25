import { MenuNamespace } from './types';
import styles from './menu.module.css';

export function Menu(props: MenuNamespace.MenuProps) {
  const { isOpen, triggerRef } = props;
  if (isOpen) return null;

  if (!triggerRef.current) return null;

  const { innerHeight } = window;
  const { top, width, bottom } = triggerRef.current.getBoundingClientRect();

  const remainingSpaceTop = top;
  const remainingSpaceBottom = innerHeight - bottom;
  const positionToOpen =
    remainingSpaceTop > remainingSpaceBottom ? 'bottom' : 'top';
  const valueToOpen = positionToOpen === 'top' ? bottom : innerHeight - top;

  return (
    <div
      className={`${styles['container']} ${styles[positionToOpen]}`}
      style={{
        [positionToOpen]: valueToOpen,
        width,
      }}
    >
      <p>positionToOpen = {positionToOpen}</p>
    </div>
  );
}

export default Menu;
