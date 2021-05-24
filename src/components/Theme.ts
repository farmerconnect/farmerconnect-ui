import { IBreadcrumb } from "./Breadcrumbs/Breadcrumb/interfaces";
import { breadcrumbDefaultStyles } from "./Breadcrumbs/Breadcrumb/styles";
import { IButton } from "./Button/interfaces";
import { buttonDefaultStyles } from "./Button/styles";
import { INavigationBar } from "./NavigationBar/interfaces";
import { navigationBarDefaultStyles } from "./NavigationBar/styles";
import { ILoader } from "./Loader/interfaces";
import { loaderDefaultStyles } from "./Loader/styles";

interface ITheme {
  breadcrumb: IBreadcrumb;
  button: IButton;
  navigationBar: INavigationBar;
  loader: ILoader;
}

export const farmerConnectTheme: ITheme = {
  breadcrumb: breadcrumbDefaultStyles,
  button: buttonDefaultStyles,
  navigationBar: navigationBarDefaultStyles,
  loader: loaderDefaultStyles,
};

export default ITheme;
