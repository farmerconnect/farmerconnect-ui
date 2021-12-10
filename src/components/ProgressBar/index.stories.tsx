import { Story, Meta } from '@storybook/react/types-6-0';
import { IProgressBar, progressBarColorList } from './interfaces';
import ProgressBar from '.';
import { useEffect, useState } from 'react';

export default {
	title: 'ProgressBar',
	component: ProgressBar,
	argTypes: {
    backgroundColor: {
      description:
        'Sets the color for the filling bar. The colors are limited to the colors available in the design library. If no color is set, it will default to "fc_green".',
      defaultValue: undefined,
      control: {
        type: 'select',
      },
      options: progressBarColorList,
      table: {
        type: { summary: 'ProgressBarColor' },
        defaultValue: { summary: 'fc_green' },
      }
    },
    trackColor: {
      description:
        'Sets the color for the track. The colors are limited to the colors available in the design library. If no color is set, it will default to "fc_black_5".',
      defaultValue: undefined,
      control: {
        type: 'select',
      },
      options: progressBarColorList,
      table: {
        type: { summary: 'ProgressBarColor' },
        defaultValue: { summary: 'fc_black_5' },
      }
    },
    height: {
      description:
        'Sets the height of the progress bar. Value in px. If no height is set, it will default to 4.',
      defaultValue: undefined,
      control: {
        type: 'number',
      },
      table: {
        type: { summary: 'number' },
        defaultValue: { summary: 4 },
      }
    },
  },
} as Meta;

const Template: Story<IProgressBar> = (args) => {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setInterval(() => setCompleted(prevState => prevState + 1 === 101 ? 0 : prevState + 1), 500);
  }, []);

  return (
    <div>
      <ProgressBar {...args} completed={completed} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  height: 4,
};