import { ButtonHTMLAttributes } from "react";
import CustomStyles from "../CustomStyles";

export interface IComboProps {
    openContent: any;
    open: boolean;
    disabled?: boolean;
    first?: boolean;
}

export interface ICombo {
    open: boolean;
    disabled?: boolean;
}

export interface IButton {
    colors: IButtonColors
};

export interface IButtonColors {
    primary: string,
    secondary: string,
    tertiary?: string
}

export interface IComboboxProps extends CustomStyles, ButtonHTMLAttributes<HTMLButtonElement> {
    
}
