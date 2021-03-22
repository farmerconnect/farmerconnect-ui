export interface IComboProps {
    openContent: any;
    open: boolean;
    disabled?: boolean;
    first?: boolean;
    textCombo: string;
    id: number;
    idOpened: number | null;
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
    clear: boolean;
    firstItemRender: (item: any) => void;
    secondItemRender: (item: any) => void;
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
    firstContentItemRender: (item: any) => void;
    secondContentItemRender: (item: any) => void;
}

export interface IItemMultipleProps {
    content: any;
    handleSelected: any;
    limitReached: boolean;
    contentRender: (item: any) => void;
}

export interface IItemSingle {
    content: any;
    handleSelected: any;
    contentRender: any;
}

export interface IComboTheme {
    colors: IComboColors;
}

export interface IComboColors {
    primary: string,
    secondary: string,
    tertiary?: string
}