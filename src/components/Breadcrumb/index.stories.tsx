import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Breadcrumb from './';
import { IBreadcrumbProps } from './interfaces';

export default {
  title: 'Breadcrumb',
  component: Breadcrumb,
  argTypes: {
    breadcrumb: { control: 'object' },
  },
} as Meta;

const Template: Story<IBreadcrumbProps> = (args) => <Breadcrumb {...args} />;

export const Default = Template.bind({});
Default.args = {
  active: true,
  text: 'STEP NAME'
};
