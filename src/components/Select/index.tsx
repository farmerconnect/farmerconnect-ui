import { ReactNode } from 'react';
import { Select } from './styles';
import { components, Props, OptionProps } from 'react-select';
import { CheckboxUnchecked, CheckboxChecked } from '../Icons/Checkbox';

type CustomOptionProps = {
  children: ReactNode;
  isSelected: boolean;
  isMulti: boolean;
} & Props;

const CustomOption = ({ children, ...props }: OptionProps<{}, boolean>) => {
  return (
    <components.Option {...props}>
      {props.isMulti ? props.isSelected ? <CheckboxChecked className="checked" /> : <CheckboxUnchecked /> : null}
      {children}
    </components.Option>
  );
};

const CustomSelect = (props: CustomOptionProps) => (
  <Select
    components={{
      IndicatorSeparator: null,
      DropdownIndicator: DropdownIcon,
      ClearIndicator: null,
      Option: CustomOption,
    }}
    classNamePrefix="select"
    hideSelectedOptions={false}
    closeMenuOnSelect={props.isMulti ? false : true}
    {...props}
  />
);

const DropdownIcon = () => (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.73692 0.266515C9.38765 -0.0888383 8.82345 -0.0888383 8.47419 0.266515L4.99943 3.80182L1.52468 0.266515C1.17542 -0.0888383 0.611217 -0.0888383 0.26195 0.266515C-0.0873156 0.621868 -0.0873156 1.1959 0.26195 1.55125L4.37255 5.73349C4.72181 6.08884 5.28601 6.08884 5.63528 5.73349L9.74588 1.55125C10.0862 1.20501 10.0862 0.621868 9.73692 0.266515Z"
      fill="#141414"
      fillOpacity="0.7"
    />
  </svg>
);

export default CustomSelect;
