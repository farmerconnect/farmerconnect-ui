import { useState, useEffect } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Pagination from './';
import { IPaginationProps } from './interfaces';

export default {
  title: 'Pagination',
  component: Pagination,
  argTypes: {},
} as Meta;

const Template: Story<IPaginationProps> = (args) => {
  const [paginationState, setPaginationState] = useState(args.pagination);

  useEffect(() => {
    setPaginationState(args.pagination);
  }, [args.pagination]);

  return (
    <>
      <Pagination {...args} pagination={paginationState} onPaginate={setPaginationState}></Pagination>
      <pre>{JSON.stringify(paginationState)}</pre>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  hasArrows: true,
  pagination: {
    pageSize: 50,
    currentPageIndex: 0,
    totalItemCount: 101,
  },
  hasSelect: true,
  pageSizeArray: [10, 25, 50, 100],
};
