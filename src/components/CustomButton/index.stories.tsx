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
        options: buttonVariantList.filter((variant) => variant !== 'cancel'),
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

const Template: Story<{ icons: boolean } & ButtonProps> = ({ icons = true, children, ...args }) => (
  <div
    style={{
      display: 'flex',
      gap: '1rem',
    }}
  >
    <CustomButton {...args}>{children}</CustomButton>
    {icons ? (
      <>
        <CustomButton {...args}>
          <Icon.Close fill="currentColor" />
          {children}
        </CustomButton>
        <CustomButton {...args}>
          {children}
          <Icon.Close fill="currentColor" />
        </CustomButton>
        <CustomButton {...args} disabled>
          {children}
        </CustomButton>
        <CustomButton {...args} disabled>
          {`Disabled ${children}`}
          <Icon.Close fill="currentColor" />
        </CustomButton>
      </>
    ) : (
      <CustomButton {...args} disabled>
        {`Disabled ${children}`}
      </CustomButton>
    )}
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
  icons: false,
};

export const Text = Template.bind({});
Text.args = {
  children: 'Text Button',
  variant: 'text',
};
