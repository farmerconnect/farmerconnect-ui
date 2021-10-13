import { fireEvent, render } from '@testing-library/react';
import LabelSwitch from '.';

describe('LabelSwitch Component', () => {
  it('Renders properly', () => {
    const container = render(<LabelSwitch labels={['Label 1', 'Label 2']} />);
    expect(container.getByText(/Label 1/i)).toBeInTheDocument();
  });
  it('Apply custom style to disabled labels', () => {
    const container = render(<LabelSwitch labels={['Label 1', 'Label 2']} disabledLabels={[1]} />);
    expect(container.getByText(/Label 1/i).closest('li')).toHaveStyle('opacity: 1');
    expect(container.getByText(/Label 2/i).closest('li')).toHaveStyle('opacity: 0.5');
  });
  it('Calls onChange callback with the correct argument', () => {
    const handleChange = jest.fn();
    const container = render(<LabelSwitch labels={['Label 1', 'Label 2']} onChange={handleChange} />);
    fireEvent.click(container.getByText(/Label 2/i));
    expect(handleChange).toHaveBeenCalledWith(1);
  });
});
