// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { useState } from 'react';
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
  const [value, setValue] = useState(args.secondaryLabel);

  return <EditableLabel {...args} secondaryLabel={value} onSave={setValue} />;
};

export const Default = Template.bind({});
Default.args = {
  primaryLabel: 'Boring name',
  secondaryLabel: 'Exciting name',
  onSave: (name) => alert(`New secondary label name: ${name}`),
  text: {
    save: 'Save',
    edit: 'Edit',
  },
  disabled: false,
  allowEmptyValue: true,
  validate: (value) => (value.length < 3 ? 'Label too short' : value.length > 10 ? 'Label too long' : false),
};
