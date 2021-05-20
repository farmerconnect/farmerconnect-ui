import React, { Fragment } from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import ComboboxMulti from "./";
import { IComboboxProps } from "./interfaces";

export default {
  title: "Multi Combobox",
  component: ComboboxMulti,
  argTypes: {
    firstContent: { control: "object" },
    secondContent: { control: "object" },
    textFirstCombo: { control: "string" },
    textSecondCombo: { control: "string" },
    textSearch: { control: "string" },
    textButtonClear: { control: "string" },
    textButtonConfirm: { control: "string" },
  },
} as Meta;

const Template: Story<IComboboxProps> = (args) => <ComboboxMulti {...args} />;

export const Default = Template.bind({});
Default.args = {
  textFirstCombo: "Select one product",
  textSecondCombo: "Select up to 5 items",
  textSearch: "Search item reference number",
  textButtonClear: "Clear selected   ",
  textButtonConfirm: "Confirm selection",
  firstContent: [
    {
      id: "001",
      org_id: "12121212",
      description: "Lorem ipsum dolor sit amet",
      object_sku: "001",
      org_name: "Org One",
      next: null,
    },
    {
      id: "002",
      org_id: "1231231232",
      description: "Lorem ipsum dolor sit amet",
      object_sku: "002",
      org_name: "Org Two",
      next: null,
    },
    {
      id: "003",
      org_id: "1231231332",
      description: "Lorem ipsum dolor sit amet",
      object_sku: "003",
      org_name: "Org Three",
      next: null,
    },
  ],
  secondContent: [
    {
      name: "Product 3",
      information: {
        registered: "Org One",
        id: 1,
        companyPrefix: 9,
      },
    },
    {
      name: "Product 4",
      information: {
        registered: "Org Two",
        id: 2,
        companyPrefix: 3,
      },
    },
    {
      name: "Product 5",
      information: {
        registered: "Org One",
        id: 3,
        companyPrefix: 9,
      },
    },
    {
      name: "Product 6",
      information: {
        registered: "Org One",
        id: 4,
        companyPrefix: 9,
      },
    },
    {
      name: "Product 7",
      information: {
        registered: "Org One",
        id: 5,
        companyPrefix: 9,
      },
    },
    {
      name: "Product 8",
      information: {
        registered: "Org One",
        id: 6,
        companyPrefix: 9,
      },
    },
  ],
  firstItemRender: (content: any) => {
    const id =
      content.id.split(":").length > 1
        ? content.id?.split(":")[5].split(".")[1]
        : content.id;

    const companyPrefix =
      content.id.split(":").length > 1
        ? content.id?.split(":")[5].split(".")[0]
        : content.id;
    return (
      <Fragment>
        <b>{content.description}</b>
        <p>
          Registered by: {content.org_name} - {companyPrefix}
        </p>
      </Fragment>
    );
  },
  secondItemRender: (content: any) => {
    const id =
      content.id.split(":").length > 1
        ? content.id.split(":").pop().split(".").pop()
        : content.id;

    const productId =
      content.product_id.split(":").length > 1
        ? content.product_id.split(":").pop().split(".")[1]
        : content.product_id;

    const companyPrefix =
      content.product_id.split(":").length > 1
        ? content.product_id.split(":").pop().split(".")[0]
        : content.product_id;
    return (
      <Fragment>
        <b>
          ID: {id}
        </b>
        <p>
          Product id: {productId} ︱
          Company prefix: {companyPrefix}
        </p>
      </Fragment>
    );
  },
};
