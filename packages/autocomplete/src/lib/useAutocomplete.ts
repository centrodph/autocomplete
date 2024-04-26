import React from 'react';
import type { AutocompleteNamespace } from './types';

export const useAutocomplete = (
  config: AutocompleteNamespace.AutocompleteProps
) => {
  const { options, search } = config;
  const [isFocused, setFocused] = React.useState(false);
  const [value] = React.useState<string>(search ?? '');
  const [mounted, setMounted] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const menuRef = React.useRef<HTMLDivElement>(null);
  const isOpen = React.useMemo(
    () => mounted && !!options && options.length > 0 && isFocused,
    [options, mounted, isFocused]
  );

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
      console.log(event.code);
    },
    []
  );

  return {
    inputRef,
    menuRef,
    isOpen,
    value,
    onClick,
    onFocus,
    onBlur,
    onKeyDown,
  };
};
