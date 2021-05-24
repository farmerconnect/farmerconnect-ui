import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { INavigationBarProps } from './interfaces';
import NavigationBar from './';

export default {
  title: 'Navigation Bar',
  component: NavigationBar,
  argTypes: {
    backgroundColor: { control: 'color' },
    color: { control: 'color' },
    disabledColor: { control: 'color' },
    customStyles: { control: 'object' },
  },
} as Meta;

const Template: Story<INavigationBarProps> = (args) => <NavigationBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  previousButton: {
    children: 'Previous',
    disabled: true,
  },
  nextButton: {
    children: 'Next',
    disabled: false,
  },
};
