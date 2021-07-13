import { render } from '@testing-library/react';
import Card from '.';

describe('Card Component', () => {
  it('renders without crashing', () => {
    const card = render(<Card type={"Default"} title={"Title"}>CARD</Card>);
    expect(card.getByText(/CARD/)).toBeInTheDocument();
  });
});
