import { ReactNode } from "react";
import CustomStyles from "../CustomStyles";

export interface IButton {
    colors: IButtonColors
};

export interface IButtonColors {
    primary: string,
    secondary: string,
    tertiary?: string
}

export interface IButtonProps extends CustomStyles {
    backgroundColor?: string,
    color?: string,
    hoverColor?: string,
    onClick(): void,
    children?: ReactNode
}
