import React, { useState } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import DatePicker from '.';
import { IDatePickerProps } from './interfaces';

export default {
  title: 'DatePicker',
  component: DatePicker,
  argTypes: {},
  args: {
    error: '',
    helperText: '',
    dividerText: 'to',
    weekDays: ['Mo', 'Tu', 'We', 'Th', 'Fri', 'Sa', 'Su'],
    buttonText: ['Last 30 days', 'Last 90 days', 'Last year'],
    placeholder: ['DD-MMM-YYYY', 'DD-MMM-YYYY'],
  },
} as Meta;

const Template: Story<IDatePickerProps> = (args) => {
  const [dates, setDates] = useState<{
    start: Date | null;
    end: Date | null;
  }>({ start: null, end: null });

  const handleChange = (start: Date | null, end: Date | null) => {
    setDates({ start, end });
  };

  return (
    <DatePicker start={dates.start} end={dates.end} onChange={handleChange} {...args} style={{ maxWidth: '18rem' }} />
  );
};

export const Default = Template.bind({});
Default.args = {
  variant: 'default',
  selectsRange: true,
};

export const Small = Template.bind({});
Small.args = {
  variant: 'small',
  selectsRange: true,
};
