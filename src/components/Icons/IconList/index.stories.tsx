// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import IconList from '.';

export default {
  title: 'Icons',
  component: IconList,
  argTypes: {
    fill: { control: 'color' },
  },
  args: {
    fill: '#000000',
  },
} as Meta;

const Template: Story = (args) => <IconList {...args} />;

export const Default = Template.bind({});
