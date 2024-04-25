import React from 'react';
import { Autocomplete } from '@centrodphlibs/autocomplete';
import type { AutocompleteNamespace } from '@centrodphlibs/autocomplete';

export function App() {
  const [options, setOptions] =
    React.useState<AutocompleteNamespace.AutocompleteProps['options']>(null);
  const [selectedOption, setSelectedOption] =
    React.useState<AutocompleteNamespace.AutocompleteOption | null>(null);
  return (
    <div>
      test
      <Autocomplete options={options} onSelect={setSelectedOption} />
    </div>
  );
}

export default App;
