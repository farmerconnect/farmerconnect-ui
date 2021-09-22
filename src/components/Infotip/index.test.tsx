import { render } from '@testing-library/react';
import Infotip from '.';

describe('Infotip Component', () => {
  it('renders without errors', () => {
    const container = render(
      <Infotip active direction="right" content={'Infotip text'}>
        CONTENT
      </Infotip>
    );
    expect(container.getByText(/infotip text/i)).toBeInTheDocument();
  });
  it('hides infotip when show is falsy', () => {
    const container = render(
      <Infotip active={false} direction="right" content={'Infotip text'}>
        CONTENT
      </Infotip>
    );
    expect(container.queryByText(/infotip text/i)).not.toBeInTheDocument();
  });
});
