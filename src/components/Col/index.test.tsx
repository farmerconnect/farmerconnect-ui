import Col from ".";
import Row from "../Row";
import { render } from "@testing-library/react";

describe("Grid Column Component", () => {
  it("renders without errors", () => {
    const container = render(
      <Row>
        <Col>COL</Col>
      </Row>
    );
    expect(container.getByText(/COL/)).toBeInTheDocument();
  });
  it("renders with the correct style", () => {
    const container = render(
      <Row>
        <Col xs={6}>COL</Col>
      </Row>
    );
    expect(container.getByText(/COL/)).toHaveStyleRule("max-width", "50%");
  });
});
