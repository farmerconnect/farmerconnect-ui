import { useState, useEffect } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { action } from '@storybook/addon-actions';

import Pagination from './';
import { IPaginationProps } from './interfaces';

export default {
  title: 'Pagination',
  component: Pagination,
  argTypes: {
    pagination: {
      type: {
        name: 'IPagination',
        required: true,
      },
      description:
        'The pagination object which controls the initial pageSize, current page and total item count. Whenever this changes internally it will be passed to onPaginate and onPaginate will be called.',
      table: {
        type: { summary: 'IPagination' },
      },
    },
    onPaginate: {
      type: {
        name: 'function',
        required: true,
      },
      description: 'The function that will be called whenever pagination changes.',
      table: {
        type: { summary: 'PageSizeLabelTemplate' },
      },
    },
    pageSizeArray: {
      description: 'Array of page numbers to be displayed in the page size select',
      defaultValue: [10, 25, 50, 100],
      table: {
        type: { summary: 'number[]' },
        defaultValue: { summary: `[10, 25, 50, 100]` },
      },
    },
    displayedItemsTemplate: {
      description:
        'A string template function that takes the firstItem, lastItem and totalItemCount and formats it as the page description.',
      defaultValue: (firstItem: number, lastItem: number, totalItemCount: number) =>
        `${firstItem}-${lastItem} of ${totalItemCount}`,
      control: {
        type: 'select',
      },
      table: {
        type: { summary: 'DisplayedItemsTemplate' },
        // eslint-disable-next-line no-template-curly-in-string
        defaultValue: { summary: '`${firstItem}-${lastItem} of ${totalItemCount}`' },
      },
    },
    pageSizeLabelTemplate: {
      description: 'A string template function that formats the labels in the page size select.',
      defaultValue: (pageSize: number) => `${pageSize} / page`,
      control: {
        type: 'select',
      },
      table: {
        type: { summary: 'PageSizeLabelTemplate' },
        // eslint-disable-next-line no-template-curly-in-string
        defaultValue: { summary: '`${pageSize} / page`' },
      },
    },
    hasSelect: {
      description: 'Show/hides the page size select.',
      defaultValue: true,
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: true },
      },
    },
    hasItemCount: {
      description: 'Show/hides the item count text.',
      defaultValue: true,
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: true },
      },
    },
    hasArrows: {
      description: 'Shows/hides the next and previous page arrows',
      defaultValue: true,
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: true },
      },
    },
  },
} as Meta;

const Template: Story<IPaginationProps> = (args) => {
  const [paginationState, setPaginationState] = useState(args.pagination);

  useEffect(() => {
    setPaginationState(args.pagination);
  }, [args.pagination]);

  return (
    <>
      <Pagination
        {...args}
        pagination={paginationState}
        onPaginate={(nextPagination) => {
          setPaginationState(nextPagination);
          action(`onPaginate: ${JSON.stringify(nextPagination)}`);
        }}
      ></Pagination>
      <pre>{JSON.stringify(paginationState)}</pre>
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  pagination: {
    pageSize: 50,
    currentPageIndex: 0,
    totalItemCount: 101,
  },
  pageSizeArray: [10, 25, 50, 100],
  displayedItemsTemplate: (firstItem, lastItem, totalItemCount) => `${firstItem}-${lastItem} of ${totalItemCount}`,
  pageSizeLabelTemplate: (pageSize) => `${pageSize} / page`,
  hasArrows: true,
  hasSelect: true,
};
