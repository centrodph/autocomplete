import { MenuNamespace } from './types';
import styles from './menu.module.css';
import { Menuitem } from '@centrodphlibs/menuitem';
import { useMenu } from './useMenu';

export function Menu(props: MenuNamespace.MenuProps) {
  const { triggerRef, options } = props;
  const { valueToOpen, isOpen, hasOptions, width, positionToOpen } =
    useMenu(props);
  if (!isOpen) return null;
  if (!triggerRef.current) return null;

  return (
    <div
      className={`${styles['menu-box-popup']}`}
      style={{
        [positionToOpen]: valueToOpen,
        width,
      }}
      role="listbox"
    >
      {hasOptions ? (
        options?.map((option) => <Menuitem key={option.value} {...option} />)
      ) : (
        <Menuitem label="No options available" value="" />
      )}
    </div>
  );
}

export default Menu;
