export interface IComboProps {
  openContent: any;
  open: boolean;
  disabled?: boolean;
  textCombo: string;
  id: number;
}

export interface ICombo {
  open: boolean;
  disabled?: boolean;
}

export interface ISelectProps {
  content: any[];
  textSelect: string;
  searchOptions: ISearch;
  textButtonClear: string;
  textButtonConfirm: string;
  onChange: any;
  loading: boolean;
  limit: number;
  clear: boolean;
  multiple: boolean;
  ItemRender: (item: any) => void;
}

export interface ISearch {
  visible: boolean;
  textSearch?: string;
  field?: string;
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
  searchOptions: ISearch;
  textButtonClear: string;
  textButtonConfirm: string;
  limitReached: boolean;
  itemRender: (item: any) => void;
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
  disable: boolean;
  disableButtonsContent: boolean;
  isLoading: boolean;
  limitReached: boolean;
}
export interface IReducer {
  type: ActionType;
  payload?: any;
}

export enum ActionType {
  SET_SINGLE_ITEM = 'SET_SINGLE_ITEM',
  SET_MULTIPLE_ITEM = 'SET_MULTIPLE_ITEM',
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
