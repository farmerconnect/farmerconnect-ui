import { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Tabs from '.';

export default {
  title: 'Tabs',
  component: Tabs,
  argTypes: {},
  args: {
    tabs: ['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4'],
    disabledTabs: [2],
  },
} as Meta;

const Template: Story = (args) => {
  const [tab, setTab] = useState(0);

  return <Tabs {...args} onChange={setTab} currentTab={tab} />;
};

export const Default = Template.bind({});
