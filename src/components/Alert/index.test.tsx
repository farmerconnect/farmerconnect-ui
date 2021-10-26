import { render } from '@testing-library/react';
import colors from '../../styles/colors';
import Alert from '.';

describe('Alert component', () => {
  it('renders properly', () => {
    const { getByRole } = render(<Alert variant="warning">Alert message</Alert>);
    expect(getByRole('alert')).toBeInTheDocument();
  });

  it('renders the correct text', () => {
    const { getByRole } = render(<Alert variant="warning">Alert message</Alert>);
    expect(getByRole('alert')).toHaveTextContent(/alert message/i);
  });

  it('renders the color for warning alert', () => {
    const { getByRole } = render(<Alert variant="warning">Alert message</Alert>);
    expect(getByRole('alert')).toHaveStyleRule('background-color', colors.fc_light_yellow);
  });

  it('renders the color for info alert', () => {
    const { getByRole } = render(<Alert variant="info">Alert message</Alert>);
    expect(getByRole('alert')).toHaveStyleRule('background-color', colors.fc_light_blue);
  });

  it('renders the color for danger alert', () => {
    const { getByRole } = render(<Alert variant="danger">Alert message</Alert>);
    expect(getByRole('alert')).toHaveStyleRule('background-color', colors.fc_light_red);
  });

  it('variant fall back to warning on invalid value', () => {
    // @ts-ignore
    const { getByRole } = render(<Alert variant="invalid-value">Alert message</Alert>);
    expect(getByRole('alert')).toHaveStyleRule('background-color', colors.fc_light_yellow);
  });
});
