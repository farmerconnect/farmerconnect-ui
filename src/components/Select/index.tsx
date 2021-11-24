import { ReactNode } from 'react';
import { Select } from './styles';
import { components, Props, OptionProps } from 'react-select';
import { CheckboxUnchecked, CheckboxChecked } from '../Icons/Checkbox';
import * as Icon from '../Icons';

type CustomOptionProps = {
  children: ReactNode;
  isSelected: boolean;
  isMulti: boolean;
} & Props;

const CustomOption = ({ children, ...props }: OptionProps<{}, boolean>) => (
  <components.Option {...props}>
    {props.isMulti ? props.isSelected ? <CheckboxChecked className="checked" /> : <CheckboxUnchecked /> : null}
    {children}
  </components.Option>
);

const CustomSelect = (props: CustomOptionProps) => (
  <Select
    components={{
      IndicatorSeparator: null,
      DropdownIndicator: Icon.Arrow,
      ClearIndicator: null,
      Option: CustomOption,
    }}
    classNamePrefix="select"
    hideSelectedOptions={false}
    closeMenuOnSelect={props.isMulti ? false : true}
    {...props}
  />
);

export default CustomSelect;
