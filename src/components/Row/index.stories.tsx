import { Story, Meta } from "@storybook/react/types-6-0";

import Row from ".";
import Col from "../Col";
import { IRowProps } from "./interfaces";
import Container from "../Container";

const Content = () => (
  <div
    style={{
      height: "10vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "white",
      backgroundColor: "#00e394",
      borderRadius: "16px",
    }}
  >
    Content
  </div>
);

export default {
  title: "Row",
  component: Row,
  argTypes: {},
  args: {
    gutter: 16,
    bottom: 16,
  },
} as Meta;

const Template: Story<IRowProps> = (args) => (
  <Container style={{ backgroundColor: "lightgray" }}>
    <Row {...args}>
      <Col xs={12}>
        <Content />
      </Col>
    </Row>
    <Row {...args}>
      <Col xs={6}>
        <Content />
      </Col>
      <Col xs={6}>
        <Content />
      </Col>
    </Row>
    <Row {...args}>
      <Col xs={4}>
        <Content />
      </Col>
      <Col xs={4}>
        <Content />
      </Col>
      <Col xs={4}>
        <Content />
      </Col>
    </Row>
    <Row {...args}>
      <Col xs={2}>
        <Content />
      </Col>
      <Col xs={2}>
        <Content />
      </Col>
      <Col xs={2}>
        <Content />
      </Col>
      <Col xs={2}>
        <Content />
      </Col>
      <Col xs={2}>
        <Content />
      </Col>
      <Col xs={2}>
        <Content />
      </Col>
    </Row>
  </Container>
);

export const Default = Template.bind({});
