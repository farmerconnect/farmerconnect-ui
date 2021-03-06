import { IWizardStep } from './WizardSteps/WizardStep/interfaces';
import { wizardStepDefaultStyles } from './WizardSteps/WizardStep/styles';
import { IButton } from './Button/interfaces';
import { buttonDefaultStyles } from './Button/styles';
import { INavigationBar } from './NavigationBar/interfaces';
import { navigationBarDefaultStyles } from './NavigationBar/styles';
import { ILoader } from './Loader/interfaces';
import { loaderDefaultStyles } from './Loader/styles';
import { ITag } from './Tag/interfaces';
import { tagDefaultStyles } from './Tag/styles';
import colors from '../styles/colors';
import { tableDefaultStyles } from './Table/constants';
import { ITable } from './Table/interfaces';

interface ITheme {
  wizardStep: IWizardStep;
  button: IButton;
  navigationBar: INavigationBar;
  loader: ILoader;
  tag: ITag;
  table: ITable;
  colors: {
    [key: string]: string;
  };
}

export const farmerConnectTheme: ITheme = {
  wizardStep: wizardStepDefaultStyles,
  button: buttonDefaultStyles,
  navigationBar: navigationBarDefaultStyles,
  loader: loaderDefaultStyles,
  tag: tagDefaultStyles,
  table: tableDefaultStyles,
  colors,
};

export default ITheme;
