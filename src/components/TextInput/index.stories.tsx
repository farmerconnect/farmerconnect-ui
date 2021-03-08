import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import TextInput from './';
import { ITextInputProps } from './interfaces';

export default {
  title: 'Text Input',
  component: TextInput,
  argTypes: {
  },
} as Meta;

const Template: Story<ITextInputProps> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  onChange: (value: string, isValid: boolean) => {
    console.log('On Change');
    console.log('value', value);
    console.log('isValid', isValid);
  },
};
 