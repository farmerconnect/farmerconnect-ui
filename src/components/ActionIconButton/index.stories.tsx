// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { Copy } from '../Icons';
import { tipDirectionList, tipPositionList } from '../Infotip/interfaces';

import ActionIconButton from './index';
import { IActionIconButtonProps } from './interfaces';

export default {
  title: 'ActionIconButton',
  component: ActionIconButton,
  argTypes: {
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
      description: 'Handler.',
      table: {
        type: { summary: '() => void' },
      }
    },
    messageDuration: {
      description: 'How long the tooltip remains on screen after click (ms).',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 2000 },
      }
    },
    keepOpen: {
      description: 'Keep tooltip open when hovering after messageDuration',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      }
    },
    direction: {
      description: 'Tooltip direction.',
      options: tipDirectionList,
      control: 'inline-radio',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'top' },
      },
    },
    position: {
      description: 'Tooltip position.',
      options: tipPositionList,
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'middle' },
      },
      control: 'inline-radio',
    },
    arrow: {
      description: 'Show tooltip arrow.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
      control: 'boolean'
    },
  },
} as Meta;

const Template: Story<IActionIconButtonProps> = (args) =>
      <ActionIconButton {...args} >
        <Copy />
      </ActionIconButton>
  ;

export const Default = Template.bind({});
Default.args = {
  onClick: () => {},
  clickContent: <span>Copied link to clipboard!</span>,
  hoverContent: <span>Copy link.</span>,
  keepOpen: true,
  direction: 'right'
};
