import { render } from '@testing-library/react';

import Autocomplete from './autocomplete';
import { vi } from 'vitest';

const mock = vi.fn().mockImplementation(console.log);
describe('Autocomplete', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Autocomplete onSelection={mock} options={[]} />
    );
    expect(baseElement).toBeTruthy();
  });
});
