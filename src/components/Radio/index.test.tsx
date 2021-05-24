import { render } from '@testing-library/react';
import Radio from '.';

describe('Radio Component', () => {
  it('Renders properly', () => {
    const container = render(
      <div>
        <Radio name="radio-test" value={1} placeholder="option-1">
          Option 1
        </Radio>
        <Radio name="radio-test" value={2} placeholder="option-2">
          Option 2
        </Radio>
        <Radio name="radio-test" value={3} placeholder="option-3">
          Option 3
        </Radio>
      </div>
    );
    expect(container.getByText(/option 1/i)).toBeInTheDocument();
    expect(container.getByText(/option 2/i)).toBeInTheDocument();
    expect(container.getByText(/option 3/i)).toBeInTheDocument();
  });
});
