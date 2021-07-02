import DropdownSelect from '.';
import { render, fireEvent } from '@testing-library/react';
import { data, ListItem } from './index.stories';

describe('DropdownSelect component', () => {
  it('renders properly', () => {
    const onChange = jest.fn();
    const container = render(
      <DropdownSelect
        content={data}
        onChange={onChange}
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
      />
    );
    expect(container.getByText(/Select columns to view./i)).toBeInTheDocument();
  });

  it('renders options', () => {
    const onChange = jest.fn();
    const container = render(
      <DropdownSelect
        content={data}
        onChange={onChange}
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
      />
    );
    expect(container.getByText(/Item 3/i)).toBeVisible();
  });

  it('calls onChange with the proper argument', () => {
    const onChange = jest.fn();
    const container = render(
      <DropdownSelect
        content={[{ id: 'Item 5', checked: false, default: false }]}
        onChange={onChange}
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
      />
    );
    fireEvent.click(container.getByText(/Item 5/i));
    expect(onChange).toHaveBeenCalledWith([{ id: 'Item 5', checked: true, default: false }]);
  });

  it('filter options by text', () => {
    const onChange = jest.fn();
    const container = render(
      <DropdownSelect
        content={data}
        onChange={onChange}
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
      />
    );
    fireEvent.change(container.getByPlaceholderText(/Find columns.../i), { target: { value: 'Item 3' } });
    expect(container.getByText('Item 3')).toBeInTheDocument();
    fireEvent.change(container.getByPlaceholderText(/Find columns.../i), { target: { value: 'x' } });
    expect(container.queryByText('Item 3')).not.toBeInTheDocument();
    expect(container.getByText('There are no results matching your search')).toBeInTheDocument();
  });
});
