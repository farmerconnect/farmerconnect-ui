import { IBreadcrumb } from "./Breadcrumbs/Breadcrumb/interfaces";
import { breadcrumbDefaultStyles } from "./Breadcrumbs/Breadcrumb/styles";
import { IButton } from "./Button/interfaces";
import { buttonDefaultStyles } from "./Button/styles";
import { INavigationBar } from "./NavigationBar/interfaces";
import { navigationBarDefaultStyles } from "./NavigationBar/styles";

interface ITheme {
    breadcrumb: IBreadcrumb,
    button: IButton,
    navigationBar: INavigationBar
};

export const farmerConnectTheme: ITheme = {
    breadcrumb: breadcrumbDefaultStyles,
    button: buttonDefaultStyles,
    navigationBar: navigationBarDefaultStyles
}

export default ITheme;
