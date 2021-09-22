// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Infotip from './';
import { IInfotipProps } from './interfaces';
import PublicProfileIcon from '../Icons/PublicProfile';

export default {
  title: 'Infotip',
  component: Infotip,
  argTypes: {},
} as Meta;

const Template: Story<IInfotipProps> = (args) => {
  return (
    <Infotip {...args}>
      <PublicProfileIcon stroke={'#00E394'} />
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
  position: 'middle'
};
