// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { useState } from 'react';

import Card from '.';
import { ICardProps } from './interfaces';

export default {
  title: 'Card',
  component: Card,
  argTypes: {},
} as Meta;

const Template: Story<ICardProps> = (args) => {
  const [height, setHeight] = useState<string>('236px');
  const [collapse, setCollapse] = useState<string | undefined>(args.collapse);
  const [collapseState, setCollapseState] = useState<'more' | 'less' | undefined>(args.collapseState);

  const onAction = () => {
    alert('Action');
  }

  const onCollapse = () => {
    if (collapseState === 'more') {
      setHeight('354px');
      setCollapse('See less');
      setCollapseState('less');
    }
    else if (collapseState === 'less') {
      setHeight('236px');
      setCollapse('See more');
      setCollapseState('more');
    }
  }

  return (
    <div style={{ height: height, width: '314px', position: 'relative' }}>
      <Card 
        {...args}
        maxHeight={height}
        maxWidth={'314px'}
        collapse={collapse}
        collapseState={collapseState}
        onAction={onAction}
        onCollapse={onCollapse} />
    </div>
  )
};

const Template2: Story<ICardProps> = (args) => {
  const [height, setHeight] = useState<string>('296px');
  const [collapse, setCollapse] = useState<string | undefined>(args.collapse);
  const [collapseState, setCollapseState] = useState<'more' | 'less' | undefined>(args.collapseState);

  const onAction = () => {
    alert('Action');
  }

  const onCollapse = () => {
    if (collapseState === 'more') {
      setHeight('444px');
      setCollapse('See less');
      setCollapseState('less');
    }
    else if (collapseState === 'less') {
      setHeight('296px');
      setCollapse('See more');
      setCollapseState('more');
    }
  }

  return (
    <div style={{ height: height, width: '314px', position: 'relative' }}>
      <Card 
        {...args}
        maxHeight={height}
        maxWidth={'314px'}
        collapse={collapse}
        collapseState={collapseState}
        onAction={onAction}
        onCollapse={onCollapse} />
    </div>
  )
};

export const Default = Template.bind({});
Default.args = {
  type: 'Default',
  title: "Title",
  action: "Action",
  collapse: "See more",
  collapseState: "more",
};

export const Main = Template2.bind({});
Main.args = {
  type: 'Main',
  title: "Title",
  action: "Action",
  collapse: "See more",
  collapseState: "more",
};