// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import DatePicker from '.';
import { datePickerVariants, IDatePickerProps } from './interfaces';

export default {
  title: 'DatePicker',
  component: DatePicker,
  argTypes: {
    variant: {
      name: 'variant',
      control: 'select',
      options: datePickerVariants,
    },
    monthsShown: {
      name: 'monthsShown',
      control: 'range',
    },
    error: {
      name: 'error',
      defaultValue: '',
    },
    helperText: {
      name: 'helperText',
      defaultValue: '',
    },
  },
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
      <p>start: {date[0]?.toLocaleString()}</p>
      <p>end: {date[1]?.toLocaleString()}</p>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  hideRangeToggle: false,
  excludeDates: [new Date()],
  monthsShown: 2,
  error: '',
  helperText: '',
};

export const SelectSingleDay = Template.bind({});
SelectSingleDay.args = {
  hideRangeToggle: true,
  selectsRange: false,
  excludeDates: [new Date()],
  error: '',
  helperText: '',
};

export const SelectRange = Template.bind({});
SelectRange.args = {
  hideRangeToggle: true,
  selectsRange: true,
  excludeDates: [new Date()],
  error: '',
  helperText: '',
};
