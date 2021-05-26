import { fireEvent, render } from '@testing-library/react';
import Tabs from '.';

describe('Tabs Component', () => {
  it('Renders properly', () => {
    const container = render(<Tabs tabs={['Tab 1', 'Tab 2', 'Tab 3']} />);
    expect(container.getByText(/tab 1/i)).toBeInTheDocument();
  });
  it('Apply custom style to disabled tabs', () => {
    const container = render(<Tabs tabs={['Tab 1', 'Tab 2', 'Tab 3']} disabledTabs={[1]} />);
    expect(container.getByText(/tab 1/i)).toHaveStyle('opacity: 1');
    expect(container.getByText(/tab 2/i)).toHaveStyle('opacity: 0.5');
    expect(container.getByText(/tab 3/i)).toHaveStyle('opacity: 1');
  });
  it('Calls onChange callback with the correct argument', () => {
    const handleChange = jest.fn();
    const container = render(<Tabs tabs={['Tab 1', 'Tab 2', 'Tab 3']} onChange={handleChange} />);
    fireEvent.click(container.getByText(/tab 3/i));
    expect(handleChange).toHaveBeenCalledWith(2);
  });
});
