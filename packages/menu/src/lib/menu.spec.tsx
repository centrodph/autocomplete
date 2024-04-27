import React from 'react';
import { render } from '@testing-library/react';

import Menu from './menu';

describe('Menu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Menu
        isOpen
        triggerRef={
          {
            current: {
              getBoundingClientRect: () => ({
                top: 220,
                left: 0,
                bottom: 240,
              }),
            },
          } as React.RefObject<HTMLInputElement>
        }
      >
        <div>Option 1</div>
        <div>Option 2</div>
      </Menu>
    );
    expect(baseElement).toBeTruthy();
  });
});
