import { render } from '@testing-library/react';

import Highlight from './highlight';

describe('Highlight', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Highlight />);
    expect(baseElement).toBeTruthy();
  });
});
