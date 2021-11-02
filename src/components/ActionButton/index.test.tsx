import ActionButton from './';
import { render, fireEvent} from '@testing-library/react';
import { act } from 'react-dom/test-utils';

describe('ActionButton Component', () => {
  const actionBtn = (
      <ActionButton
        onClick={() => true}
        messageDuration={300}
        clickContent={<span>Some action occurred.</span>}
        hoverContent={<span>Hovering message.</span>}
        infotipProps={{
          arrow: false,
          direction: 'right'
        }}
        data-testid="action-button"
      >
        TEST
      </ActionButton>
  );

  it('renders without errors', async () => {
    const container = render(actionBtn);
    const result = await container.findByTestId("action-button");
    expect(result).toBeInTheDocument();
  });
  it('shows hover tooltip', async () => {
    const container = render(actionBtn);
    fireEvent.mouseOver(container.getByText("TEST"));
    await new Promise((r) => setTimeout(r, 50));
    const result = await container.findByText("Hovering message.")
    expect(result).toBeInTheDocument();
  });
  it('shows click tooltip', async () => {
    const container = render(actionBtn);
    const btn = container.getByText("TEST");
    fireEvent.mouseOver(btn);
    fireEvent.click(btn);
    const result = await container.findByText("Some action occurred.")
    expect(result).toBeInTheDocument();
  });
  it('hides click tooltip after delay', async () => {
    const container = render(actionBtn);
    const btn = container.getByText("TEST");
    await act(async () => {
      fireEvent.mouseOver(btn);
      fireEvent.click(btn);
      fireEvent.mouseOut(btn);
      await new Promise((r) => setTimeout(r, 500));
    })
    const result = container.queryByText("Hovering message.")
    expect(result).not.toBeInTheDocument();
  });
});
