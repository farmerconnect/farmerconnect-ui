import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Combobox from './';
import { IComboboxProps } from './interfaces';

export default {
  title: 'Combobox',
  component: Combobox,
  argTypes: {
    /* backgroundColor: { control: 'color' },
    color: { control: 'color' },
    customStyles: { control: 'object' }, */
  },
} as Meta;

const Template: Story<IComboboxProps> = (args) => <Combobox {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Combobox',
};
 