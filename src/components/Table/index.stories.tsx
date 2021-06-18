import { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Table from './';
import Button from '../Button';

export default {
  title: 'Table',
  component: Table,
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
} as Meta;

export const Default: Story<any> = () => (
  <Table
    columns={[
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
    ]}
  >
    {new Array(5).fill('').map((_, i: number) => (
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
    ))}
  </Table>
);

export const Sortable: Story<any> = () => {
  const [sort, setSort] = useState({ key: 'description', order: 'asc' });

  const handleSortChange = (key: string, order: string) => setSort({ key, order });

  return (
    <Table
      sort={sort}
      onSortChange={handleSortChange}
      columns={[
        {
          options: { fitContent: true },
        },
        {
          text: 'Description',
          options: {
            sortable: { key: 'description' },
          },
        },
        { text: 'Number' },
        {
          text: 'ID',
          options: {
            sortable: { key: 'id' },
          },
        },
        {
          text: 'Tags',
          options: {
            sortable: { key: 'tags' },
          },
        },
        {
          options: { fitContent: true },
        },
      ]}
    >
      {new Array(5).fill('').map((_, i: number) => (
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
      ))}
    </Table>
  );
};

export const Centered: Story<any> = () => (
  <Table
    columns={[
      {
        options: { fitContent: true },
      },
      // Centers the whole column
      { text: 'Description', options: { centered: true } },
      { text: 'Number' },
      { text: 'ID' },
      { text: 'Tags' },
      {
        options: { fitContent: true },
      },
    ]}
  >
    {new Array(5).fill('').map((_, i: number) => (
      <Table.Row key={i}>
        <Table.Column>
          <img src="http://via.placeholder.com/80" alt="" />
        </Table.Column>
        <Table.Column>Lorem Ipsum</Table.Column>
        <Table.Column>123456789</Table.Column>
        <Table.Column>abcde-fghij</Table.Column>
        {/* Centers only the body cell */}
        <Table.Column centered>Tag 1</Table.Column>
        <Table.Column>
          <Button>Button</Button>
        </Table.Column>
      </Table.Row>
    ))}
  </Table>
);

export const Empty: Story<any> = () => (
  <Table
    columns={[
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
    ]}
  >
    <Table.Row>
      <Table.Column centered colSpan={6}>
        There are no items
      </Table.Column>
    </Table.Row>
  </Table>
);

export const Slim: Story<any> = () => (
  <Table
    slim
    columns={[
      { text: 'ID' },
      { text: 'Description' },
      { text: 'Number' },
      { text: 'Address' },
      { text: 'Tags' },
      {
        options: { fitContent: true },
      },
    ]}
  >
    {new Array(5).fill('').map((_, i: number) => (
      <Table.Row key={i}>
        <Table.Column>{i}</Table.Column>
        <Table.Column>Lorem Ipsum</Table.Column>
        <Table.Column>123456789</Table.Column>
        <Table.Column>abcde-fghij</Table.Column>
        <Table.Column>Address</Table.Column>
        <Table.Column>
          <Button>Button</Button>
        </Table.Column>
      </Table.Row>
    ))}
  </Table>
);
