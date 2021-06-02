import { render } from '@testing-library/react';
import Table from './';

describe('Table Component', () => {
  const table = (
    <Table
      columns={[
        {
          options: { fitContent: true },
        },
        { text: 'Description' },
        { text: 'Number' },
        { text: 'ID' },
        { text: 'Tags' },
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
        </Table.Row>
      ))}
    </Table>
  );

  it('renders without errors', () => {
    const container = render(table);
    expect(container.getAllByText(/Lorem Ipsum/)).toBeTruthy();
  });

  it('renders with the correct row amount', () => {
    const container = render(table);
    expect(container.getAllByText(/Lorem Ipsum/)).toHaveLength(5);
  });
});
