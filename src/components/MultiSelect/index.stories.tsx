import { useState } from 'react';
import styled from 'styled-components';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import DoubleSelect, { SelectProps } from '.';

export default {
  title: 'DoubleSelect',
  component: DoubleSelect,
  argTypes: {},
  excludeStories: ['data'],
} as Meta;

export const data = [
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
  const [items, setItems] = useState(data);
  const [product, setProduct] = useState({ id: null });

  return (
    <DoubleSelect
      {...args}
      disableRightCombo={product.id === null}
      disableLeftCombo={product.id !== null}
      rightListRenderer={(p) => (
        <ListItem>
          <b>{p.id}</b>
          <p>Item description</p>
        </ListItem>
      )}
      rightContent={items}
      limit={2}
      onChange={setItems}
      onConfirmSelection={(items) => alert(JSON.stringify(items))}
      onSelectLeft={(p) => setProduct(p)}
      leftListRenderer={(p) => (
        <ListItem>
          <b>{p.id}</b>
          <p>Item description</p>
        </ListItem>
      )}
      leftContent={data}
      text={{
        leftComboHeading: 'Select one product',
        rightComboHeading: 'Select items',
        filterPlaceholder: 'Search product ID',
        clearButton: 'Clear selection',
        confirmButton: 'Confirm selection',
        emptyList: 'There are no results matching your search.',
      }}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};
