import { render } from '@testing-library/react';
import Input from '.';

describe('Input component', () => {
	it('renders properly', () => {
		const { getByPlaceholderText, queryByTestId } = render(<Input placeholder="custom-input" />);
		expect(getByPlaceholderText(/custom-input/i)).toBeInTheDocument();
		expect(queryByTestId(/warning-icon/i)).not.toBeInTheDocument();
		expect(queryByTestId(/check-icon/i)).not.toBeInTheDocument();
	});

	it('renders error icon and message when error prop is not falsy', () => {
		const { getByTestId, getByText, queryByTestId } = render(
			<Input placeholder="custom-input" error="error description" />
		);
		expect(getByTestId(/warning-icon/i)).toBeInTheDocument();
		expect(queryByTestId(/check-icon/i)).not.toBeInTheDocument();
		expect(getByText(/error description/i)).toBeInTheDocument();
	});

	it('renders check icon when success prop is true', () => {
		const { getByTestId, queryByTestId } = render(<Input placeholder="custom-input" success={true} />);
		expect(queryByTestId(/warning-icon/i)).not.toBeInTheDocument();
		expect(getByTestId(/check-icon/i)).toBeInTheDocument();
	});

	it('renders error when both error and success are truthy', () => {
		const { getByTestId, getByText, queryByTestId } = render(
			<Input placeholder="custom-input" success={true} error="error description" />
		);
		expect(getByTestId(/warning-icon/i)).toBeInTheDocument();
		expect(queryByTestId(/check-icon/i)).not.toBeInTheDocument();
		expect(getByText(/error description/i)).toBeInTheDocument();
	});
});
