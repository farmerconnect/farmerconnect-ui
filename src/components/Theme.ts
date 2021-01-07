import { Button } from "./Button/interfaces";
import { buttonDefaultStyles } from "./Button/styles";

interface Theme {
    button: Button
};

export const farmerConnectTheme: Theme = {
    button: buttonDefaultStyles
}

export default Theme;
