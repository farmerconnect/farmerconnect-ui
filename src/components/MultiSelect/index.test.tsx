import MultiSelect from '.';
import { render, fireEvent } from '@testing-library/react';

describe('DoubleSelect component', () => {
  it('renders properly', () => {
    const container = render(<MultiSelect text={{ leftComboHeading: 'MultiSelect' }} />);
    expect(container.getByText(/multiselect/i)).toBeInTheDocument();
  });

  it('renders options', () => {
    const container = render(
      <MultiSelect
        text={{ leftComboHeading: 'left-combo', rightComboHeading: 'right-combo' }}
        leftContent={[{ id: 'item-left-content' }]}
        rightContent={[{ id: 'item-right-content', checked: false }]}
      />
    );
    fireEvent.click(container.getByText(/left-combo/i));
    expect(container.getByText(/item-left-content/i).parentElement).toBeVisible();
    fireEvent.click(container.getByText(/left-combo/i));
    fireEvent.click(container.getByText(/right-combo/i));
    expect(container.getByText(/item-right-content/i).parentElement).toBeVisible();
  });

  it('calls onSelectLeft with the right argument when selecting left side content', () => {
    const onSelect = jest.fn();
    const container = render(
      <MultiSelect
        text={{ leftComboHeading: 'left-combo' }}
        leftContent={[{ id: 'item-left-content' }]}
        onSelectLeft={onSelect}
      />
    );
    fireEvent.click(container.getByText(/left-combo/i));
    fireEvent.click(container.getByText(/item-left-content/i));
    expect(onSelect).toBeCalledWith({ id: 'item-left-content' });
  });

  it('calls onChange with the right argument when selecting right side content', () => {
    const onSelect = jest.fn();
    const container = render(
      <MultiSelect
        text={{ rightComboHeading: 'right-combo' }}
        rightContent={[{ id: 'item-right-content', checked: false }]}
        onChange={onSelect}
      />
    );
    fireEvent.click(container.getByText(/right-combo/i));
    fireEvent.click(container.getByDisplayValue(/item-right-content/i));
    expect(onSelect).toBeCalledWith([{ id: 'item-right-content', checked: true }]);
  });

  it('filters right side content according to filter text', () => {
    const container = render(
      <MultiSelect
        text={{ rightComboHeading: 'right-combo', filterPlaceholder: 'filter-text' }}
        rightContent={[{ id: 'item-right-content', checked: false }]}
      />
    );
    fireEvent.click(container.getByText(/right-combo/i));
    expect(container.getByText(/item-right-content/i)).toBeVisible();
    fireEvent.change(container.getByPlaceholderText(/filter-text/i), { target: { value: 'x' } });
    expect(container.queryByText(/item-right-content/i)).not.toBeInTheDocument();
  });
});
