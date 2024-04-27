import type { MenuItemNamespace } from '@centrodphlibs/menuitem';
import React from 'react';

export declare namespace AutocompleteNamespace {
  export type AutocompleteOption = MenuItemNamespace.MenuOption;
  export interface AutocompleteProps {
    className?: string;
    options: MenuItemNamespace.MenuOption[] | null;
    onSelection: (item: AutocompleteOption) => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    search?: string;
    isLoading?: boolean;
  }
}
