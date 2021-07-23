import { IWizardStepColorProps } from './WizardStep/interfaces';

export interface IWizardStepProps {
  active: boolean;
  text: string;
}

export interface IWizardStepsProps extends IWizardStepColorProps {
  wizardSteps: IWizardStepProps[];
}
