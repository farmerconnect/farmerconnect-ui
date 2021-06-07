// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Tooltip from "./";
import { ITooltipProps } from './interfaces';
import PublicProfileIcon from '../Icons/PublicProfile';

export default {
  title: 'Tooltip',
  component: Tooltip,
  argTypes: {},
} as Meta;

const Template: Story<ITooltipProps> = (args) => {
  return (
    <Tooltip {...args}>
      <PublicProfileIcon />
    </Tooltip>
  )
};

export const Default = Template.bind({});
Default.args = { 
  active: true,
  backgroundColor: '#192C28',
  color: '#F3F3F3',
  content: <span>See public profile</span>,
  arrow: true, 
  direction: "right"
};
