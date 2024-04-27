import React from 'react';
import styles from './app.module.css';
import { Autocomplete } from '@centrodphlibs/autocomplete';
import { useAppDemo } from './useAppDemo';

export function App() {
  const {
    options,
    onSelection,
    onSearch,
    search,
    error,
    isLoading,
    selectedOption,
  } = useAppDemo();

  return (
    <>
      <div className={styles['layout-wrapper']}>
        <div className={styles['layout-top-left']}>
          <h1>Search books</h1>
          <Autocomplete
            options={options}
            search={search}
            onChange={onSearch}
            onSelection={onSelection}
            isLoading={isLoading}
          />
          <p>
            Selected option:{' '}
            {selectedOption ? JSON.stringify(selectedOption) : ' not selected'}
          </p>
        </div>
        <div className={styles['layout-top-right']}>
          <div style={{ width: 220 }}>
            <p>Only 10 options</p>
            <Autocomplete
              options={options?.slice(0, 10) ?? null}
              search={search}
              onChange={onSearch}
              onSelection={onSelection}
              isLoading={isLoading}
            />
          </div>
        </div>
        <div className={styles['layout-bottom-left']}>
          <Autocomplete
            options={options?.slice(0, 10) ?? null}
            search={search}
            onChange={onSearch}
            onSelection={onSelection}
            isLoading={isLoading}
          />
          <p>Only 10 options</p>
        </div>
        <div className={styles['layout-bottom-right']}>
          <Autocomplete
            options={options}
            search={search}
            onChange={onSearch}
            onSelection={onSelection}
            isLoading={isLoading}
          />
        </div>
      </div>
      {error ? <div className={styles['layout-error']}>{error}</div> : null}
    </>
  );
}

export default App;
