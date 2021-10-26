import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Alert from '.';
import { IAlertProps } from './interfaces';
import Typography from '../Typography';

export default {
  title: 'Alert',
  component: Alert,
  argTypes: {},
} as Meta;

const Template: Story<IAlertProps> = (args) => (
  <div style={{ maxWidth: 200 }}>
    <Alert {...args} />
  </div>
);

export const Warning = Template.bind({});
Warning.args = {
  children: (
    <Typography variant="small">
      This is the <strong>warning</strong> alert message
    </Typography>
  ),
  variant: 'warning',
};
export const Info = Template.bind({});
Info.args = {
  children: (
    <Typography variant="small">
      This is the <strong>info</strong> alert message
    </Typography>
  ),
  variant: 'info',
};
export const Danger = Template.bind({});
Danger.args = {
  children: (
    <Typography variant="small">
      This is the <strong>danger</strong> alert message
    </Typography>
  ),
  variant: 'danger',
};
