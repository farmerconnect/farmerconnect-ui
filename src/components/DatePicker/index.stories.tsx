// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import DatePicker from '.';
import { IDatePickerProps } from './interfaces';

export default {
  title: 'DatePicker',
  component: DatePicker,
  argTypes: {},
  args: {},
} as Meta;

const Template: Story<IDatePickerProps> = (args) => {
  const [date, setDate] = useState<Date | null>(null);

  return (
    <div style={{ width: '15rem' }}>
      <DatePicker {...args} date={date} onChange={(date) => setDate(date)} />
    </div>
  );
};

export const Default = Template.bind({});
