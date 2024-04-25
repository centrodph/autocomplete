import { render } from '@testing-library/react';

import Menuitem from './menuitem';

describe('Menuitem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Menuitem />);
    expect(baseElement).toBeTruthy();
  });
});
