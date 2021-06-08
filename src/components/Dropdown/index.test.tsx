import { fireEvent, render } from '@testing-library/react';
import DropdownList from '.';

const dropdownItems = [
  { label: 'Item 1', value: 'item1' },
  { label: 'Item 2', value: 'item2' },
];

describe('DropdownList component', () => {
  it('renders properly', () => {
    const { getByText } = render(<DropdownList isOpen items={dropdownItems} />);
    expect(getByText(/item 2/i)).toBeInTheDocument();
  });

  it('hides when isOpen is falsy', () => {
    const { queryByText } = render(<DropdownList items={dropdownItems} />);
    expect(queryByText(/item 2/i)).not.toBeInTheDocument();
  });

  it('calls onClose when clicking outside the dropdown', () => {
    const onCloseMock = jest.fn();
    const { getByTestId } = render(<DropdownList items={dropdownItems} isOpen onClose={onCloseMock} />);
    fireEvent.click(getByTestId('dropdown-list-overlay'));
    expect(onCloseMock).toHaveBeenCalled();
  });

  it('calls onClose and onSelect with proper arguments when clicking on list item', () => {
    const onCloseMock = jest.fn();
    const onSelectMock = jest.fn();
    const { getByText } = render(
      <DropdownList items={dropdownItems} isOpen onClose={onCloseMock} onSelect={onSelectMock} />
    );
    fireEvent.click(getByText(/item 1/i));
    expect(onSelectMock).toHaveBeenCalledWith({ label: 'Item 1', value: 'item1' });
    expect(onCloseMock).toHaveBeenCalled();
  });
});
