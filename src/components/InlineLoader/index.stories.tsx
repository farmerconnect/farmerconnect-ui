import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import InlineLoader from '.';
import { IInlineLoaderProps } from './interfaces';
import styled from 'styled-components';

export default {
  title: 'InlineLoader',
  component: InlineLoader,
  argTypes: {},
} as Meta;

const Template: Story<IInlineLoaderProps> = (args) => <InlineLoader {...args} />;

export const Default = Template.bind({});
Default.args = { children: <span>Loading...</span>, error: false };

const FloatingLoader = styled(InlineLoader)`
  position: absolute;
  padding: 0.5rem 1rem;
  border-radius: 5rem;
  box-shadow: 0.125rem 0.125rem 0.125rem rgba(0, 0, 0, 0.2);
  left: 50%;
  top: 0;
  transform: translateX(-50%);
`;

export const Floating = () => <FloatingLoader />;
Floating.args = { error: false };
