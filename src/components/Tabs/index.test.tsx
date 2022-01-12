import { fireEvent, render } from '@testing-library/react';
import Tabs from '.';

describe('Tabs Component', () => {
  it('Renders properly', () => {
    const container = render(<Tabs tabs={['Tab 1', 'Tab 2', 'Tab 3']} />);
    expect(container.queryByTestId(/tab 1/i)).toBeInTheDocument();
  });
  it('Apply custom style to disabled tabs', () => {
    const container = render(<Tabs tabs={['Tab 1', 'Tab 2', 'Tab 3']} disabledTabs={[1]} />);
    expect(container.getByTestId(/tab 1/i).parentElement).toHaveStyle('opacity: 1');
    expect(container.getByTestId(/tab 2/i).parentElement).toHaveStyle('opacity: 0.5');
    expect(container.getByTestId(/tab 3/i).parentElement).toHaveStyle('opacity: 1');
  });
  it('Calls onChange callback with the correct argument', () => {
    const handleChange = jest.fn();
    const container = render(<Tabs tabs={['Tab 1', 'Tab 2', 'Tab 3']} onChange={handleChange} />);
    fireEvent.click(container.getByTestId(/tab 3/i));
    expect(handleChange).toHaveBeenCalledWith(2);
  });
});
