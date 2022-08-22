import { Meta, Story } from '@storybook/react/types-6-0';
import { useState } from 'react';
import { Icon } from '../..';
import CustomButton from '../CustomButton';
import Modal, { iconVariants } from '.';
import { dialogWidth } from './styles';
import { ConfirmationDialogProps, FeedbackDialogProps } from './interfaces';

export default {
  title: 'Modal_v2',
  component: Modal.Overlay,
  args: {},
  argTypes: {
    size: {
      defaultValue: 'small',
      options: Object.keys(dialogWidth),
      control: {
        type: 'select',
      },
    },
  },
} as Meta;

export const Default: Story<any> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <>
      <CustomButton onClick={handleToggleModal}>Open modal</CustomButton>
      <Modal.Overlay show={isOpen}>
        <Modal.Dialog {...args} onEsc={handleToggleModal}>
          <Modal.Title>
            Modal title <Icon.Information />
          </Modal.Title>
          <Modal.Subtitle>Modal subtitle</Modal.Subtitle>
          <Modal.Body>
            <p>this is the body</p>
          </Modal.Body>
          <Modal.Controls>
            <Modal.Button variant="link" onClick={handleToggleModal}>
              Close
            </Modal.Button>
            <Modal.Button variant="outline">Previous</Modal.Button>
            <Modal.Button variant="filled" autoFocus>
              Next
            </Modal.Button>
          </Modal.Controls>
        </Modal.Dialog>
      </Modal.Overlay>
    </>
  );
};

export const FeedbackModal: Story<FeedbackDialogProps> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleModal = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <CustomButton onClick={handleToggleModal}>Open modal</CustomButton>
      <Modal.Overlay show={isOpen}>
        <Modal.Feedback
          {...args}
          controls={
            <>
              <Modal.Button variant="outline" onClick={handleToggleModal}>
                Yes
              </Modal.Button>
              <Modal.Button variant="filled" onClick={handleToggleModal}>
                Absolutely
              </Modal.Button>
            </>
          }
        >
          {args.children}
        </Modal.Feedback>
      </Modal.Overlay>
    </>
  );
};
FeedbackModal.argTypes = {
  title: {
    control: {
      type: 'text',
    },
    defaultValue: 'Feedback modal title',
  },
  variant: {
    defaultValue: 'success',
    control: {
      type: 'select',
      options: Object.keys(iconVariants),
    },
  },
  children: {
    control: {
      type: 'text',
    },
    defaultValue: 'Are you sure you want to close this modal?',
  },
};

export const ConfirmationModal: Story<ConfirmationDialogProps> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleModal = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <CustomButton onClick={handleToggleModal}>Open modal</CustomButton>
      <Modal.Overlay show={isOpen}>
        <Modal.Confirmation
          {...args}
          controls={
            <>
              <Modal.Button variant="outline" onClick={handleToggleModal}>
                Yes
              </Modal.Button>
              <Modal.Button variant="filled" onClick={handleToggleModal}>
                Absolutely
              </Modal.Button>
            </>
          }
        >
          {args.children}
        </Modal.Confirmation>
      </Modal.Overlay>
    </>
  );
};
ConfirmationModal.argTypes = {
  title: {
    control: {
      type: 'text',
    },
    defaultValue: 'Confirmation modal title',
  },
  children: {
    control: {
      type: 'text',
    },
    defaultValue: 'Are you sure you want to close this modal?',
  },
};
