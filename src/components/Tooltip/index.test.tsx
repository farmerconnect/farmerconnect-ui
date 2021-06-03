import { render } from '@testing-library/react';
import Tooltip from '.';

describe('Tooltip Component', () => {
  it('renders without errors', () => {
    const container = render(<Tooltip active direction="right" content={"Tooltip text"}>CONTENT</Tooltip>);
    expect(container.getByText(/tooltip text/i)).toBeInTheDocument();
  });
  it('hides tooltip when show is falsy', () => {
    const container = render(<Tooltip active={false} direction="right" content={"Tooltip text"}>CONTENT</Tooltip>);
    expect(container.queryByText(/tooltip text/i)).not.toBeInTheDocument();
  });
});
