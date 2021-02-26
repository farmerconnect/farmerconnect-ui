import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import ComboboxMulti from './';
import { IComboboxProps } from './interfaces';

export default {
  title: 'Multi Combobox',
  component: ComboboxMulti,
  argTypes: {
    firstContent: {control: 'object'},
    secondContent: {control: 'object'},
    textFirstCombo: {control: 'string'},
    textSecondCombo: {control: 'string'},
    textSearch: {control: 'string'},
    textButtonClear: {control: 'string'},
    textButtonConfirm: {control: 'string'},
  },
} as Meta;

const Template: Story<IComboboxProps> = (args) => <ComboboxMulti {...args} />;

export const Default = Template.bind({});
Default.args = {
  textFirstCombo: 'Select one product',
  textSecondCombo: 'Select up to 5 items',
  textSearch: 'Search item reference number',
  textButtonClear: 'Clear selected   ',
  textButtonConfirm: 'Confirm selection',
  firstContent:[
    {
        name: 'Product 1',
        information: {
            registered: 'xxx',
            id: 1,
            companyPrefix: 9,
        }
    },
    {
        name: 'Product 2',
        information: {
            registered: 'xxx',
            id: 1,
            companyPrefix: 9,
        }
    }
],
secondContent: [{
  name: 'Product 3',
  information: {
      registered: 'xxx',
      id: 1,
      companyPrefix: 9,
  }
},
{
  name: 'Product 4',
  information: {
      registered: 'xxx',
      id: 1,
      companyPrefix: 9,
  }
},
{
  name: 'Product 5',
  information: {
      registered: 'xxx',
      id: 1,
      companyPrefix: 9,
  }
},
{
  name: 'Product 6',
  information: {
      registered: 'xxx',
      id: 1,
      companyPrefix: 9,
  }
},
{
  name: 'Product 7',
  information: {
      registered: 'xxx',
      id: 1,
      companyPrefix: 9,
  }
},
{
  name: 'Product 8',
  information: {
      registered: 'xxx',
      id: 1,
      companyPrefix: 9,
  }
}]
};
 