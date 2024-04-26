import { MenuItemNamespace } from 'packages/menuitem/src/lib/types';
import React from 'react';

export declare namespace MenuNamespace {
  export interface MenuProps extends React.HTMLAttributes<HTMLDivElement> {
    triggerRef: React.RefObject<HTMLInputElement>;
    menuRef: React.RefObject<HTMLDivElement>;
    options: MenuItemNamespace.MenuOption[] | null;
    isOpen: boolean;
  }
}
