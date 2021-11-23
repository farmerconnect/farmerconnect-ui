import { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Orderer from './';

export default {
  title: 'Orderer',
  component: Orderer,
  parameters: {
    docs: {
      source: {
        type: 'code',
      },
    },
  },
  args: {},
} as Meta;

export const Default: Story<any> = (args) => {
  const [sort, setSort] = useState({ actualSortKey: 'description', key: 'description', order: 'asc' });
  const handleSortChange = (_: string, order: string) => setSort((prev: any) => ({ ...prev, order }));

  return <Orderer sort={sort} onSortChange={handleSortChange} />;
};
