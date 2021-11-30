import { components, GroupTypeBase, MenuProps, OptionProps } from 'react-select';
import { CheckboxUnchecked, CheckboxChecked } from '../Icons/Checkbox';
import { CustomMenuProps, SmallSelectProps } from '../SmallSelect';
import { farmerConnectTheme } from '../Theme';
import * as S from './styles';

const CustomOption = ({ children, ...props }: OptionProps<{}, boolean>) => (
  <components.Option {...props}>
    {props.isMulti ? props.isSelected ? <CheckboxChecked className="checked" /> : <CheckboxUnchecked /> : null}
    {children}
  </components.Option>
);

const CustomMenu = (props: CustomMenuProps) => {
  return (
    <components.Menu {...props}>
      <>
        {props.children}
        {props.footer && <S.FooterContainer>{props.footer}</S.FooterContainer>}
      </>
    </components.Menu>
  );
};

function CustomSelect<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupTypeBase<Option> = GroupTypeBase<Option>
>({ footer = null, ...props }: SmallSelectProps<Option, IsMulti, Group>) {
  return (
    <S.SelectWrapper>
      <S.Select
        components={{
          IndicatorSeparator: null,
          DropdownIndicator: DropdownIcon,
          ClearIndicator: null,
          Option: CustomOption,
          Menu: (props: MenuProps<{}, boolean>) => <CustomMenu {...props} footer={footer} />,
        }}
        classNamePrefix="select"
        hideSelectedOptions={false}
        closeMenuOnSelect={props.isMulti ? false : true}
        {...props}
      />
      {props.error && typeof props.error === 'string' && <S.HelperText error={true}>{props.error}</S.HelperText>}
      {props.helperText && !props.error && <S.HelperText>{props.helperText}</S.HelperText>}
    </S.SelectWrapper>
  );
}

const DropdownIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="8" viewBox="0 0 12 8" fill="none">
    <path
      d="M11.2892 0.999531C10.8992 0.609531 10.2692 0.609531 9.87925 0.999531L5.99925 4.87953L2.11925 0.999531C1.72925 0.609531 1.09925 0.609531 0.709246 0.999531C0.319245 1.38953 0.319245 2.01953 0.709246 2.40953L5.29925 6.99953C5.68925 7.38953 6.31925 7.38953 6.70925 6.99953L11.2992 2.40953C11.6792 2.02953 11.6792 1.38953 11.2892 0.999531Z"
      fill={farmerConnectTheme.colors.fc_black_70}
    />
  </svg>
);

export default CustomSelect;
