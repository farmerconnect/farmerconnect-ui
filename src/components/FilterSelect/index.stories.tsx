import { useState } from 'react';
import styled from 'styled-components';
import { Story, Meta } from '@storybook/react/types-6-0';
import FilterSelect from '.';

export default {
  title: 'FilterSelect',
  component: FilterSelect,
  argTypes: {
    itemList: {
      name: 'itemList',
      type: { name: 'any', required: true },
      description: 'Data that will show on the select, can be any object structure.',
    },
    placeholder: {
      name: 'placeholder',
      type: { name: 'string', required: true },
      description: 'Placeholder that shows before the selection'
    },
    resolveItemName: {
      name: 'resolveItemName',
      type: { name: 'function', required: true },
      description: 'The component calls this function to resolve the label to be shown on the select, since the object is generic.',
    },
    onSelectItem: {
      name: 'onSelectItem',
      type: { name: 'function', required: true },
      description: 'This is a callback that returns the object that was selected.',
    },
    listItemRender: {
      name: 'listItemRender',
      type: { name: 'function', required: true },
      description: 'Specifies how each element should be rendered',
    },
    noResultsMessage: {
      name: 'noResultsMessage',
      type: { name: 'string', required: true },
      description: 'Message to be displayed when no results are found',
    },
  },
  excludeStories: ['data'],
} as Meta;

const ListItem = styled.div`
  color: #141414;
  margin: 0;
  padding: 0.25rem 0;
`;

const SelectedItem = styled.div`
  span {
    color: darkgray;
    font-weight:bold;
    font-size: 12px;    
  }

  margin: 30px 10px; 

  #json-element{
    margin-top: 8px;
    background-color:	#989898;
    height: 45px;
    border-radius: 10px;
    padding: 15px;
    color: white;
  }
  pre { font-family: monospace; }
`;


export type listItemType = {
  id: number;
  name: string;
};

const data:listItemType[] = [
  { name: 'Alex Smith    | +55 55 99999 9120', id: 1 },
  { name: 'Ronald Smith  | +55 55 99999 9121', id: 2 },
  { name: 'David Smith   | +55 55 99999 9122', id: 3 },
  { name: 'John Smith    | +55 55 99999 1223', id: 4 },
  { name: 'Maria Smith   | +55 55 99999 9995', id: 5 },
  { name: 'Joe Smith     | +55 55 99999 9996', id: 6 },
  { name: 'Mathew Smith  | +55 55 99999 9997', id: 7 },
  { name: 'Wink Smith    | +55 55 99999 9998', id: 8 },
  { name: 'Kate Smith    | +55 55 99999 9999', id: 9 },
  { name: 'Jess Smith    | +55 55 99999 9100', id: 10 },
];

const Template: Story<typeof FilterSelect> = (args) => {
  const [selectedItem, setselectedItem] = useState<string>();
  const [items] = useState<listItemType[]>(data);

  return (
    <div>
      <FilterSelect
        itemList={items}
        resolveItemName={(item:listItemType) => item.name}
        onSelectItem={(item:listItemType) => { setselectedItem(JSON.stringify(item)); }}
        listItemRender={(item:listItemType) => (<ListItem><span>{item.name}</span></ListItem>)}
        placeholder={"Select farmer"}
        noResultsMessage={"No results to show at the moment"}
      />
      <SelectedItem>
        <span>Selected Value:</span>
        <div id="json-element">
          <pre>
            <code>{selectedItem}</code>
          </pre>
        </div>
      </SelectedItem>
    </div>   
  );
};

/*
Second datatype
*/

export type listItemType2 = {
  id: number;
  label: string;
  value: string;
};

const datatype2:listItemType2[] = [
  { label: 'Alex Smith    | +55 55 99999 9120', id: 1, value: 'value1' },
  { label: 'Ronald Smith  | +55 55 99999 9121', id: 2, value: 'value2' },
  { label: 'David Smith   | +55 55 99999 9122', id: 3, value: 'value3' },
  { label: 'John Smith    | +55 55 99999 1223', id: 4, value: 'value4' },
  { label: 'Maria Smith   | +55 55 99999 9995', id: 5, value: 'value5' },
  { label: 'Joe Smith     | +55 55 99999 9996', id: 6, value: 'value6' },
  { label: 'Mathew Smith  | +55 55 99999 9997', id: 7, value: 'value7' },
  { label: 'Wink Smith    | +55 55 99999 9998', id: 8, value: 'value8' },
  { label: 'Kate Smith    | +55 55 99999 9999', id: 9, value: 'value9' },
  { label: 'Jess Smith    | +55 55 99999 9100', id: 10, value: 'value10' },
];

const Template2: Story<typeof FilterSelect> = (args) => {
  const [selectedItem, setselectedItem] = useState<string>();
  const [items] = useState<listItemType2[]>(datatype2);

  return (
    <div>
      <FilterSelect
        itemList={items}
        resolveItemName={(item:listItemType2) => `${item.label} - ${item.value}`}
        onSelectItem={(item:listItemType2) => { setselectedItem(JSON.stringify(item)); }}
        listItemRender={(item:listItemType2) => (<ListItem><span>{item.label} - {item.value}</span></ListItem>)}
        placeholder={"Select farmer type2"}
        noResultsMessage={"No results to show at the moment"}
      />
      <SelectedItem>
        <span>Selected Value:</span>
        <div id="json-element">
          <pre>
            <code>{selectedItem}</code>
          </pre>
        </div>
      </SelectedItem>
    </div>   
  );
};

/*
Disabled
*/

const Template3: Story<typeof FilterSelect> = (args) => {
  const [items] = useState<listItemType[]>(data);

  return (
    <div>
      <FilterSelect
        itemList={items}
        resolveItemName={(item:listItemType) => item.name}
        onSelectItem={() => { }}
        listItemRender={(item:listItemType) => (<ListItem><span>{item.name}</span></ListItem>)}
        placeholder={"Select farmer"}
        noResultsMessage={"No results to show at the moment"}
        disabled
      />
    </div>   
  );
};

export const FirstType = Template.bind({});
export const SecondType = Template2.bind({});
export const Disabled = Template3.bind({});