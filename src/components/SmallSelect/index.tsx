import * as S from './styles';
import { components, Props, OptionProps } from 'react-select';
import { CheckboxUnchecked, CheckboxChecked } from '../Icons/Checkbox';
import { HelperText } from '../Input/styles';
import { Arrow } from '../Icons';

export type SmallSelectProps = {
  error?: string | boolean;
  helperText?: string;
} & Props;

const CustomOption = ({ children, ...props }: OptionProps<{}, boolean>) => (
  <components.Option {...props}>
    {props.isMulti ? props.isSelected ? <CheckboxChecked className="checked" /> : <CheckboxUnchecked /> : null}
    {children}
  </components.Option>
);

const DropdownIcon = () => <Arrow size="small" />;

const SmallSelect = (props: SmallSelectProps) => (
  <S.SelectWrapper>
    <S.Select
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
    {props.error && typeof props.error === 'string' && <HelperText error={true}>{props.error}</HelperText>}
    {props.helperText && !props.error && <HelperText>{props.helperText}</HelperText>}
  </S.SelectWrapper>
);

export default SmallSelect;
