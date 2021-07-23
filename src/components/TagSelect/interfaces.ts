export type tagOption = {
  id: string;
  text: string;
  color: string;
  background: string;
};

export interface ITagSelectProps {
  options?: tagOption[];
  selected: tagOption;
  onChange?: (o: tagOption) => void;
}
