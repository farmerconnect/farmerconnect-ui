import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Checkbox, { CheckboxProps } from "./";

export default {
  title: "Checkbox",
  component: Checkbox,
  argTypes: {},
} as Meta;

const Template: Story<CheckboxProps> = (args) => (
  <div>
    <Checkbox {...args} name="radio-0">
      Option 1
    </Checkbox>
    <Checkbox {...args} name="radio-0">
      Option 2
    </Checkbox>
    <Checkbox {...args} name="radio-0">
      Option 3
    </Checkbox>
    <Checkbox {...args} name="radio-0">
      Option 4
    </Checkbox>
    <Checkbox {...args} name="radio-0">
      Option 5
    </Checkbox>
  </div>
);

export const Default = Template.bind({});
Default.args = {};
