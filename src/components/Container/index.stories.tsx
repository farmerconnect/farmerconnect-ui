import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import { IContainerProps } from "./interfaces";
import Container from ".";

export default {
  title: "Container",
  component: Container,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["default", "sm", "md", "lg", "xl", "xxl", "fluid"],
      },
    },
  },
  args: {
    size: "md",
  },
} as Meta;

const Template: Story<IContainerProps> = (args) => (
  <Container {...args}>
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
  </Container>
);

export const Default = Template.bind({});
