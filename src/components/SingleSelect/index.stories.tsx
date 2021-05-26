import React, { useState } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';

import SingleSelect, { contentType, SelectProps } from '.';

export default {
  title: 'SingleSelect',
  component: SingleSelect,
  argTypes: {},
} as Meta;

const data = [
  { id: 'Item 1', checked: false },
  { id: 'Item 2', checked: false },
  { id: 'Item 3', checked: false },
  { id: 'Item 4', checked: false },
  { id: 'Item 5', checked: false },
  { id: 'Item 6', checked: false },
  { id: 'Item 7', checked: false },
  { id: 'Item 8', checked: false },
  { id: 'Item 9', checked: false },
  { id: 'Item 10', checked: false },
];

const ListItem = styled.div`
  color: #141414;
  margin: 0;
  padding: 0.25rem 0;
  > b {
    font-size: 0.875rem;
    font-weight: 700;
    display: block;
    margin: 0;
    padding: 0;
  }
  > p {
    margin: 0;
    padding: 0;
    font-size: 0.6875rem;
  }
`;

const Template: Story<SelectProps> = (args) => {
  const [content, setContent] = useState(data);

  return (
    <SingleSelect
      {...args}
      content={content}
      onChange={setContent}
      itemRenderer={(item) => (
        <ListItem>
          <b>{item.id}</b>
          <p>Item description</p>
        </ListItem>
      )}
      onConfirmSelection={(c: contentType[]) => alert(JSON.stringify(c))}
      clearButtonText="Clear selection"
      confirmButtonText="Confirm selection"
      filterPlaceholderText="Search PO number"
      headingText="Select up to 2 purchase orders"
      emptyText="There are no results matching your search"
    />
  );
};

export const Default = Template.bind({});
Default.args = {};
