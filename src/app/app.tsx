import React from 'react';
import styles from './app.module.css';
import { Autocomplete } from '@centrodphlibs/autocomplete';
import type { AutocompleteNamespace } from '@centrodphlibs/autocomplete';

export function App() {
  const [options, setOptions] =
    React.useState<AutocompleteNamespace.AutocompleteProps['options']>(null);
  const [selectedOption, setSelectedOption] =
    React.useState<AutocompleteNamespace.AutocompleteOption | null>(null);
  return (
    <div className={styles['layout-wrapper']}>
      <div className={styles['layout-top-left']}>
        <Autocomplete options={options} onSelect={setSelectedOption} />
      </div>
      <div className={styles['layout-top-right']}>
        <div style={{ width: 220 }}>
          <Autocomplete options={options} onSelect={setSelectedOption} />
        </div>
      </div>
      <div className={styles['layout-bottom-left']}>
        <Autocomplete options={options} onSelect={setSelectedOption} />
      </div>
      <div className={styles['layout-bottom-right']}>
        <Autocomplete options={options} onSelect={setSelectedOption} />
      </div>
    </div>
  );
}

export default App;
