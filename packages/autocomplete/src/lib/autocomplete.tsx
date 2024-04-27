import styles from './autocomplete.module.css';
import type { AutocompleteNamespace } from './types';
import { useAutocomplete } from './useAutocomplete';
import { Menu } from '@centrodphlibs/menu';
import { Menuitem } from '@centrodphlibs/menuitem';
import { Highlight } from '@centrodphlibs/highlight';

export function Autocomplete(props: AutocompleteNamespace.AutocompleteProps) {
  const { className, onChange, options, search, isLoading } = props;
  const {
    inputRef,
    menuRef,
    isOpen,
    hasOptions,
    value,
    onFocus,
    onBlur,
    onKeyDown,
    handleSelect,
    handleEnter,
    handleRef,
  } = useAutocomplete(props);
  return (
    <div
      className={`${styles['autocomplete-wrapper']} ${className ?? ''}`}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
    >
      <input type="text" onChange={onChange} ref={inputRef} value={search} />
      <Menu
        ref={menuRef}
        onFocus={onFocus}
        isOpen={isOpen}
        triggerRef={inputRef}
      >
        {hasOptions ? (
          options?.map((option, index) => (
            <Menuitem
              key={option.value}
              value={option.value}
              data-index={index}
              data-menu-item="true"
              onClick={handleSelect}
              onKeyDown={handleEnter}
              selected={value === index}
              ref={handleRef}
            >
              <Highlight
                selection={String(search)}
                text={String(option.label)}
              />
            </Menuitem>
          ))
        ) : (
          <Menuitem value="" data-index={null}>
            No options available
          </Menuitem>
        )}
      </Menu>
      <div
        className={`${styles['autocomplete-loader']} ${
          isLoading ? styles['active'] : styles['hidden']
        }`}
      />
    </div>
  );
}

export default Autocomplete;
