// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import EditColumnName from '.';
import { IEditColumnNameProps } from './interfaces';

export default {
	title: 'EditColumnName',
	component: EditColumnName,
	argTypes: {},
	args: {},
} as Meta;

const Template: Story<IEditColumnNameProps> = (args) => {
	return <EditColumnName {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	columnName: 'Boring name',
	columnFriendlyName: 'Exciting name',
	onSave: (name) => alert(`New column name: ${name}`),
	text: {
		save: 'Save',
		edit: 'Edit',
	},
	disabled: false,
};
