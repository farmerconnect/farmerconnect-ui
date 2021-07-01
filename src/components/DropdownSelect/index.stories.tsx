import React, { useState } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';

import DropdownSelect, { DropdownSelectContentItem, ISelectProps } from '.';

export default {
  title: 'DropdownSelect',
  component: DropdownSelect,
  argTypes: {},
  excludeStories: ['data', 'ListItem'],
} as Meta;

export const data: DropdownSelectContentItem[] = [
  { id: 'Item 1', checked: true, default: true },
  { id: 'Item 2', checked: true, default: true },
  { id: 'Item 3', checked: true, default: false },
  { id: 'Item 4', checked: true, default: false },
  { id: 'Item 5', checked: false, default: false },
  { id: 'Item 6', checked: false, default: false },
  { id: 'Item 7', checked: false, default: false },
  { id: 'Item 8', checked: false, default: false },
  { id: 'Item 9', checked: false, default: false },
  { id: 'Item 10', checked: false, default: false },
];

const dataWithoutDefault: DropdownSelectContentItem[] = [
  { id: 'Item 1', checked: true, default: false },
  { id: 'Item 2', checked: true, default: false },
  { id: 'Item 3', checked: true, default: false },
  { id: 'Item 4', checked: true, default: false },
  { id: 'Item 5', checked: false, default: false },
  { id: 'Item 6', checked: false, default: false },
  { id: 'Item 7', checked: false, default: false },
  { id: 'Item 8', checked: false, default: false },
  { id: 'Item 9', checked: false, default: false },
  { id: 'Item 10', checked: false, default: false },
];

export const ListItem = styled.div`
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

const Template: Story<ISelectProps<DropdownSelectContentItem>> = (args) => {
  const [content, setContent] = useState(dataWithoutDefault);

  return (
    <DropdownSelect
      {...args}
      content={content}
      onChange={setContent}
      itemRenderer={(item) => (
        <ListItem>
          <b>{item.id}</b>
        </ListItem>
      )}
      onConfirmSelection={(c: any) => alert(JSON.stringify(c))}
      onCancel={() => alert('cancel')}
      clearButtonText="Cancel"
      confirmButtonText="Save"
      filterPlaceholderText="Find columns..."
      headingText="Customize"
      contentText="Select columns to view."
      emptyText="There are no results matching your search"
      limit={99}
      isDraggable={false}
      allowEmptySelection={false}
    />
  );
};

const Template2: Story<ISelectProps<DropdownSelectContentItem>> = (args) => {
  const [content, setContent] = useState(data);

  return (
    <DropdownSelect
      {...args}
      content={content}
      onChange={setContent}
      itemRenderer={(item) => (
        <ListItem>
          <b>{item.id}</b>
        </ListItem>
      )}
      onConfirmSelection={(c: any) => alert(JSON.stringify(c))}
      onCancel={() => alert('cancel')}
      clearButtonText="Cancel"
      confirmButtonText="Save"
      filterPlaceholderText="Find columns..."
      headingText="Customize"
      contentText="Select columns to view."
      emptyText="There are no results matching your search"
      limit={99}
      isDraggable={false}
    />
  );
};

export const Default = Template.bind({});
export const Draggable = Template2.bind({});
Default.args = {};
