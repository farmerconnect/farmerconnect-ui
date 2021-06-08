// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import styled from 'styled-components';
import CustomButton from '../CustomButton';

import Dropdown from '.';
import { IDropdownListProps } from './interfaces';
import { Icon } from '../..';

export default {
  title: 'Dropdown',
  component: Dropdown,
  argTypes: {},
  args: {},
} as Meta;

const Button = styled(CustomButton)`
  position: relative;
  padding: 0;
`;

const dropdownItems = [
  { label: 'Item 1', value: 'item1' },
  { label: 'Item 2', value: 'item2' },
  { label: 'Item 3', value: 'item3' },
  { label: 'Item 4', value: 'item4' },
];

const Template: Story<IDropdownListProps<{ label: string; value: string }>> = (args) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Button onClick={() => setIsOpen(!isOpen)} variant="link">
      Toggle dropdown
      <Icon.ViewMore />
      <Dropdown
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        items={dropdownItems}
        position="middle-right"
        onSelect={(item) => alert(JSON.stringify(item))}
      />
    </Button>
  );
};

export const Default = Template.bind({});
