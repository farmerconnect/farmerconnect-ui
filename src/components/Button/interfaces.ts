import { ReactNode } from "react";
import CustomStyles from "../CustomStyles";

export interface Button {
    colors: ButtonColors
};

export interface ButtonColors {
    primary: string,
    secondary: string
}

export interface ButtonProps extends CustomStyles {
    backgroundColor?: string,
    color?: string,
    children?: ReactNode
}
