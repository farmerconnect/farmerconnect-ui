export interface IComboProps {
    openContent: any;
    open: boolean;
    disabled?: boolean;
    first?: boolean;
    textCombo: string;
}

export interface ICombo {
    open: boolean;
    disabled?: boolean;
}

export interface IComboboxProps {
    firstContent: any[];
    secondContent?: any[];
    textFirstCombo: string;
    textSecondCombo: string;
    textSearch: string;
    textButtonClear: string;
    textButtonConfirm: string;
    onChange: any;
    loading: boolean;
    limit: number;
}

export interface IContentProps {
    open: boolean;
    content: any;
    itemSelect: any;
    multiple: boolean;
    disableButtons: boolean;
    handleClear: any;
    handleConfirm: any;
    onSearch: any;
    textSearch: string;
    textButtonClear: string;
    textButtonConfirm: string;
    limitReached: boolean;
}

export interface IItemMultipleProps {
    content: any;
    handleSelected: any;
    limitReached: boolean;
}

export interface IItemSingle {
    content: any;
    handleSelected: any;
}

export interface IComboTheme {
    colors: IComboColors;
}

export interface IComboColors {
    primary: string,
    secondary: string,
    tertiary?: string
}