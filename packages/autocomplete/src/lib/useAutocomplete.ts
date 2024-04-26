import React from 'react';
import type { AutocompleteNamespace } from './types';

export const useAutocomplete = (
  config: AutocompleteNamespace.AutocompleteProps
) => {
  const { onChange, options } = config;
  const [value, setValue] = React.useState<string>('');
  const [mounted, setMounted] = React.useState(false);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const isOpen = React.useMemo(
    () => mounted && !!options && options.length > 0,
    [options, mounted]
  );
  React.useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);
  return {
    inputRef,
    isOpen,
  };
};
