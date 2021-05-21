export interface ITextInputProps {
  id?: string;
  classes?: string;
  placeHolder?: string;
  value: string;
  name?: string;
  onChange: (value: string, isValid: boolean) => void;
}
