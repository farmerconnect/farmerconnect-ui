import SmallSelect from './index';
import { render } from '@testing-library/react';
import selectEvent from 'react-select-event';

describe('SmallSelect component', () => {
  it('renders properly', () => {
    const container = render(<SmallSelect options={[{ label: 'Option', value: '0' }]} placeholder="Small Select" />);
    expect(container.getByText(/small select/i)).toBeInTheDocument();
  });
  const OPTIONS = [
    { label: 'orange', value: 'orange' },
    { label: 'cake', value: 'cake' },
    { label: 'chocolate', value: 'chocolate' },
  ];

  it('show options when menu is open', () => {
    const { getByText, getByLabelText, queryByText } = render(
      <form data-testid="form">
        <label htmlFor="food">Food</label>
        <SmallSelect options={OPTIONS} name="food" inputId="food" />
      </form>
    );
    expect(queryByText(/orange/i)).toBeNull();
    selectEvent.openMenu(getByLabelText(/food/i));
    expect(getByText(/orange/i)).toBeInTheDocument();
  });

  it('allows empty value', () => {
    const { getByTestId } = render(
      <form data-testid="form">
        <label htmlFor="food">Food</label>
        <SmallSelect options={OPTIONS} name="food" inputId="food" />
      </form>
    );
    expect(getByTestId('form')).toHaveFormValues({ food: '' });
  });

  it('selects single value', async () => {
    const { getByTestId, getByLabelText } = render(
      <form data-testid="form">
        <label htmlFor="food">Food</label>
        <SmallSelect options={OPTIONS} name="food" inputId="food" />
      </form>
    );
    await selectEvent.select(getByLabelText(/food/i), ['orange']);
    expect(getByTestId('form')).toHaveFormValues({ food: 'orange' });
  });

  it('selects multiple values', async () => {
    const { getByTestId, getByLabelText } = render(
      <form data-testid="form">
        <label htmlFor="food">Food</label>
        <SmallSelect options={OPTIONS} name="food" inputId="food" isMulti />
      </form>
    );
    await selectEvent.select(getByLabelText(/food/i), ['orange', 'chocolate']);
    expect(getByTestId('form')).toHaveFormValues({ food: ['orange', 'chocolate'] });
  });

  it('unselects values', async () => {
    const { getByTestId, getByLabelText } = render(
      <form data-testid="form">
        <label htmlFor="food">Food</label>
        <SmallSelect options={OPTIONS} name="food" inputId="food" isMulti />
      </form>
    );
    await selectEvent.select(getByLabelText(/food/i), ['orange', 'chocolate']);
    await selectEvent.select(getByLabelText(/food/i), ['chocolate']);
    expect(getByTestId('form')).toHaveFormValues({ food: 'orange' });
  });
});
