import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import WizardSteps from '.';
import { IWizardStepsProps } from './interfaces';

export default {
  title: 'WizardSteps',
  component: WizardSteps,
  argTypes: {
    doneColor: { control: 'color' },
    undoneColor: { control: 'color' },
    titleColor: { control: 'color' },
  },
} as Meta;

const Template: Story<IWizardStepsProps> = (args) => <WizardSteps {...args} />;

export const Default = Template.bind({});
Default.args = {
  wizardSteps: [
    { active: false, text: 'STEP ONE' },
    { active: true, text: 'STEP TWO' },
    { active: false, text: 'STEP THREE' },
  ],
};
