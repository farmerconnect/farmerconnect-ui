import React, { Fragment } from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Select from './';
import { ISelectProps } from './interfaces';

export default {
  title: 'Select',
  component: Select,
  argTypes: {
    content: { control: 'object' },
    textSelect: { control: 'string' },
    textSearch: { control: 'string' },
    textButtonClear: { control: 'string' },
    textButtonConfirm: { control: 'string' },
    ItemRender: { control: 'function' },
    multiple: { control: 'boolean' },
    limit: { control: 'number' },
  },
} as Meta;

const Template: Story<ISelectProps> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  textSelect: 'Select one product',
  searchOptions: { visible: true, textSearch: 'Search', field: 'id' },
  textButtonClear: 'Clear selected',
  textButtonConfirm: 'Confirm selection',
  content: [
    {
      id: '001',
      org_id: '02020202020',
      description: 'Lorem ipsum dolor sit amet',
      object_sku: '1231231231312313',
      org_name: 'Org One',
      next: null,
      checked: false,
    },
    {
      id: '002',
      org_id: '123123123123',
      description: 'Lorem ipsum dolor sit amet',
      object_sku: '1231222232323',
      org_name: 'Org Two',
      next: null,
      checked: false,
    },
    {
      id: '003',
      org_id: '02020202020',
      description: 'Lorem ipsum dolor sit amet',
      object_sku: '12312221112323',
      org_name: 'Org One',
      next: null,
      checked: false,
    },
  ],
  ItemRender: (content: any) => {
    const companyPrefix = content.id.split(':').length > 1 ? content.id?.split(':')[5].split('.')[0] : content.id;
    return (
      <Fragment>
        <b>{content.description}</b>
        <p>
          Registered by: {content.org_name} - {companyPrefix}
        </p>
      </Fragment>
    );
  },
  multiple: true,
  limit: 2,
};
