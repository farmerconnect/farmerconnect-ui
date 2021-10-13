import { fireEvent, render } from '@testing-library/react';
import Toggle from '.';

describe('Toggle Component', () => {
  it('Renders properly', () => {
    const container = render(
      <div>
        <Toggle name="radio-test">Option 1</Toggle>
      </div>
    );
    expect(container.getByText(/option 1/i)).toBeInTheDocument();
  });
  it('Changes toggle slider according to status', () => {
    const { getByPlaceholderText, getByTestId } = render(
      <div>
        <Toggle name="radio-test" placeholder="option">
          Option 1
        </Toggle>
      </div>
    );
    expect(getByTestId(/slider/i)).toHaveStyle('background-color: #B9B9B9');
    fireEvent.change(getByPlaceholderText(/option/i), { target: { checked: true } });
    expect(getByTestId(/slider/i)).toHaveStyle('background-color: #00e394');
  });
});
