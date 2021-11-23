import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import * as Icon from '../Icons';

import CustomButton from '.';
import { ButtonProps, colorVariantList, buttonVariantList } from './styles';

export default {
  title: 'Custom Button',
  component: CustomButton,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: buttonVariantList,
      },
    },
    colorVariant: {
      control: {
        type: 'select',
        options: colorVariantList,
      },
    },
    iconOnly: {
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    small: {
      defaultValue: true,
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta;

const Template: Story<ButtonProps> = ({ children, ...args }) => (
  <div
    style={{
      display: 'flex',
      gap: '1rem',
    }}
  >
    <CustomButton {...args}>{children}</CustomButton>
    <CustomButton {...args}>
      <Icon.Delete />
      Custom Button
    </CustomButton>
    <CustomButton {...args}>
      Custom Button
      <Icon.Delete />
    </CustomButton>
    <CustomButton {...args} disabled>
      {children}
    </CustomButton>
    <CustomButton {...args} disabled>
      Disabled Icon Button
      <Icon.Delete />
    </CustomButton>
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
