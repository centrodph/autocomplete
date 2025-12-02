# @centrodphlibs/autocomplete

React autocomplete component library.

## Installation

```bash
npm install @centrodphlibs/autocomplete
```

## Usage

CSS is **automatically included** when you import the component! No need to import CSS separately.

```tsx
import { Autocomplete } from '@centrodphlibs/autocomplete';

function App() {
  return (
    <Autocomplete
      options={options}
      search={search}
      onChange={handleChange}
      onSelection={handleSelection}
      isLoading={isLoading}
    />
  );
}
```

That's it! The styles are automatically injected when you import the component. Works in Vite, Webpack, and other bundlers, including Stackblitz.

## Running unit tests

Run `nx test autocomplete` to execute the unit tests via [Vitest](https://vitest.dev/).
