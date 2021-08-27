import { Story, Meta } from '@storybook/react/types-6-0';
import Select from '.';

export default {
  title: 'Select',
  component: Select,
  argTypes: {},
  args: {
    isMulti: false,
  },
} as Meta;

const props = {
  options: [
    { label: 'Label 1', value: 0 },
    { label: 'Label 2', value: 1 },
    { label: 'Label 3', value: 2 },
    { label: 'Label 4', value: 3 },
    { label: 'Label 5', value: 4 },
    { label: 'Label 6', value: 5 },
  ],
};

const Template: Story = (args) => (
  <div style={{ maxWidth: 400 }}>
    <Select {...args} {...props} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  error: false,
  helperText: 'This is a helper text.',
  isDisabled: false,
};

export const ErrorMessage = Template.bind({});
ErrorMessage.args = {
  error: 'This is a error message',
};
