import { fireEvent, render, screen } from '@testing-library/react';
import SearchInput from '.';
import { ISearchInputProps, isISearchInputProps } from './interfaces';
const consoleErrorSpy = jest.spyOn(global.console, 'error');

const mockProps = function (value: string | undefined): ISearchInputProps {
  return {
    value: value,
    onClear: () => {},
    onSearch: (value: string) => {},
    debounceTime: 0,
    placeholder: 'Search here...',
  };
};

describe('SearchInput component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders properly', () => {
    const { getByPlaceholderText } = render(<SearchInput {...mockProps(undefined)} />);
    expect(getByPlaceholderText(/Search here.../i)).toBeInTheDocument();
  });

  it('should validate valid props', () => {
    expect(isISearchInputProps(mockProps(undefined))).toBe(true);
    expect(consoleErrorSpy).not.toHaveBeenCalled();
  });

  it('renders clear icon when there is a value on the input field', () => {
    render(<SearchInput {...mockProps('coffee')} />);
    expect(screen.getByTestId(/clear-icon/i)).toBeInTheDocument();
  });

  it('clears the input field when the clear icon is clicked', () => {
    const mockOnClear = jest.fn();
    render(<SearchInput {...mockProps('coffee')} onClear={mockOnClear} />);
    fireEvent.click(screen.getByTestId(/clear-icon/i));
    expect(mockOnClear).toHaveBeenCalled();
  });
});
