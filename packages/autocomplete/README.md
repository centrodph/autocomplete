# @centrodphlibs/autocomplete

React autocomplete component library.

## Installation

```bash
npm install @centrodphlibs/autocomplete
```

## Usage

### Option 1: Import CSS in JavaScript/TypeScript (Recommended)

```tsx
import { Autocomplete } from '@centrodphlibs/autocomplete';
import '@centrodphlibs/autocomplete/style.css';

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

**Note:** If Vite is not processing the CSS import, make sure your `vite.config.js` includes the React plugin:

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
```

### Option 2: Import CSS from your CSS file

You can also import the CSS in your main CSS file:

```css
/* In your main.css or styles.css */
@import '@centrodphlibs/autocomplete/style.css';
```

Then in your component:

```tsx
import { Autocomplete } from '@centrodphlibs/autocomplete';
// CSS is already imported via your main CSS file

function App() {
  return <Autocomplete {...props} />;
}
```

**Important:** The CSS file must be imported for the component to display correctly. If Vite is not processing CSS imports from `node_modules`, ensure your Vite config has the React plugin enabled.

## Running unit tests

Run `nx test autocomplete` to execute the unit tests via [Vitest](https://vitest.dev/).
