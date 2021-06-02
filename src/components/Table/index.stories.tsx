import { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Table from './';
import Button from '../Button';

export default {
  title: 'Table',
  component: Table,
} as Meta;

const Template: Story<any> = (args) => {
  const [sort, setSort] = useState({ key: 'description', order: 'asc' });

  const handleSortChange = (key: string, order: string) => setSort({ key, order });

  return <Table {...args} sort={sort} onSortChange={handleSortChange} />;
};

export const Default = Template.bind({});
Default.args = {
  columns: [
    {
      options: { fitContent: true },
    },
    { text: 'Description' },
    { text: 'Number' },
    { text: 'ID' },
    { text: 'Tags' },
    {
      options: { fitContent: true },
    },
  ],
  children: new Array(5).fill('').map((_, i: number) => (
    <Table.Row key={i}>
      <Table.Column>
        <img src="http://via.placeholder.com/80" alt="" />
      </Table.Column>
      <Table.Column>Lorem Ipsum</Table.Column>
      <Table.Column>123456789</Table.Column>
      <Table.Column>abcde-fghij</Table.Column>
      <Table.Column>Tag 1</Table.Column>
      <Table.Column>
        <Button>Button</Button>
      </Table.Column>
    </Table.Row>
  )),
};

export const Sortable = Template.bind({});
Sortable.args = {
  columns: [
    {
      options: { fitContent: true },
    },
    {
      text: 'Description',
      options: {
        sortable: { key: 'description' },
      },
    },
    {
      text: 'Number',
      options: {
        sortable: { key: 'number' },
      },
    },
    { text: 'ID' },
    {
      text: 'Tags',
      options: {
        sortable: { key: 'tags' },
      },
    },
    {
      options: { fitContent: true },
    },
  ],
  children: new Array(5).fill('').map((_, i: number) => (
    <Table.Row key={i}>
      <Table.Column>
        <img src="http://via.placeholder.com/80" alt="" />
      </Table.Column>
      <Table.Column>Lorem Ipsum</Table.Column>
      <Table.Column>123456789</Table.Column>
      <Table.Column>abcde-fghij</Table.Column>
      <Table.Column>Tag 1</Table.Column>
      <Table.Column>
        <Button>Button</Button>
      </Table.Column>
    </Table.Row>
  )),
};
