import { render } from '@testing-library/react';
import InlineLoader from '.';

describe('InlineLoader component', () => {
  it('renders properly', () => {
    const container = render(<InlineLoader>loader</InlineLoader>);
    expect(container.getByText(/loader/i)).toBeInTheDocument();
  });
});
