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
  secondContentItemRender?: (item: any) => void;
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
  primary: string;
  secondary: string;
  tertiary?: string;
}
export interface IInitialValues {
  open: boolean;
  actualContent: any[];
  selectedContent: any[];
  selectedContent2: any[];
  disable1: boolean;
  disable2: boolean;
  idOpened: number;
  multiple: boolean;
  content: any[];
  content2: any[];
  disableButtonsContent: boolean;
  isLoading: boolean;
  limitReached: boolean;
}
export interface IReducer {
  type: ActionType;
  payload?: any;
}

export enum ActionType {
  SET_ISLOADING = 'SET_ISLOADING',
  SET_FIRST_CONTENT = 'SET_FIRST_CONTENT',
  SET_SECOND_CONTENT = 'SET_SECOND_CONTENT',
  SET_SECOND_CONTENT_SELECTED = 'SET_SECOND_CONTENT_SELECTED',
  SET_CLEAR = 'SET_CLEAR',
  OPEN_CONTENT = 'OPEN_CONTENT',
  SELECT_ITEM = 'SELECT_ITEM',
  CLEAR_FIRST_SELECTED = 'CLEAR_FIRST_SELECTED',
  CLEAR_SECOND_SELECTED = 'CLEAR_SECOND_SELECTED',
  CONFIRM_SELECT = 'CONFIRM_SELECT',
  SET_ACTUAL_CONTENT = 'SET_ACTUAL_CONTENT',
  SET_OPEN = 'SET_OPEN',
}
