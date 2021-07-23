import { render } from '@testing-library/react';
import Tooltip from '.';

const args = {
  backgroundColor: '#192C28',
  textColor: '#F3F3F3',
  direction: 'right',
  effect: 'solid',
  content: 'See public profile',
  id: 'global',
};

describe('Tooltip Component', () => {
  it('renders without errors', () => {
    const container = render(
      <Tooltip
        backgroundColor={'#192C28'}
        textColor={'#192C28'}
        direction={'right'}
        effect={'solid'}
        content={'tooltip text'}
        id={'global'}
      />
    );
    expect(container.getByText(/tooltip text/i)).toBeInTheDocument();
  });
});
