import React from 'react';
import styles from './app.module.css';
import { Autocomplete } from '@centrodphlibs/autocomplete';
import { useAppDemo } from './useAppDemo';

export function App() {
  const { options, setSelectedOption } = useAppDemo();

  return (
    <div className={styles['layout-wrapper']}>
      <div className={styles['layout-top-left']}>
        <Autocomplete options={options} onSelect={setSelectedOption} />
      </div>
      <div className={styles['layout-top-right']}>
        <div style={{ width: 220 }}>
          {/* <Autocomplete options={options} onSelect={setSelectedOption} /> */}
        </div>
      </div>
      <div className={styles['layout-bottom-left']}>
        {/* <Autocomplete options={options} onSelect={setSelectedOption} /> */}
      </div>
      <div className={styles['layout-bottom-right']}>
        {/* <Autocomplete options={options} onSelect={setSelectedOption} /> */}
      </div>
    </div>
  );
}

export default App;
