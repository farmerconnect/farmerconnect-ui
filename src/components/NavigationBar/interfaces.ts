import { ButtonHTMLAttributes } from "react";
import CustomStyles from "../CustomStyles";

export interface INavigationBarColors {
    primary: string,
    secondary: string,
    tertiary?: string
}

export interface INavigationBar {
    colors: INavigationBarColors
}

export interface INavigationBarButton extends CustomStyles, ButtonHTMLAttributes<HTMLButtonElement> {
    
};

export interface INavigationBarProps extends CustomStyles {
    backgroundColor?: string,
    color?: string,
    disabledColor?: string
    previousButton?: INavigationBarButton,
    nextButton?: INavigationBarButton
}
