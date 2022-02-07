import React, { useState } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import Input from '../Input';

import DatePicker from '.';
import { IDatePickerProps } from './interfaces';

export default {
  title: 'DatePicker',
  component: DatePicker,
  argTypes: {},
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
    <div
      style={{
        backgroundColor: 'red',
        padding: '1rem',
        overflow: 'hidden',
        marginTop: '30rem',
        marginBottom: '30rem',
        marginLeft: '10rem',
        maxWidth: '19rem',
      }}
    >
      <DatePicker start={dates.start} end={dates.end} onChange={handleChange} {...args} />
      <Input style={{ marginTop: '1rem' }} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};

export const Small = Template.bind({});
Small.args = {
  variant: 'small',
};
