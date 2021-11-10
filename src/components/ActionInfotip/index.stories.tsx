// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import CustomButton from '../CustomButton';
import { Chain } from '../Icons';
import { tipDirectionList, tipPositionList } from '../Infotip/interfaces';

import ActionInfotip from './index';
import { IActionInfotipProps } from './interfaces';

export default {
  title: 'ActionInfotip',
  component: ActionInfotip,
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Allow the infotip behavior to be disabled if true',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
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

const Template: Story<IActionInfotipProps> = ({ disabled, ...args}) =>
      <ActionInfotip disabled={disabled} {...args} >
        <CustomButton disabled={disabled} variant="outline" iconOnly>
          <Chain />
        </CustomButton>
      </ActionInfotip>
  ;

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  clickContent: <span>Copied link to clipboard!</span>,
  hoverContent: <span>Copy link.</span>,
  direction: 'right'
};
