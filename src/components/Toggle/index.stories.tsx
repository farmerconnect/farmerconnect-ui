import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Toggle, { ToggleProps } from './';

export default {
	title: 'Toggle',
	component: Toggle,
	argTypes: {},
} as Meta;

const Template: Story<ToggleProps> = (args) => (
	<div>
		<Toggle {...args} name="radio-0">
			Option 1
		</Toggle>
		<Toggle {...args} name="radio-0">
			Option 2
		</Toggle>
		<Toggle {...args} name="radio-0">
			Option 3
		</Toggle>
		<Toggle {...args} name="radio-0">
			Option 4
		</Toggle>
		<Toggle {...args} disabled name="radio-0">
			Option 5
		</Toggle>
	</div>
);

export const Default = Template.bind({});
Default.args = {};
