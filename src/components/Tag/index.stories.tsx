import { Story, Meta } from '@storybook/react/types-6-0';
import Tag from './';
import { TagVariantEnum } from './interfaces';

export default {
  title: 'Tag',
  component: Tag,
  argTypes: {
    color: { control: 'color' },
    variant: {
      options: Object.values(TagVariantEnum),
      control: { type: 'select' },
    },
    customStyles: { control: 'object' },
    backgroundColor: { control: 'color' },
  },
  decorators: [(Story) => <div style={{ display: 'flex' }}>{Story()}</div>],
} as Meta;

const Template: Story<any> = (args) => <Tag {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  children: 'Tag',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Tag',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  children: 'Tag',
};

export const Danger = Template.bind({});
Danger.args = {
  variant: 'danger',
  children: 'Tag',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  children: 'Tag',
};

export const CustomColors = Template.bind({});
CustomColors.args = {
  color: 'cyan',
  backgroundColor: 'darkcyan',
  children: 'Tag',
};

export const MultipleTags = () => (
  <>
    <Tag variant="primary">Tag 1</Tag>
    <Tag variant="danger">Tag 2</Tag>
  </>
);
