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
			Regular
		</Toggle>
		<Toggle {...args} name="radio-0" defaultChecked>
			Default checked
		</Toggle>
		<Toggle {...args} disabled name="radio-0">
			Disabled
		</Toggle>
		<Toggle {...args} disabled name="radio-0" defaultChecked>
			Disabled default checked
		</Toggle>
		<Toggle {...args} />
		<Toggle {...args} defaultChecked />
		<Toggle {...args} disabled />
		<Toggle {...args} disabled defaultChecked />
	</div>
);

export const Default = Template.bind({});
Default.args = {};
