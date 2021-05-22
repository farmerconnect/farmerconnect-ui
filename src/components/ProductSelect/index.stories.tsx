import React, { useState } from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import ProductSelect, { contentType, SelectProps } from ".";

export default {
  title: "ProductSelect",
  component: ProductSelect,
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
  const [items, setItems] = useState(data);
  const [product, setProduct] = useState({ id: null });

  return (
    <ProductSelect
      {...args}
      disableItems={product.id === null}
      disableProducts={product.id !== null}
      itemRenderer={(item) => item.id}
      items={items}
      limit={2}
      onChange={setItems}
      onConfirmSelection={(items) => alert(JSON.stringify(items))}
      onSelectProduct={(p) => setProduct(p)}
      productRenderer={(p) => (
        <>
          <p>{p.id}</p>
          <p>description {p.id}</p>
        </>
      )}
      products={data}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};
