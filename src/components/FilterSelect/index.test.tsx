import { getByAltText, render } from '@testing-library/react';
import FilterSelect from '.';
import selectEvent from 'react-select-event';

describe('FilterSelect Component', () => {
  const data:any[] = [
    { name: 'Alex Smith    | +55 55 99999 9120', id: 1 },
    { name: 'Ronald Smith  | +55 55 99999 9121', id: 2 }
  ];
  const filter = (
    <FilterSelect
        itemList={data}
        resolveItemName={(item:any) => item.name}
        onSelectItem={(item:any) => {}}
        listItemRender={(item:any) => (<span>{item.name}</span>)}
        placeholder={"Select farmer"}
        noResultsMessage={"No results to show at the moment"}
      />
  );

  it('renders without errors', () => {
    const container = render(filter);
    expect(container.getByText(/Alex Smith/i)).toBeInTheDocument();
    expect(container.getByText(/Ronald Smith/i)).toBeInTheDocument();
  });
});
