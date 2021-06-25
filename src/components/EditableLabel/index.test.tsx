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

	it('calls onSave with the proper argument', () => {
		const onSaveSpy = jest.fn();
		const { getByText, getByRole } = render(
			<EditableLabel primaryLabel="column-name" secondaryLabel="column-friendly-name" onSave={onSaveSpy} />
		);
		fireEvent.click(getByText(/edit/i));
		fireEvent.change(getByRole('textbox'), { target: { value: 'column name example' } });
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

	it('disables Save when input length is lower than minLength', () => {
		const { getByText, getByRole } = render(
			<EditableLabel primaryLabel="column-name" secondaryLabel="column-friendly-name" minLength={5} />
		);
		fireEvent.click(getByText(/edit/i));
		fireEvent.change(getByRole('textbox'), { target: { value: '1234' } });
		expect(getByText(/save/i)).toHaveAttribute('disabled');
		fireEvent.change(getByRole('textbox'), { target: { value: '12345' } });
		expect(getByText(/save/i)).not.toHaveAttribute('disabled');
	});

	it('disables Save when input length is higher than maxLength', () => {
		const { getByText, getByRole } = render(
			<EditableLabel primaryLabel="column-name" secondaryLabel="column-friendly-name" maxLength={5} />
		);
		fireEvent.click(getByText(/edit/i));
		fireEvent.change(getByRole('textbox'), { target: { value: '123456' } });
		expect(getByText(/save/i)).toHaveAttribute('disabled');
		fireEvent.change(getByRole('textbox'), { target: { value: '12345' } });
		expect(getByText(/save/i)).not.toHaveAttribute('disabled');
	});

	it('disables Save when allowEmptyValue is falsy and input is empty', () => {
		const { getByText, getByRole } = render(
			<EditableLabel primaryLabel="column-name" secondaryLabel="column-friendly-name" allowEmptyValue={false} />
		);
		fireEvent.click(getByText(/edit/i));
		fireEvent.change(getByRole('textbox'), { target: { value: '' } });
		expect(getByText(/save/i)).toHaveAttribute('disabled');
		fireEvent.change(getByRole('textbox'), { target: { value: '1' } });
		expect(getByText(/save/i)).not.toHaveAttribute('disabled');
	});

	it('enables Save with empty value when allowEmptyValue is truthy', () => {
		const { getByText, getByRole } = render(
			<EditableLabel primaryLabel="column-name" secondaryLabel="column-friendly-name" allowEmptyValue={true} />
		);
		fireEvent.click(getByText(/edit/i));
		fireEvent.change(getByRole('textbox'), { target: { value: '' } });
		expect(getByText(/save/i)).not.toHaveAttribute('disabled');
		fireEvent.change(getByRole('textbox'), { target: { value: '1' } });
		expect(getByText(/save/i)).not.toHaveAttribute('disabled');
	});

	it('disables edit button when disabled is truthy', () => {
		const { getByText } = render(
			<EditableLabel primaryLabel="column-name" secondaryLabel="column-friendly-name" disabled />
		);
		expect(getByText(/edit/i)).toHaveAttribute('disabled');
	});
});
