export interface ITextInputProps {
  id?: string;
  classes?: string;
  placeHolder?: string;
  onChange: (value: string, isValid: boolean) => void;
}