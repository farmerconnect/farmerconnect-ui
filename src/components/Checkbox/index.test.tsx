import { render, waitFor, fireEvent } from '@testing-library/react';
import Checkbox from '.';

describe('Checkbox Component', () => {
  it('Renders properly', () => {
    const container = render(
      <div>
        <Checkbox name="radio-test" value={1} placeholder="option-1">
          Option 1
        </Checkbox>
        <Checkbox name="radio-test" value={2} placeholder="option-2">
          Option 2
        </Checkbox>
        <Checkbox name="radio-test" value={3} placeholder="option-3">
          Option 3
        </Checkbox>
      </div>
    );
    expect(container.getByText(/option 1/i)).toBeInTheDocument();
    expect(container.getByText(/option 2/i)).toBeInTheDocument();
    expect(container.getByText(/option 3/i)).toBeInTheDocument();
  });

  it('renders the correct svgs', () => {
    const renderedCheckbox = render(
      <Checkbox name="radio-test" value={1} placeholder="option-1">
        checkbox
      </Checkbox>
    );
    expect(renderedCheckbox.container).toMatchSnapshot();
  });

  it('hides the unchecked svg on click', async () => {
    const renderedCheckbox = render(
      <Checkbox name="radio-test" value={1} placeholder="option-1">
        checkbox
      </Checkbox>
    );

    fireEvent.click(renderedCheckbox.getByLabelText(/checkbox/));
    await waitFor(async () => {
      const element = await renderedCheckbox.findByTestId('unchecked');
      expect(element).toHaveStyle('display: none');
    });
  });
});
