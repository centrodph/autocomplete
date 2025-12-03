# @centrodphlibs/menu

React menu component library for displaying popup menus.

## Installation

```bash
npm install @centrodphlibs/menu
```

## Usage

Simply import the component - **CSS styles are automatically injected**! No need to import CSS separately.

```tsx
import { Menu } from '@centrodphlibs/menu';

function App() {
  return (
    <Menu
      options={options}
      onSelection={handleSelection}
    />
  );
}
```

That's it! The styles are automatically injected when you import the component. Works in all modern environments including Vite, Webpack, Parcel, and even in browser environments without a bundler.

## Running unit tests

Run `nx test menu` to execute the unit tests via [Vitest](https://vitest.dev/).
