import { render, fireEvent } from '@testing-library/react';
import EditableLabel from '.';

describe('EditColumnName component', () => {
  it('renders properly', () => {
    const { getByText } = render(<EditableLabel primaryLabel="column-name" secondaryLabel="column-friendly-name" />);

    expect(getByText(/column-name/i)).toBeInTheDocument();
    expect(getByText(/column-friendly-name/i)).toBeInTheDocument();
    expect(getByText(/edit/i)).toBeInTheDocument();
  });

  it('renders input when editing', () => {
    const { getByText, getByRole, getByTestId } = render(
      <EditableLabel primaryLabel="column-name" secondaryLabel="column-friendly-name" />
    );
    fireEvent.click(getByText(/edit/i));
    expect(getByRole('textbox')).toBeInTheDocument();
    expect(getByText(/save/i)).toBeInTheDocument();
    expect(getByTestId(/cancel-button/)).toBeInTheDocument();
  });

  it('calls onSave with the proper trimmed value', () => {
    const onSaveSpy = jest.fn();
    const { getByText, getByRole } = render(
      <EditableLabel primaryLabel="column-name" secondaryLabel="column-friendly-name" onSave={onSaveSpy} />
    );
    fireEvent.click(getByText(/edit/i));
    fireEvent.change(getByRole('textbox'), { target: { value: '   column name example   ' } });
    fireEvent.click(getByText(/save/i));
    expect(onSaveSpy).toHaveBeenCalledWith('column name example');
  });

  it('cancel editing when clicking on close button', () => {
    const { getByText, getByRole, queryByRole, getByTestId } = render(
      <EditableLabel primaryLabel="column-name" secondaryLabel="column-friendly-name" />
    );
    fireEvent.click(getByText(/edit/i));
    expect(getByRole('textbox')).toBeInTheDocument();
    fireEvent.click(getByTestId(/cancel-button/i));
    expect(queryByRole('textbox')).not.toBeInTheDocument();
  });

  it('cancel editing when clicking outside', () => {
    const { getByText, getByRole, queryByRole, getByTestId } = render(
      <EditableLabel primaryLabel="column-name" secondaryLabel="column-friendly-name" />
    );
    fireEvent.click(getByText(/edit/i));
    expect(getByRole('textbox')).toBeInTheDocument();
    fireEvent.click(getByTestId(/overlay/i));
    expect(queryByRole('textbox')).not.toBeInTheDocument();
  });

  it('calls the validate function with the correct argument', () => {
    const validate = jest.fn();
    const { getByText, getByRole } = render(
      <EditableLabel primaryLabel="column-name" secondaryLabel="column-friendly-name" validate={validate} />
    );
    fireEvent.click(getByText(/edit/i));
    fireEvent.change(getByRole('textbox'), { target: { value: 'test' } });
    expect(validate).toHaveBeenCalledWith('test');
  });

  it('calls onSave when input is valid', () => {
    const onSave = jest.fn();
    const validate = (value: string) => (value.length < 3 ? 'error message' : false);
    const { getByText, getByRole } = render(
      <EditableLabel
        primaryLabel="column-name"
        secondaryLabel="column-friendly-name"
        validate={validate}
        onSave={onSave}
      />
    );
    fireEvent.click(getByText(/edit/i));
    fireEvent.change(getByRole('textbox'), { target: { value: 'test' } });
    fireEvent.click(getByText(/save/i));
    expect(onSave).toHaveBeenCalledWith('test');
  });

  it('calls onSave not to be called when input is invalid', () => {
    const onSave = jest.fn();
    const validate = (value: string) => (value.length < 3 ? 'error message' : false);
    const { getByText, getByRole } = render(
      <EditableLabel
        primaryLabel="column-name"
        secondaryLabel="column-friendly-name"
        validate={validate}
        onSave={onSave}
      />
    );
    fireEvent.click(getByText(/edit/i));
    fireEvent.change(getByRole('textbox'), { target: { value: 'te' } });
    fireEvent.click(getByText(/save/i));
    expect(onSave).not.toHaveBeenCalled();
  });

  it('does not invalidate field until first submit', () => {
    const validate = (value: string) => (value.length < 3 ? 'error message' : false);
    const { getByText, getByRole, queryByRole, queryByText } = render(
      <EditableLabel primaryLabel="column-name" secondaryLabel="column-friendly-name" validate={validate} />
    );
    fireEvent.click(getByText(/edit/i));
    fireEvent.change(getByRole('textbox'), { target: { value: 'te' } });
    expect(queryByRole('alert')).not.toBeInTheDocument();
    fireEvent.click(getByText(/save/i));
    expect(getByText(/error message/i)).toBeInTheDocument();
    expect(queryByText(/save/i)).not.toBeInTheDocument();
  });

  it('actively apply validation after first attempt', () => {
    const validate = (value: string) => (value.length < 3 ? 'error message' : false);
    const { getByText, getByRole, queryByRole, queryByText } = render(
      <EditableLabel primaryLabel="column-name" secondaryLabel="column-friendly-name" validate={validate} />
    );
    fireEvent.click(getByText(/edit/i));
    fireEvent.change(getByRole('textbox'), { target: { value: 't' } });
    expect(queryByRole('alert')).not.toBeInTheDocument();
    fireEvent.click(getByText(/save/i));
    expect(getByText(/error message/i)).toBeInTheDocument();
    expect(queryByText(/save/i)).not.toBeInTheDocument();
    fireEvent.change(getByRole('textbox'), { target: { value: 'test' } });
    expect(queryByRole('alert')).not.toBeInTheDocument();
    expect(getByText(/save/i)).toBeInTheDocument();
  });

  it('allow save empty values despite validation rules when allowEmptyValue', () => {
    const onSave = jest.fn();
    const validate = (value: string) => (value.length < 3 ? 'error message' : false);
    const { getByText, getByRole } = render(
      <EditableLabel
        primaryLabel="column-name"
        secondaryLabel="column-friendly-name"
        validate={validate}
        allowEmptyValue
      />
    );
    fireEvent.click(getByText(/edit/i));
    fireEvent.change(getByRole('textbox'), { target: { value: '' } });
    fireEvent.click(getByText(/save/i));
    expect(onSave).not.toHaveBeenCalled();
    expect(getByText(/edit/i)).toBeInTheDocument();
  });
});
