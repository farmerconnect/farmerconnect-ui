export interface IWizardStep {
  colors: IWizardStepColors;
}

export interface IWizardStepColors {
  primary: string;
  secondary: string;
  tertiary?: string;
}

export interface IWizardStepColorProps {
  doneColor?: string;
  undoneColor?: string;
  titleColor?: string;
}

export interface IWizardStepBarProps extends IWizardStepColorProps {
  active?: boolean;
  done: boolean;
}

export interface IWizardStepProps extends IWizardStepBarProps {
  hasNext?: boolean;
  hasPrevious?: boolean;
  text: string;
}

export interface IWizardStepLineProps extends IWizardStepBarProps {
  visible?: boolean;
}
