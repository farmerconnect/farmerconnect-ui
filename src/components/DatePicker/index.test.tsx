import { render, fireEvent } from '@testing-library/react';
import DatePicker from '.';

describe('DatePicker component', () => {
  it('renders properly', () => {
    const container = render(<DatePicker start={new Date()} />);
    expect(container.getByPlaceholderText(/select date.../i)).toBeInTheDocument();
  });

  it('opens on click', () => {
    const container = render(<DatePicker start={new Date()} />);
    fireEvent.click(container.getByPlaceholderText(/select date.../i));
    expect(container.getByText(/day/i)).toBeInTheDocument();
  });

  it('toggles properly between single date and range date selection', () => {
    const container = render(<DatePicker start={new Date()} />);
    fireEvent.click(container.getByPlaceholderText(/select date.../i));
    expect(container.getByText(/clear dates/i)).toBeInTheDocument();
    fireEvent.click(container.getByText(/day/i));
    expect(container.queryByText(/clear dates/i)).not.toBeInTheDocument();
  });

  it('calls onChange with the correct arguments for single date selection', () => {
    const onChange = jest.fn();
    const targetDate = new Date(2021, 0, 2);
    const container = render(<DatePicker start={new Date(2021, 0, 1)} selectsRange={false} onChange={onChange} />);
    fireEvent.click(container.getByPlaceholderText(/select date.../i));
    expect(container.getByText(/day/i)).toBeInTheDocument();
    fireEvent.click(container.getByRole('button', { name: 'Choose Saturday, January 2nd, 2021' }));
    expect(container.queryByText(/day/i)).not.toBeInTheDocument();
    expect(onChange).toHaveBeenCalledWith(targetDate, targetDate);
  });
});
