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
  const [date, setDate] = useState<[Date | null, Date | null]>([null, null]);

  const handleChange = (start: Date | null, end: Date | null) => {
    setDate([start, end]);
  };

  return (
    <div style={{ width: '15rem' }}>
      <DatePicker {...args} start={date[0]} end={date[1]} onChange={handleChange} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  hideRangeToggle: false,
  excludeDates: [new Date()],
  error: false,
};

export const SelectSingleDay = Template.bind({});
SelectSingleDay.args = {
  hideRangeToggle: true,
  selectsRange: false,
  excludeDates: [new Date()],
  error: false,
};

export const SelectRange = Template.bind({});
SelectRange.args = {
  hideRangeToggle: true,
  selectsRange: true,
  excludeDates: [new Date()],
  error: false,
};
