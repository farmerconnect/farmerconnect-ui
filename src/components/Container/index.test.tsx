import { render } from "@testing-library/react";
import "jest-styled-components";
import Container from ".";

describe("Container Component", () => {
  it("renders without crashing", () => {
    const container = render(<Container size="default">CONTAINER</Container>);
    expect(container.getByText(/CONTAINER/)).toBeInTheDocument();
  });
  it("has the right size rules", () => {
    const container = render(<Container size="default">CONTAINER</Container>);
    expect(container.getByText(/CONTAINER/)).toHaveStyleRule(
      "max-width",
      "540px",
      { media: "(min-width:576px)" }
    );
  });
});
