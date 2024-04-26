import { MenuNamespace } from './types';
import styles from './menu.module.css';
import { Menuitem } from '@centrodphlibs/menuitem';
import { useMenu } from './useMenu';

export function Menu(props: MenuNamespace.MenuProps) {
  const { triggerRef, options, menuRef, ...rest } = props;
  const { valueToOpen, isOpen, hasOptions, width, positionToOpen, maxHeight } =
    useMenu(props);
  if (!isOpen) return null;
  if (!triggerRef.current) return null;

  return (
    <div
      ref={menuRef}
      className={`${styles['menu-box-popup']}`}
      style={{
        [positionToOpen]: valueToOpen,
        width,
        maxHeight,
      }}
      role="listbox"
      {...rest}
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
