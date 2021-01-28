import { IBreadcrumb } from "./Breadcrumb/interfaces";
import { breadcrumbDefaultStyles } from "./Breadcrumb/styles";
import { IButton } from "./Button/interfaces";
import { buttonDefaultStyles } from "./Button/styles";

interface ITheme {
    breadcrumb: IBreadcrumb,
    button: IButton
};

export const farmerConnectTheme: ITheme = {
    breadcrumb: breadcrumbDefaultStyles,
    button: buttonDefaultStyles
}

export default ITheme;
