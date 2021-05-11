import { render } from "@testing-library/react";
import Modal from ".";

describe("Modal Component", () => {
  it("renders without errors", () => {
    const container = render(<Modal show>CONTENT</Modal>);
    expect(container.getByText(/content/i)).toBeInTheDocument();
  });
  it("hides content when show is falsy", () => {
    const container = render(<Modal show={false}>CONTENT</Modal>);
    expect(container.queryByText(/content/i)).not.toBeInTheDocument();
  });
});
