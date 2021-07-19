import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import Accordion from './';
import { IAccordionProps } from './interfaces';

export default {
  title: 'Accordion',
  component: Accordion,
  argTypes: {},
} as Meta;

const Template: Story<IAccordionProps> = (args) => <Accordion {...args} />;

export const Default = Template.bind({});
Default.args = {
  heading: 'Heading',
  children:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
};

export const ControlledAccordion: Story<IAccordionProps> = (args) => {
  return (
    <Accordion {...args} onToggle={(state) => alert(`changed to ${state}`)} heading="Controlled Accordion">
      The isOpen prop is set to true so the Accordion remains open despite clicking in the header. The onToggle callback
      is called with the next state, so i.e the Accordion is currently open the callback will be fired with false as
      argument.
    </Accordion>
  );
};
ControlledAccordion.argTypes = { isOpen: { defaultValue: false, control: { type: 'boolean' } } };

export const StackedAccordions: Story<IAccordionProps> = (args) =>
  [...new Array(10)].map((_) => <Accordion {...args} />);
StackedAccordions.args = {
  heading: 'Heading',
  children:
    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
};
