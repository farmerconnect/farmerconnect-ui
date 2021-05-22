import React, { useState } from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import OrderSelect, { contentType, SelectProps } from ".";

export default {
  title: "OrderSelect",
  component: OrderSelect,
  argTypes: {},
} as Meta;

const data = [
  { id: "Wagner", checked: false },
  { id: "Jéssica", checked: false },
  { id: "Wanda", checked: false },
  { id: "Valter", checked: false },
  { id: "Leonardo", checked: false },
  { id: "Maristela", checked: false },
  { id: "VP", checked: false },
  { id: "Marcelo", checked: false },
  { id: "Roberto", checked: false },
  { id: "Gabigol", checked: false },
  { id: "Renato", checked: false },
  { id: "Gurizão", checked: false },
];

const Template: Story<SelectProps> = (args) => {
  const [content, setContent] = useState(data);

  return (
    <OrderSelect
      {...args}
      content={content}
      onChange={setContent}
      itemRenderer={(item) => item.id}
      onConfirmSelection={(c: contentType[]) => alert(JSON.stringify(c))}
      clearButtonText="Clear selection"
      confirmButtonText="Confirm selection"
      filterPlaceholderText="Search PO number"
      headingText="Select up to 2 purchase orders"
      emptyText="There are no results matching your search"
    />
  );
};

export const Default = Template.bind({});
Default.args = {};
