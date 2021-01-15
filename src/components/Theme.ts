import { IButton } from "./Button/interfaces";
import { buttonDefaultStyles } from "./Button/styles";

interface ITheme {
    button: IButton
};

export const farmerConnectTheme: ITheme = {
    button: buttonDefaultStyles
}

export default ITheme;
