import SingleSelect, { contentType } from '.';
import { render, fireEvent } from '@testing-library/react';
import { data, mockListItem } from './index.stories';
import selectEvent from 'react-select-event';

describe('SingleSelect component', () => {
  it('renders properly', () => {
    const container = render(<SingleSelect<mockListItem> headingText="Select up to 2 purchase orders" />);
    expect(container.getByText(/select up to 2 purchase orders/i)).toBeInTheDocument();
  });

  it('renders options', () => {
    const container = render(
      <SingleSelect<mockListItem> headingText="Select up to 2 purchase orders" content={data} />
    );
    fireEvent.click(container.getByText(/select up to 2 purchase orders/i));
    expect(container.getByDisplayValue(/united states/i).parentElement).toBeVisible();
  });

  it('calls onChange with the proper argument', () => {
    const onChange = jest.fn();
    const container = render(
      <SingleSelect<contentType>
        headingText="Select data"
        content={[{ id: 'option', checked: false }]}
        onChange={onChange}
      />
    );
    fireEvent.click(container.getByDisplayValue(/option/i));
    expect(onChange).toHaveBeenCalledWith([{ id: 'option', checked: true }]);
  });

  it('filter options by text', () => {
    const container = render(
      <SingleSelect<contentType>
        headingText="Select data"
        content={[{ id: 'option label', checked: false }]}
        filterPlaceholderText="text-filter-input"
      />
    );
    fireEvent.change(container.getByPlaceholderText(/text-filter-input/i), { target: { value: 'option' } });
    expect(container.getByText(/option label/i)).toBeInTheDocument();
    fireEvent.change(container.getByPlaceholderText(/text-filter-input/i), { target: { value: 'x' } });
    expect(container.queryByText(/option label/i)).not.toBeInTheDocument();
  });

  it('filter options by filter dropdown', async () => {
    const container = render(
      <>
        <label htmlFor="single-select-dropdown-filter-1">filter select</label>
        <SingleSelect<contentType>
          headingText="Select data"
          content={[
            { id: 'Brazil', checked: false },
            { id: 'Switzerland', checked: false },
          ]}
          filterPlaceholderText="text-filter-input"
          itemRenderer={(item) => `available option ${item.id}`}
          selectFilter1={{
            content: (item) => item.id,
            placeholder: 'filter 1',
            filter: (c, s) => s.includes(c.id),
          }}
        />
      </>
    );
    expect(container.getByText(/available option brazil/i)).toBeInTheDocument();
    expect(container.getByText(/available option switzerland/i)).toBeInTheDocument();
    await selectEvent.select(container.getByLabelText(/filter select/i), 'Switzerland');
    expect(container.queryByText(/available option brazil/i)).not.toBeInTheDocument();
  });
});
