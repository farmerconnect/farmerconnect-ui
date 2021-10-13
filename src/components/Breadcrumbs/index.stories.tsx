import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Breadcrumbs from '.';
import { IBreadcrumbsProps } from './interfaces';

export default {
  title: 'Breadcrumbs',
  component: Breadcrumbs,
  argTypes: {},
} as Meta;

const Template: Story<IBreadcrumbsProps> = (args) => <Breadcrumbs {...args} />;

export const Default = Template.bind({});
Default.args = {
  breadcrumbs: [
    { text: 'First page', onClick: () => alert('First page clicked') },
    { text: 'Second page', onClick: () => alert('Second page clicked') },
    { text: 'Third page', onClick: () => alert('Third page clicked') },
    { text: 'Current page' },
  ],
};
