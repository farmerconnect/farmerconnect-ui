import { fireEvent, render } from '@testing-library/react';
import Modal from '.';

describe('Modal Component', () => {
  it('renders without errors', () => {
    const container = render(<Modal show>CONTENT</Modal>);
    expect(container.getByText(/content/i)).toBeInTheDocument();
  });
  it('hides content when show is falsy', () => {
    const container = render(<Modal show={false}>CONTENT</Modal>);
    expect(container.queryByText(/content/i)).not.toBeInTheDocument();
  });
  it('shows close button when showCloseButton is true', () => {
    const container = render(
      <Modal show={true} showCloseButton>
        CONTENT
      </Modal>
    );
    expect(container.getByRole('button')).toBeInTheDocument();
  });
  it('does not show close button when showCloseButton is false', () => {
    const container = render(
      <Modal show={true} showCloseButton={false}>
        CONTENT
      </Modal>
    );
    expect(container.queryByRole('button')).not.toBeInTheDocument();
  });
  it('calls onClose when clicking on close button', () => {
    const onClose = jest.fn();
    const container = render(
      <Modal show={true} showCloseButton onClose={onClose}>
        CONTENT
      </Modal>
    );
    fireEvent.click(container.getByRole('button'));
    expect(onClose).toHaveBeenCalled();
  });
  it('calls onClose when the appropriate key is pressed', () => {
    const onClose = jest.fn();
    const container = render(
      <Modal show={true} closeOnKey="Escape" onClose={onClose}>
        CONTENT
      </Modal>
    );
    fireEvent.keyDown(container.getByRole('dialog'), { key: 'Escape' });
    expect(onClose).toHaveBeenCalled();
  });
  it('calls onClose when one of the keys included in closeOnKey array is pressed', () => {
    const onClose = jest.fn();
    const container = render(
      <Modal show={true} closeOnKey={['Enter', 'Escape']} onClose={onClose}>
        CONTENT
      </Modal>
    );
    fireEvent.keyDown(container.getByRole('dialog'), { key: 'Escape' });
    fireEvent.keyDown(container.getByRole('dialog'), { key: 'Enter' });
    fireEvent.keyDown(container.getByRole('dialog'), { key: 'x' });
    expect(onClose).toHaveBeenCalledTimes(2);
  });
});
