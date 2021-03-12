export interface ITextInputProps {
  id?: string;
  classes?: string;
  placeHolder?: string;
  value: string;
  onChange: (value: string, isValid: boolean) => void;
}