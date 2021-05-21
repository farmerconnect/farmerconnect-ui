import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Modal, { ModalProps } from './';

export default {
  title: 'Modal',
  component: Modal,
  argTypes: {},
} as Meta;

const Template: Story<ModalProps> = (args) => (
  <Modal {...args}>
    <h1>Modal Content</h1>
  </Modal>
);

export const Default = Template.bind({});
Default.args = { show: true };
