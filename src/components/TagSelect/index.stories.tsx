import { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ITagSelectProps } from './interfaces';
import TagSelect from '.';

export default {
  title: 'TagSelect',
  component: TagSelect,
  args: {},
} as Meta;

const tagOptions = [
  {
    id: 'GREEN',
    text: 'GREEN',
    color: '#005E3A',
    background: '#CEE9DD',
  },
  {
    id: 'YELLOW',
    text: 'YELLOW',
    color: '#AE8800',
    background: '#FFFCD5',
  },
  {
    id: 'RED',
    text: 'RED',
    color: '#FB2E4C',
    background: '#FFEAED',
  },
];

const Template: Story<ITagSelectProps> = (args) => {
  const [selectedOption, setSelectedOption] = useState(tagOptions[1]);

  return <TagSelect {...args} selected={selectedOption} onChange={setSelectedOption} />;
};

export const Default = Template.bind({});
Default.args = {
  options: tagOptions,
};
