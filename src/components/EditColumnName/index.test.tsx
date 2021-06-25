import { render, fireEvent } from '@testing-library/react';
import EditColumnName from '.';

describe('EditColumnName component', () => {
	it('renders properly', () => {
		const { getByText } = render(<EditColumnName columnName="column-name" columnFriendlyName="column-friendly-name" />);

		expect(getByText(/column-name/i)).toBeInTheDocument();
		expect(getByText(/column-friendly-name/i)).toBeInTheDocument();
		expect(getByText(/edit/i)).toBeInTheDocument();
	});

	it('renders input when editing', () => {
		const { getByText, getByRole, getByTestId } = render(
			<EditColumnName columnName="column-name" columnFriendlyName="column-friendly-name" />
		);
		fireEvent.click(getByText(/edit/i));
		expect(getByRole('textbox')).toBeInTheDocument();
		expect(getByText(/save/i)).toBeInTheDocument();
		expect(getByTestId(/cancel-button/)).toBeInTheDocument();
	});

	it('calls onSave with the proper argument', () => {
		const onSaveSpy = jest.fn();
		const { getByText, getByRole } = render(
			<EditColumnName columnName="column-name" columnFriendlyName="column-friendly-name" onSave={onSaveSpy} />
		);
		fireEvent.click(getByText(/edit/i));
		fireEvent.change(getByRole('textbox'), { target: { value: 'column name example' } });
		fireEvent.click(getByText(/save/i));
		expect(onSaveSpy).toHaveBeenCalledWith('column name example');
	});

	it('cancel editing when clicking on close button', () => {
		const { getByText, getByRole, queryByRole, getByTestId } = render(
			<EditColumnName columnName="column-name" columnFriendlyName="column-friendly-name" />
		);
		fireEvent.click(getByText(/edit/i));
		expect(getByRole('textbox')).toBeInTheDocument();
		fireEvent.click(getByTestId(/cancel-button/i));
		expect(queryByRole('textbox')).not.toBeInTheDocument();
	});

	it('cancel editing when clicking outside', () => {
		const { getByText, getByRole, queryByRole, getByTestId } = render(
			<EditColumnName columnName="column-name" columnFriendlyName="column-friendly-name" />
		);
		fireEvent.click(getByText(/edit/i));
		expect(getByRole('textbox')).toBeInTheDocument();
		fireEvent.click(getByTestId(/overlay/i));
		expect(queryByRole('textbox')).not.toBeInTheDocument();
	});
});
