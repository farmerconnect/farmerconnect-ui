import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Button from '.';
import { ButtonProps } from './styles';
import * as Icon from '../Icons';

export default {
  title: 'Custom Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: ['filled', 'outline', 'link', 'text'],
      },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <div
    style={{
      display: 'flex',
      gap: '1rem',
    }}
  >
    <Button {...args} />
    <Button {...args}>
      <Icon.Close fill="currentColor" /> Custom Button
    </Button>
    <Button {...args}>
      Custom Button
      <Icon.Close fill="currentColor" />
    </Button>
    <Button {...args} disabled />
    <Button {...args} disabled>
      Disabled Icon Button
      <Icon.Close fill="currentColor" />
    </Button>
  </div>
);

export const Filled = Template.bind({});
Filled.args = {
  children: 'Filled Button',
  variant: 'filled',
};

export const Outline = Template.bind({});
Outline.args = {
  children: 'Outlined Button',
  variant: 'outline',
};

export const Link = Template.bind({});
Link.args = {
  children: 'Link Button',
  variant: 'link',
};

export const Text = Template.bind({});
Text.args = {
  children: 'Text Button',
  variant: 'text',
};
