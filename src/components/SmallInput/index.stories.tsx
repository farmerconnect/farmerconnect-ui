// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import SmallInput from '.';
import { ISmallInput } from './interfaces';

export default {
  title: 'SmallInput',
  component: SmallInput,
  argTypes: {},
} as Meta;

const Template: Story<ISmallInput> = (args) => <SmallInput {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const HelperText = Template.bind({});
HelperText.args = { helperText: 'This is a helper text.' };

export const Error = Template.bind({});
Error.args = { error: 'This is a error message.' };

export const Success = Template.bind({});
Success.args = { success: true };

export const Disabled = Template.bind({});
Disabled.args = { disabled: true };