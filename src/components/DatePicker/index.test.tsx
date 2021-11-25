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
    expect(container.getByLabelText(/date range/i)).toBeChecked();
  });

  it('calls onChange with the correct arguments for single date selection', () => {
    const onChange = jest.fn();
    const targetDate = new Date(2021, 0, 2);
    const container = render(<DatePicker start={new Date(2021, 0, 1)} selectsRange={false} onChange={onChange} />);
    fireEvent.click(container.getByPlaceholderText(/select date.../i));
    expect(container.getByLabelText(/date range/i)).toBeInTheDocument();
    expect(container.getByLabelText(/date range/i)).not.toBeChecked();
    fireEvent.click(container.getByRole('button', { name: 'Choose Saturday, January 2nd, 2021' }));
    expect(onChange).toHaveBeenCalledWith(targetDate, targetDate);
  });

  it('calls onChange with the correct arguments for date range selection', () => {
    const onChange = jest.fn();
    let startDate: Date | null = new Date(2021, 0, 1);
    let endDate: Date | null = new Date(2021, 0, 2);
    const container = render(<DatePicker start={startDate} end={endDate} selectsRange={true} onChange={onChange} />);
    fireEvent.click(container.getByPlaceholderText(/select date.../i));
    expect(container.getByLabelText(/date range/i)).toBeChecked();
    fireEvent.click(container.getByRole('button', { name: 'Choose Sunday, January 3rd, 2021' }));
    expect(onChange).toHaveBeenCalledWith(new Date(2021, 0, 3), null);
    expect(container.getByLabelText(/date range/i)).toBeInTheDocument();
    fireEvent.click(container.getByRole('button', { name: 'Choose Monday, January 4th, 2021' }));
    expect(onChange).toHaveBeenCalledWith(new Date(2021, 0, 4), null);
  });
});
