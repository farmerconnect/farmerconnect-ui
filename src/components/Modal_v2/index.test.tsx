import { fireEvent, render } from '@testing-library/react';
import { util } from 'prettier';
import Modal from '.';

describe('Modal v2 components', () => {
  it('hides overlay when show is falsy', () => {
    const { queryByText } = render(<Modal.Overlay>overlay</Modal.Overlay>);
    expect(queryByText(/overlay/i)).not.toBeInTheDocument();
  });
  it('shows overlay when show is truthy', () => {
    const { getByText } = render(<Modal.Overlay show>overlay</Modal.Overlay>);
    expect(getByText(/overlay/i)).toBeInTheDocument();
  });
  it('calls onEsc callback when pressing Esc', () => {
    const onEsc = jest.fn();
    const { getByText } = render(
      <Modal.Dialog size="small" onEsc={onEsc}>
        dialog
      </Modal.Dialog>
    );
    expect(onEsc).not.toHaveBeenCalled();
    fireEvent.keyDown(getByText(/dialog/i), { code: 'Escape' });
    expect(onEsc).toHaveBeenCalled();
  });
  it('renders dialogs with correct width', () => {
    const { getByText } = render(
      <>
        <Modal.Dialog size="small">small</Modal.Dialog>
        <Modal.Dialog size="medium">medium</Modal.Dialog>
        <Modal.Dialog size="large">large</Modal.Dialog>
      </>
    );
    expect(getByText(/small/i)).toHaveStyle('width: 33.5rem');
    expect(getByText(/medium/i)).toHaveStyle('width: 47.25rem');
    expect(getByText(/large/i)).toHaveStyle('width: calc(100% - 5rem)');
  });
  it('renders feedback modal with proper title and body', () => {
    const container = render(<Modal.Feedback title="title">body</Modal.Feedback>);
    expect(container.getByRole('heading', { level: 3 })).toHaveTextContent('title');
    expect(container.getByText(/body/i)).toBeInTheDocument();
  });
});
