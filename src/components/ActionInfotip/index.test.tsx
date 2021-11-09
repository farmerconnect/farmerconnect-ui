import ActionInfotip from './';
import { render, fireEvent, waitFor} from '@testing-library/react';
import { act } from 'react-dom/test-utils';

describe('ActionInfotip Component', () => {
  const actionBtn = (keepOpen = false) => (
      <ActionInfotip
        disabled={false}
        messageDuration={300}
        clickContent={<span>clickMessage</span>}
        hoverContent={<span>hoverMessage</span>}
        arrow={false}
        direction={'right'}
        keepOpen={keepOpen}
      >
        TEST
      </ActionInfotip>
  );

  it('renders without errors', async () => {
    const container = render(actionBtn());
    const result = await container.findByText("TEST");
    expect(result).toBeInTheDocument();
  });

  it('shows hover tooltip', async () => {
    const container = render(actionBtn());
    await act(async () => {
      fireEvent.mouseOver(container.getByText("TEST"));
    });
    const result = await (waitFor(() => container.findByText("hoverMessage"), { timeout: 1000 }));
    expect(result).toBeInTheDocument()
  });

  it('shows click tooltip', async () => {
    const container = render(actionBtn());
    const btn = container.getByText("TEST");
    await act(async () => {
      fireEvent.mouseOver(btn);
      fireEvent.click(btn);
    });
    const result = await container.findByText("clickMessage")
    expect(result).toBeInTheDocument();
  });

  it('hides hover tooltip', async () => {
    const container = render(actionBtn(false));
    const btn = container.getByText("TEST");
    await act(async () => {
      fireEvent.mouseOver(btn);
      fireEvent.click(btn);
      fireEvent.mouseOut(btn);
    })
    expect(container.queryByText(/(hoverMessage|clickMessage)/)).not.toBeInTheDocument();
  });

  it('hides tooltip after click and delay', async () => {
    const container = render(actionBtn(false));
    const btn = container.getByText("TEST");
    await act(async () => {
      fireEvent.mouseOver(btn);
      fireEvent.click(btn);
    })
    await (waitFor(() => {
      expect(container.queryByText(/(hoverMessage|clickMessage)/)).not.toBeInTheDocument();
    }, { timeout: 1000}));
  });

  it('keep tooltip open if keepOpen is set', async () => {
    const container = render(actionBtn(true));
    const btn = container.getByText("TEST");
    await act(async () => {
      fireEvent.mouseOver(btn);
      fireEvent.click(btn);
    })
    const result = await (waitFor(() => container.queryByText("clickMessage"), { timeout: 1000}));
    expect(result).toBeInTheDocument();
  });
});
