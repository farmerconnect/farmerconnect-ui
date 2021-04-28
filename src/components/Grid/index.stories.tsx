import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { Col, Row } from ".";
import { IColProps } from "./interfaces";

export default {
  title: "Grid",
  component: Col,
  argTypes: {},
  args: {
    xs: "0",
    sm: "12",
    md: "6",
    lg: "3",
    xl: "2",
    xxl: "1",
  },
} as Meta;

// const Content = styled.div`
//   height: 35vh;
//   display: block;
//   background-color: #00e394;
//   border-radius: 32px;
// `;

const Template: Story<IColProps> = (args) => (
  <Row>
    <Col {...args}>
      <div
        style={{
          height: "35vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          backgroundColor: "#00e394",
          borderRadius: "16px",
        }}
      >
        CONTENT
      </div>
    </Col>
  </Row>
);

export const Default = Template.bind({});
