import styles from './autocomplete.module.css';
import type { AutocompleteNamespace } from './types';
import { useAutocomplete } from './useAutocomplete';
import { Menu } from '@centrodphlibs/menu';

export function Autocomplete(props: AutocompleteNamespace.AutocompleteProps) {
  const { className, onChange, options } = props;
  const { inputRef, isOpen } = useAutocomplete(props);
  console.log('inputRef', inputRef.current);
  return (
    <div className={`${styles['autocomplete-wrapper']} ${className ?? ''}`}>
      <input type="text" onChange={onChange} ref={inputRef} />
      <Menu isOpen={isOpen} triggerRef={inputRef} options={options} />
    </div>
  );
}

export default Autocomplete;
