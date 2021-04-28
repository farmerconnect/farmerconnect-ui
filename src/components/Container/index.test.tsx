import { render } from "@testing-library/react";
import Container from ".";

describe("Container Component", () => {
  it("renders without crashing", () => {
    const container = render(<Container>CONTAINER</Container>);
    expect(container.getByText(/CONTAINER/)).toBeInTheDocument();
  });
  it("has the right size rules", () => {
    const container = render(<Container size={1280}>CONTAINER</Container>);
    expect(container.getByText(/CONTAINER/)).toHaveStyleRule(
      "max-width",
      "1280px"
    );
  });
});
