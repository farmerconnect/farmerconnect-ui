import React, { Fragment } from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from "@storybook/react/types-6-0";

import Select from "./";
import { ISelectProps } from "./interfaces";

export default {
  title: "Select",
  component: Select,
  argTypes: {
    content: { control: "object" },
    textSelect: { control: "string" },
    textSearch: { control: "string" },
    textButtonClear: { control: "string" },
    textButtonConfirm: { control: "string" },
    ItemRender: { control: "function" },
    multiple: { control: "boolean" },
    limit: { control: "number" },
  },
} as Meta;

const Template: Story<ISelectProps> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  textSelect: "Select one product",
  searchOptions: { visible: true, textSearch: "Search", field: 'id' },
  textButtonClear: "Clear selected",
  textButtonConfirm: "Confirm selection",
  content: [
    {
      id: "urn:ibm:ift:product:class:3509222193835.COFFEE-CHERRY",
      org_id: "9a2103d8-998c-4ecc-aa24-70f8cfa85909",
      description: "COFFEE - CHERRY",
      object_sku: "d0093dd15606437d234f9d20c56ff9f2",
      org_name: "Cooperative",
      next: null,
      checked: false,
    },
    {
      id: "urn:ibm:ift:product:class:3030682152562.COFFEE-GREENBEAN",
      org_id: "03b98726-476c-4e72-abb3-7d68b6b9319e",
      description: "COFFEE - GREEN BEAN",
      object_sku: "37e60d763a85abd5e11aac9824105aaf",
      org_name: "Roaster",
      next: null,
      checked: false,
    },
    {
      id: "urn:ibm:ift:product:class:3509222193835.COFFEE-GREENBEAN",
      org_id: "9a2103d8-998c-4ecc-aa24-70f8cfa85909",
      description: "COFFEE - GREEN BEAN",
      object_sku: "f447767aa7da138e937bb6c860b76305",
      org_name: "Cooperative",
      next: null,
      checked: false,
    },
  ],
  ItemRender: (content: any) => {
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
  multiple: true,
  limit: 2,
};
