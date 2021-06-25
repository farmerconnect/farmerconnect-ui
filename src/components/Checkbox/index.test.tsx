import { render } from '@testing-library/react';
import Checkbox from '.';

describe('Checkbox Component', () => {
	it('Renders properly', () => {
		const container = render(
			<div>
				<Checkbox name="radio-test" value={1} placeholder="option-1">
					Option 1
				</Checkbox>
				<Checkbox name="radio-test" value={2} placeholder="option-2">
					Option 2
				</Checkbox>
				<Checkbox name="radio-test" value={3} placeholder="option-3">
					Option 3
				</Checkbox>
			</div>
		);
		expect(container.getByText(/option 1/i)).toBeInTheDocument();
		expect(container.getByText(/option 2/i)).toBeInTheDocument();
		expect(container.getByText(/option 3/i)).toBeInTheDocument();
	});
});
