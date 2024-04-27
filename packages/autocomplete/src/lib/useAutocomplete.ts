import React from 'react';
import type { AutocompleteNamespace } from './types';

export const useAutocomplete = (
  config: AutocompleteNamespace.AutocompleteProps
) => {
  const { options, onSelection } = config;
  const [isFocused, setFocused] = React.useState(false);
  const [value, setValue] = React.useState<number>(-1);
  const [mounted, setMounted] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const itemsRef = React.useRef<HTMLDivElement[]>([]);
  const isOpen = React.useMemo(
    () => mounted && !!options && options.length > 0 && isFocused,
    [options, mounted, isFocused]
  );
  const hasOptions = options && options.length > 0;
  React.useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);

  const onFocus = React.useCallback(() => {
    setFocused(true);
  }, []);

  const onBlur = React.useCallback((e: React.FocusEvent) => {
    const isEventRelatedToMenu = menuRef.current?.contains(e.relatedTarget);
    if (isEventRelatedToMenu) return;
    setFocused(false);
  }, []);

  const onClick = React.useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    setFocused(true);
  }, []);

  const onKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      const activeElement = document.activeElement as HTMLElement;
      if (!activeElement) return;
      if (activeElement === inputRef.current && event.code === 'ArrowDown') {
        return itemsRef.current[0]?.focus();
      }
      const { index, menuItem } = activeElement.dataset;      
      if (menuItem) {
        const i = Number(index);
        if (event.code === 'ArrowUp') {
          itemsRef.current[i - 1]?.focus();
        }
        if (event.code === 'ArrowDown') {
          itemsRef.current[i + 1]?.focus();
        }
      }
    },
    []
  );

  const handleSelect = React.useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const { index } = event.currentTarget.dataset;
      const selectedOption = options?.[Number(index)];
      if (selectedOption) onSelection(selectedOption);
      setValue(Number(index));
    },
    [options, onSelection]
  );

  const handleEnter = React.useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.code === 'Enter') {
        const { index } = event.currentTarget.dataset;
        const selectedOption = options?.[Number(index)];
        if (selectedOption) onSelection(selectedOption);
        setValue(Number(index));
      }
    },
    [options, onSelection]
  );

  const handleRef = React.useCallback((el: HTMLDivElement) => {
    if (!el) return;
    const { index } = el.dataset;
    itemsRef.current[Number(index)] = el;
  }, []);

  return {
    inputRef,
    menuRef,
    isOpen,
    value,
    hasOptions,
    onClick,
    onFocus,
    onBlur,
    onKeyDown,
    handleSelect,
    handleEnter,
    handleRef,
  };
};
