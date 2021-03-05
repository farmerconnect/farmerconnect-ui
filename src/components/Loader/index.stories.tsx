import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Loader from './';
import { loaderDefaultStyles } from './styles';

export default {
  title: 'Loader',
  component: Loader,
  argTypes: {
    show: { control: 'boolean' },
    options: { control: 'object' },
    iconSize: { control: 'number' },
    iconColor: { control: 'color' },
  },
} as Meta;

const defaultArgs = {
  show: true,
  options: [
    {
      duration: 5,
      message:
        'We are working on your request, please bare with us for a moment...',
    },
    {
      duration: 5,
      message: '...just a little bit longer',
    },
    {
      duration: 5,
      message: '...almost there',
    },
  ],
  iconColor: loaderDefaultStyles.icon.color,
  buttonText: 'Cancel request',
  onButtonClick: () => {
    console.log('Cancel request');
  },
};

const Template: Story = (args) => <Loader {...args} />;

export const Default = Template.bind({});
Default.args = { ...defaultArgs };

export const CustomIconSize = Template.bind({});
CustomIconSize.args = { ...defaultArgs, iconSize: 50 };
