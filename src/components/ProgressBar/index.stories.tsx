import { Story, Meta } from '@storybook/react/types-6-0';
import { IProgressBar } from './interfaces';
import ProgressBar from '.';
import { useEffect, useState } from 'react';

export default {
	title: 'ProgressBar',
	component: ProgressBar,
	argTypes: {},
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
  backgroundColor: '#00E394',
};