// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Container from ".";
import { IContainerProps } from "./interfaces";

export default {
  title: "Container",
  component: Container,
  argTypes: {},
  args: {
    size: 1600,
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
      Maximum container size: {args.size}px
    </div>
  </Container>
);

export const Default = Template.bind({});
