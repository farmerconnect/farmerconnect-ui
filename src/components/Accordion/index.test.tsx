import { render, fireEvent } from '@testing-library/react';
import Accordion from '.';

describe('Accordion Component', () => {
  it('renders properly', () => {
    const container = render(<Accordion heading="heading">content</Accordion>);
    expect(container.getByText(/heading/i)).toBeInTheDocument();
  });

  it('toggle open content', () => {
    const container = render(<Accordion heading="heading">content</Accordion>);
    expect(container.queryByText(/content/i)).not.toBeInTheDocument();
    fireEvent.click(container.getByText(/heading/i));
    expect(container.getByText(/content/i)).toBeInTheDocument();
  });

  it('override internal state when isOpen is passed', () => {
    const container = render(
      <Accordion heading="heading" isOpen>
        content
      </Accordion>
    );
    expect(container.getByText(/content/i)).toBeInTheDocument();
    fireEvent.click(container.getByText(/heading/i));
    expect(container.getByText(/content/i)).toBeInTheDocument();
  });

  it('fires onToggle callback with the correct argument', () => {
    const onToggle = jest.fn();
    const container = render(
      <Accordion heading="heading" onToggle={onToggle}>
        content
      </Accordion>
    );
    fireEvent.click(container.getByText(/heading/i));
    expect(onToggle).toHaveBeenCalledWith(true);
  });
});
