// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Infotip from './';
import { IInfotipProps, tipDirectionList, tipPositionList } from './interfaces';
import PublicProfileIcon from '../Icons/PublicProfile';
import colors from '../../styles/colors';

export default {
  title: 'Infotip',
  component: Infotip,
  argTypes: {
    active: {
      control: 'boolean',
    },
    content: {
      control: 'text',
    },
    color: {
      control: 'color',
    },
    backgroundColor: {
      control: 'color',
    },
    direction: {
      options: tipDirectionList,
      control: 'inline-radio',
    },
    position: {
      options: tipPositionList,
      control: 'inline-radio',
    },
  },
} as Meta;

const Template: Story<IInfotipProps> = (args) => {
  return (
    <Infotip {...args}>
      <PublicProfileIcon fill={colors.fc_green} />
    </Infotip>
  );
};

export const Default = Template.bind({});
Default.args = {
  active: true,
  backgroundColor: '#192C28',
  color: '#F3F3F3',
  content: <span>See public profile</span>,
  arrow: true,
  direction: 'right',
  position: 'middle',
};
