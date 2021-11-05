import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { ISearchInputProps } from './interfaces';
import SearchInput from '.';
import { useState } from '@storybook/client-api';
import { action } from '@storybook/addon-actions';

export default {
  title: 'SearchInput',
  component: SearchInput,
  argTypes: {
    onClear: {
      type: {
        name: 'function',
        required: true,
      },
      description: "The function that will be called when the 'x' icon is clicked to clear the input value.",
    },
    onChange: {
      type: {
        name: 'function',
        required: true,
      },
      description: 'The function that will be called whenever the input value changes.',
    },
    onSearch: {
      type: {
        name: 'function',
        required: true,
      },
      description: 'The function that will be called to perform the search using the input value as its param.',
    },
    debounceTime: {
      description: 'The time, in ms, the debounce function takes to call the onSearch function.',
      defaultValue: 0,
      control: {
        type: 'number',
      },
      table: {
        defaultValue: { summary: 0 },
      },
    },
    placeholder: {
      description: 'The placeholder text of the search input component.',
      defaultValue: 'Search here...',
      table: {
        defaultValue: { summary: 'Search here...' },
      },
    },
  },
} as Meta;

const Template: Story<ISearchInputProps> = (args) => {
  const [value, setValue] = useState('')

  const onSearch = (value: string) => {
    action(`onSearch: ${JSON.stringify({value})}`);
  }

  const onChange = (event: any) => {
    setValue(event.target.value);
  }

  return (
    <div style={{ maxWidth: '30%' }}>
      <SearchInput {...args} debounceTime={args.debounceTime} value={value} onSearch={onSearch} onClear={() => setValue('')} onChange={onChange}/>
      <pre>{JSON.stringify({value})}</pre>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  debounceTime: 0,
  placeholder: "Search here..."
};
