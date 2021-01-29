import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Breadcrumb from './';
import { IBreadcrumbProps } from './interfaces';

export default {
  title: 'Breadcrumb',
  component: Breadcrumb,
  argTypes: {
    doneColor: { control: 'color' },
    undoneColor: { control: 'color' },
    titleColor: { control: 'color' },
  },
} as Meta;

const Template: Story<IBreadcrumbProps> = (args) => <Breadcrumb {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: 'STEP NAME'
};
