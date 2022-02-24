import { fireEvent, render } from '@testing-library/react';
import DatePicker from '.';

describe('DatePicker component', () => {
  it('renders properly', () => {
    const container = render(<DatePicker />);
    expect(container.getAllByPlaceholderText(/DD-MMM-YYYY/i)).toHaveLength(2);
  });

  it('opens on click', () => {
    const container = render(<DatePicker start={new Date(2022, 0, 1)} />);
    fireEvent.focus(container.getAllByPlaceholderText(/DD-MMM-YYYY/i)[0]);
    expect(container.getByText(/last 30 days/i)).toBeInTheDocument();
  });

  it('calls onChange with the correct arguments for single date selection', () => {
    const onChange = jest.fn();
    const targetDate = new Date(2021, 0, 2);
    const container = render(<DatePicker start={new Date(2021, 0, 1)} selectsRange={false} onChange={onChange} />);
    fireEvent.focus(container.getByPlaceholderText(/DD-MMM-YYYY/i));
    expect(container.getByRole('dialog')).toBeInTheDocument();
    fireEvent.click(container.getByLabelText('Choose Saturday, January 2nd, 2021'));
    expect(onChange).toHaveBeenCalledWith(targetDate, targetDate);
  });

  it('calls onChange with the correct arguments for date range selection', async () => {
    const onChange = jest.fn();
    let startDate: Date | null = new Date(2021, 0, 1);
    let endDate: Date | null = null;
    const container = render(<DatePicker start={startDate} end={endDate} selectsRange={true} onChange={onChange} />);
    fireEvent.focus(container.getAllByPlaceholderText(/DD-MMM-YYYY/i)[0]);

    expect(container.getByText(/last 30 days/i)).toBeInTheDocument();

    fireEvent.click(container.getByLabelText('Choose Sunday, January 3rd, 2021'));
    expect(onChange).toHaveBeenLastCalledWith(new Date(2021, 0, 3), null);
    fireEvent.click(container.getByLabelText('Choose Monday, January 4th, 2021'));
    expect(onChange).toHaveBeenLastCalledWith(new Date(2021, 0, 1), new Date(2021, 0, 4));
  });
});
