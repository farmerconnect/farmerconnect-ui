import { useState } from 'react';
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

const TemplateControlled: Story<ModalProps> = (args) => {
  const [show, setShow] = useState(true);

  const toggleShow = () => setShow(!show);

  return (
    <>
      <h1 onClick={toggleShow}>Click to Open</h1>
      <Modal {...args} onClose={toggleShow} show={show}>
        <h1 onClick={toggleShow}>Click to Close</h1>
      </Modal>
    </>
  );
};

export const Default = Template.bind({});
Default.args = { show: true };

export const ModalWithOnClose = TemplateControlled.bind({});

export const CloseOnKeyPress = TemplateControlled.bind({});
CloseOnKeyPress.args = { closeOnKey: 'Escape' };

export const CloseOnKeyArray = TemplateControlled.bind({});
CloseOnKeyArray.args = { closeOnKey: ['Escape', 'Enter'] };

export const CloseButton = TemplateControlled.bind({});
CloseButton.args = { closeOnKey: 'Escape', showCloseButton: true };
