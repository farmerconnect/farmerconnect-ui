import { IWizardStep } from './WizardSteps/WizardStep/interfaces';
import { wizardStepDefaultStyles } from './WizardSteps/WizardStep/styles';
import { IButton } from './Button/interfaces';
import { buttonDefaultStyles } from './Button/styles';
import { INavigationBar } from './NavigationBar/interfaces';
import { navigationBarDefaultStyles } from './NavigationBar/styles';
import { ILoader } from './Loader/interfaces';
import { loaderDefaultStyles } from './Loader/styles';
import { IArrow } from './Icons/Arrow/interfaces';
import { arrowDefaultStyles } from './Icons/Arrow/styles';
import { ITag } from './Tag/interfaces';
import { tagDefaultStyles } from './Tag/styles';
import { ITable } from './Table/interfaces';
import { tableDefaultStyles } from './Table/styles';

interface ITheme {
  wizardStep: IWizardStep;
  button: IButton;
  navigationBar: INavigationBar;
  loader: ILoader;
  arrow: IArrow;
  tag: ITag;
  table: ITable;
}

export const farmerConnectTheme: ITheme = {
  wizardStep: wizardStepDefaultStyles,
  button: buttonDefaultStyles,
  navigationBar: navigationBarDefaultStyles,
  loader: loaderDefaultStyles,
  arrow: arrowDefaultStyles,
  tag: tagDefaultStyles,
  table: tableDefaultStyles,
};

export default ITheme;
