import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import TextArea from '.';
import { ITextArea } from './interfaces';

export default {
  title: 'TextArea',
  component: TextArea,
  argTypes: {
    placeholder: {
      control: 'text',
      defaultValue: 'Placeholder value',
    },
  },
} as Meta;

const Template: Story<ITextArea> = (args) => <TextArea placeholder={args.placeholder} {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Error = Template.bind({});
Error.args = { error: true };

export const Success = Template.bind({});
Success.args = { success: true };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };
