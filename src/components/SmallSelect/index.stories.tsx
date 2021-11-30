import { Story, Meta } from '@storybook/react/types-6-0';
import SmallSelect from '.';

export default {
  title: 'SmallSelect',
  component: SmallSelect,
  argTypes: {},
  args: {
    isMulti: false,
  },
} as Meta;

const props = {
  options: [
    { label: <span>Label 1</span>, value: '0' },
    { label: <span>Label 2</span>, value: '1' },
    { label: <span>Label 3</span>, value: '2' },
    { label: <span>Label 4</span>, value: '3' },
    { label: <span>Label 5</span>, value: '4' },
    { label: <span>Label 6</span>, value: '5' },
  ],
};

const Template: Story = (args) => (
  <div style={{ maxWidth: 400 }}>
    <SmallSelect {...args} {...props} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  error: false,
  helperText: 'This is a helper text.',
};

export const FooterComponent = Template.bind({});
FooterComponent.args = {
  error: false,
  helperText: 'This is a helper text.',
  footer: 'This is a footer content. It takes JSX as well as string.',
};
