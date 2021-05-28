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

type mockListItem = { id: string; country: string; continent: string } & contentType;

const data: mockListItem[] = [
  { id: 'United States', checked: false, country: 'United States', continent: 'America' },
  { id: 'Brazil', checked: false, country: 'Brazil', continent: 'America' },
  { id: 'Switzerland', checked: false, country: 'Switzerland', continent: 'Europe' },
  { id: 'Germany', checked: false, country: 'Germany', continent: 'Europe' },
  { id: 'France', checked: false, country: 'France', continent: 'Europe' },
  { id: 'Portugal', checked: false, country: 'Portugal', continent: 'Europe' },
  { id: 'Spain', checked: false, country: 'Spain', continent: 'Europe' },
  { id: 'Austria', checked: false, country: 'Austria', continent: 'Europe' },
  { id: 'Italy', checked: false, country: 'Italy', continent: 'Europe' },
  { id: 'Australia', checked: false, country: 'Australia', continent: 'Oceania' },
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
      itemRenderer={(item: mockListItem) => (
        <ListItem>
          <b>{item.id}</b>
          <p>{item.country}</p>
        </ListItem>
      )}
      onConfirmSelection={(c: contentType[]) => alert(JSON.stringify(c))}
      clearButtonText="Clear selection"
      confirmButtonText="Confirm selection"
      filterPlaceholderText="Search PO number"
      headingText="Select up to 2 purchase orders"
      emptyText="There are no results matching your search"
      selectFilter1={{
        content: (item: mockListItem) => item.country,
        placeholder: 'filter country',
        filter: (c: mockListItem, s) => s.includes(c.country),
      }}
      selectFilter2={{
        content: (item: mockListItem) => item.continent,
        placeholder: 'filter continent',
        filter: (c: mockListItem, s) => s.includes(c.continent),
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};
