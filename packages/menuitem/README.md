# @centrodphlibs/menuitem

React menu item component library for individual menu items.

## Installation

```bash
npm install @centrodphlibs/menuitem
```

## Usage

Simply import the component - **CSS styles are automatically injected**! No need to import CSS separately.

```tsx
import { Menuitem } from '@centrodphlibs/menuitem';

function App() {
  return (
    <Menuitem
      value="option1"
      selected={false}
    >
      Option 1
    </Menuitem>
  );
}
```

That's it! The styles are automatically injected when you import the component. Works in all modern environments including Vite, Webpack, Parcel, and even in browser environments without a bundler.

## Running unit tests

Run `nx test menuitem` to execute the unit tests via [Vitest](https://vitest.dev/).
