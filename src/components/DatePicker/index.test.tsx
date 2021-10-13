import { render, fireEvent, waitFor } from '@testing-library/react';
import DatePicker from '.';

describe('DatePicker component', () => {
  it('renders properly', () => {
    const container = render(<DatePicker start={new Date()} />);
    expect(container.getByPlaceholderText(/select date.../i)).toBeInTheDocument();
  });

  it('opens on click', async () => {
    const container = render(<DatePicker start={new Date()} />);
    fireEvent.click(container.getByPlaceholderText(/select date.../i));
    await waitFor(() => expect(container.getByText(/day/i)).toBeInTheDocument());
  });

  it('toggles properly between single date and range date selection', async () => {
    const container = render(<DatePicker start={new Date()} />);
    fireEvent.click(container.getByPlaceholderText(/select date.../i));
    await waitFor(() => expect(container.getByText(/clear dates/i)).toBeInTheDocument());
    fireEvent.click(container.getByText(/day/i));
    await waitFor(() => expect(container.queryByText(/clear dates/i)).not.toBeInTheDocument());
  });

  it('calls onChange with the correct arguments for single date selection', async () => {
    const onChange = jest.fn();
    const targetDate = new Date(2021, 0, 2);
    const container = render(<DatePicker start={new Date(2021, 0, 1)} selectsRange={false} onChange={onChange} />);
    fireEvent.click(container.getByPlaceholderText(/select date.../i));
    await waitFor(() => expect(container.getByText(/day/i)).toBeInTheDocument());
    fireEvent.click(container.getByRole('button', { name: 'Choose Saturday, January 2nd, 2021' }));
    await waitFor(() => {
      expect(container.queryByText(/day/i)).not.toBeInTheDocument();
      expect(onChange).toHaveBeenCalledWith(targetDate, targetDate);
    });
  });
});
