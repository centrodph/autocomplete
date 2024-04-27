import { render } from '@testing-library/react';

import Highlight from './highlight';

describe('Highlight', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Highlight text="Lorem ipsum" selection="ip" />
    );
    expect(baseElement).toBeTruthy();
  });
});
