import styles from './autocomplete.module.css';
import type { AutocompleteNamespace } from './types';
import { useAutocomplete } from './useAutocomplete';
import { Menu } from '@centrodphlibs/menu';

export function Autocomplete(props: AutocompleteNamespace.AutocompleteProps) {
  const { className, onChange, options, search, isLoading } = props;
  const { inputRef, menuRef, isOpen, onFocus, onBlur, onKeyDown } =
    useAutocomplete(props);
  return (
    <div
      className={`${styles['autocomplete-wrapper']} ${className ?? ''}`}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <input
        type="text"
        onChange={onChange}
        ref={inputRef}
        value={search}
        onKeyDown={onKeyDown}
      />
      <Menu
        menuRef={menuRef}
        onFocus={onFocus}
        isOpen={isOpen}
        triggerRef={inputRef}
        options={options}
      />
      <div
        className={`${styles['autocomplete-loader']} ${
          isLoading ? styles['active'] : styles['hidden']
        }`}
      />
    </div>
  );
}

export default Autocomplete;
