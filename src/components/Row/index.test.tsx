import Row from '.';
import Col from '../Col';
import { render } from '@testing-library/react';

describe('Grid Row Component', () => {
  it('renders without errors', () => {
    const container = render(<Row>ROW</Row>);
    expect(container.getByText(/ROW/)).toBeInTheDocument();
  });
  it('renders with the correct bottom margin', () => {
    const container = render(<Row bottom={24}>ROW</Row>);
    expect(container.getByText(/ROW/)).toHaveStyleRule('margin-bottom', '24px');
  });
  it('renders the correct gutter size between columns', () => {
    const container = render(
      <Row gutter={30}>
        <Col>COL</Col>
      </Row>
    );
    expect(container.getByText(/COL/)).toHaveStyle('padding-right: 15px');
  });
});
