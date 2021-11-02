// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import ActionButton from './index';
import { IActionButtonProps } from './index';
import { Copy } from '../Icons';

export default {
  title: 'Action Button',
  component: ActionButton,
  argTypes: {
    messageDuration: {
      description: 'How long the tooltip remains on screen after click (ms).',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 1500 },
      }
    },
    hoverContent: {
      description: 'Infotip content to show on hover.',
      control: 'text',
      table: {
        type: { summary: 'React.Node' },
      }
    },
    clickContent: {
      description: 'Infotip content to show on click.',
      control: 'text',
      table: {
        type: { summary: 'React.Node' },
      }
    },
    onClick: {
      description: 'Action. Hover infotip shows on success.',
      table: {
        type: { summary: '() => boolean' },
      }
    },
    buttonStyles: {
      control: 'object',
      description: 'CustomButton styles.',
      table: {
        type: { summary: 'ButtonProps' },
      }
    },
    infotipProps: {
      control: 'object',
      description: 'Infotip properties.',
      table: {
        type: { summary: 'IInfotipProps' },
      }
    }
  },
} as Meta;

const Template: Story<IActionButtonProps> = (args) => (
    <ActionButton {...args} >
      {/* wow */}
      {/* <Copy/> */}
    </ActionButton>
);

export const Default = Template.bind({});
Default.args = {
  onClick: () => true,
  messageDuration: 1500,
  clickContent: <span>Some action occurred.</span>,
  hoverContent: <span>Hovering message.</span>,
  infotipProps: {
    arrow: false,
    direction: 'right'
  }
};
