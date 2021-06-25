// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import EditableLabel from '.';
import { iEditableLabelProps } from './interfaces';

export default {
	title: 'EditableLabel',
	component: EditableLabel,
	argTypes: {},
	args: {},
} as Meta;

const Template: Story<iEditableLabelProps> = (args) => {
	return <EditableLabel {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	primaryLabel: 'Boring name',
	secondaryLabel: 'Exciting name',
	onSave: (name) => alert(`New column name: ${name}`),
	text: {
		save: 'Save',
		edit: 'Edit',
	},
	disabled: false,
	allowEmptyValue: true,
	minLength: 0,
	maxLength: 50,
};
