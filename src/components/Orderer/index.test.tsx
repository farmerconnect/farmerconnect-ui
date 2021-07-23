import { render } from '@testing-library/react';
import Orderer from './';

describe('Table Component', () => {
  const orderer = (
    <Orderer sort={{ key: 'description', order: 'asc' }} onSortChange={() => {}} />
  );

  it('renders without errors', () => {
    const container = render(orderer);
    expect(container).toBeTruthy();
  });
});
