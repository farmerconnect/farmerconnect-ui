import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Radio, { RadioProps } from "./";

export default {
  title: "Radio",
  component: Radio,
  argTypes: {},
} as Meta;

const Template: Story<RadioProps> = (args) => (
  <div>
    <Radio {...args} name="radio-0">
      Option 1
    </Radio>
    <Radio {...args} name="radio-0">
      Option 2
    </Radio>
    <Radio {...args} name="radio-0">
      Option 3
    </Radio>
    <Radio {...args} name="radio-0">
      Option 4
    </Radio>
    <Radio {...args} name="radio-0">
      Option 5
    </Radio>
  </div>
);

export const Default = Template.bind({});
Default.args = {};
