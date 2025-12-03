# @centrodphlibs/highlight

React highlight component library for highlighting text matches.

## Installation

```bash
npm install @centrodphlibs/highlight
```

## Usage

Simply import the component - **CSS styles are automatically injected**! No need to import CSS separately.

```tsx
import { Highlight } from '@centrodphlibs/highlight';

function App() {
  return (
    <Highlight
      text="Hello World"
      search="World"
      selection="World"
    />
  );
}
```

That's it! The styles are automatically injected when you import the component. Works in all modern environments including Vite, Webpack, Parcel, and even in browser environments without a bundler.

## Running unit tests

Run `nx test highlight` to execute the unit tests via [Vitest](https://vitest.dev/).
