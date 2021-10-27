import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Button from '.';
import { ButtonProps } from './styles';
// import 

export default {
  title: 'Custom Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'radio',
        options: ['filled', 'outline', 'link', 'text', 'cancel'],
      },
    },
  },
} as Meta;

const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="13" height="14" viewBox="0 0 13 14" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect
      x="2.28223"
      y="1.00012"
      width="15.1576"
      height="2"
      rx="1"
      transform="rotate(45 2.28223 1.00012)"
      fill="param(color) #FFF"
    />
    <rect
      x="13"
      y="2.28198"
      width="15.1576"
      height="2"
      rx="1"
      transform="rotate(135 13 2.28198)"
      fill="param(color) #FFF"
    />
  </svg>
);

const Template: Story<ButtonProps> = (args) => (
  <div
    style={{
      display: 'flex',
      gap: '1rem',
    }}
  >
    <Button {...args} />
    <Button {...args}>
      <CloseIcon /> Custom Button
    </Button>
    <Button {...args}>
      <>
        Custom Button
        <CloseIcon />
      </>
    </Button>
    <Button {...args} disabled />
    <Button {...args} disabled>
      <>
        Disabled Icon Button
        <CloseIcon />
      </>
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
