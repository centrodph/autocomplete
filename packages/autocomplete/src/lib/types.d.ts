import { MenuItemNamespace } from 'packages/menuitem/src/lib/types';
import React from 'react';

export declare namespace AutocompleteNamespace {
  export interface AutocompleteProps {
    className?: string;
    options: MenuItemNamespace.MenuOption[] | null;
    onSelect: (item: AutocompleteOption) => void;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }
}
