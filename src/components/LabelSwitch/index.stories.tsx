import { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import LabelSwitch from '.';

export default {
  title: 'Label Switch',
  component: LabelSwitch,
  argTypes: {},
  args: {
    labels: ['Super Super Long Label 1', 'Label 2'],
  },
} as Meta;

const Template: Story = (args) => {
  const [label, setLabel] = useState(0);

  return (
    <div style={{ display: 'flex' }}>
      <LabelSwitch {...args} onChange={setLabel} currentLabel={label} />
    </div>
  );
};

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = { labels: ['Label 1', 'Label 2'], disabledLabels: [1] };
