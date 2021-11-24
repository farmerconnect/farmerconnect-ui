import { useEffect, useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { IRange } from './interfaces';
import Range from '.';
import colors from '../../styles/colors';

export default {
  title: 'Range',
  component: Range,
  argTypes: {
    axis: {
      control: 'inline-radio',
      options: ['x', 'y', 'xy'],
      description: 'Slider axis',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'x' },
      },
    },
    x: {
      control: 'range',
      description: 'Current value of the x axis',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '50' },
      },
    },
    y: {
      control: 'range',
      description: 'Current value of the y axis',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '50' },
      },
    },
    onChange: {
      type: {
        name: 'function',
      },
      description: 'The function that will handle the onChange event',
      table: {
        type: { summary: '(values: { x: number; y: number }) => void' },
        defaultValue: { summary: 'null' },
      },
    },
    onDragStart: {
      type: {
        name: 'function',
      },
      description: 'The function that will be called after the user starts to interact with the component',
      table: {
        type: { summary: '(e: MouseEvent) => void' },
        defaultValue: { summary: 'null' },
      },
    },
    onDragEnd: {
      type: {
        name: 'function',
      },
      description: 'The function that will be called after the user ends to interact with the component',
      table: {
        type: { summary: '(e: MouseEvent) => void' },
        defaultValue: { summary: 'null' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the interaction with the component',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    xmax: {
      control: 'number',
      description: 'Maximum value for the x axis',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '100' },
      },
    },
    xmin: {
      control: 'number',
      description: 'Minimum value for the x axis',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '100' },
      },
    },
    ymax: {
      control: 'number',
      description: 'Maximum value for the y axis',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '100' },
      },
    },
    ymin: {
      control: 'number',
      description: 'Minimum value for the y axis',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '100' },
      },
    },
    xstep: {
      control: 'number',
      description: 'The value of step in the x axis',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
    ystep: {
      control: 'number',
      description: 'The value of step in the y axis',
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: '1' },
      },
    },
    xreverse: {
      control: 'boolean',
      description: 'Reverse the x axis',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    yreverse: {
      control: 'boolean',
      description: 'Reverse the y axis',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
} as Meta;

const Template: Story<IRange> = (args) => {
  const [value, setValue] = useState({ x: 50, y: 50 });

  useEffect(() => {
    setValue({ x: args.x || 50, y: args.y || 50 });
  }, [args.x, args.y]);

  return (
    <div>
      <div style={{ height: 150, width: 150, display: 'flex' }}>
        <Range {...args} x={value.x} y={value.y} onChange={setValue} />
      </div>
      <pre>{JSON.stringify(value)}</pre>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  axis: 'x',
};

export const YAxis = Template.bind({});
YAxis.args = {
  axis: 'y',
};

export const XYAxis = Template.bind({});
XYAxis.args = {
  axis: 'xy',
};

export const Reverse = Template.bind({});
Reverse.args = {
  axis: 'x',
  xreverse: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  axis: 'x',
  disabled: true,
};

export const CustomStep = Template.bind({});
CustomStep.args = {
  axis: 'x',
  xstep: 25,
};

export const CustomMinMaxValue = Template.bind({});
CustomMinMaxValue.args = {
  axis: 'x',
  xmax: 500,
  xmin: 100,
};

export const CustomStyle = Template.bind({});
CustomStyle.args = {
  axis: 'x',
  styles: {
    track: {
      backgroundColor: colors.fc_light_red,
    },
    active: {
      backgroundColor: colors.fc_red,
    },
    thumb: {
      backgroundColor: colors.fc_red,
    },
  },
};
