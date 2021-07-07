export interface ITextInputProps {
  id?: string;
  classes?: string;
  placeHolder?: string;
  value: string;
  name?: string;
  onChange: (value: string, isValid: boolean) => void;
  validate?: (
    v: string,
    sv: React.Dispatch<React.SetStateAction<boolean>>,
    oc: (v: string, iv: boolean) => void,
    err: React.Dispatch<React.SetStateAction<string>>,
    n: string | undefined
  ) => void;
}
