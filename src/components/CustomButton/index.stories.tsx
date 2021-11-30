import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import CustomButton from '.';
import { ButtonProps, colorVariantList, buttonVariantList } from './styles';
import * as Icon from '../Icons';

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
      defaultValue: false,
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
      <Icon.Close fill="currentColor" />
      <span>{children}</span>
    </CustomButton>
    <CustomButton {...args}>
      <span>{children}</span>
      <Icon.Close fill="currentColor" />
    </CustomButton>
    <CustomButton {...args} disabled>
      <span>{children}</span>
    </CustomButton>
    <CustomButton {...args} disabled>
      <span>{`Disabled ${children}`}</span>
      <Icon.Close fill="currentColor" />
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
