import { MenuItemNamespace } from 'packages/menuitem/src/lib/types';

export declare namespace MenuNamespace {
  export interface MenuProps {
    triggerRef: React.RefObject<HTMLInputElement>;
    options: MenuItemNamespace.MenuOption[] | null;
    isOpen: boolean;
  }
}
