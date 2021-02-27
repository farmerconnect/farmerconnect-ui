import { IBreadcrumb } from "./Breadcrumbs/Breadcrumb/interfaces";
import { breadcrumbDefaultStyles } from "./Breadcrumbs/Breadcrumb/styles";
import { IButton } from "./Button/interfaces";
import { buttonDefaultStyles } from "./Button/styles";
import { INavigationBar } from "./NavigationBar/interfaces";
import { navigationBarDefaultStyles } from "./NavigationBar/styles";
import { IComboTheme } from './ComboboxMulti/interfaces';
import { comboBoxDefaultStyles } from './ComboboxMulti/styles';

interface ITheme {
    breadcrumb: IBreadcrumb,
    button: IButton,
    navigationBar: INavigationBar,
    comboBoxMulti: IComboTheme,
};

export const farmerConnectTheme: ITheme = {
    breadcrumb: breadcrumbDefaultStyles,
    button: buttonDefaultStyles,
    navigationBar: navigationBarDefaultStyles,
    comboBoxMulti: comboBoxDefaultStyles
}

export default ITheme;
