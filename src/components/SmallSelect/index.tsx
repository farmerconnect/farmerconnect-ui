import * as S from './styles';
import { components, Props, OptionProps, MenuProps, GroupTypeBase } from 'react-select';
import { CheckboxUnchecked, CheckboxChecked } from '../Icons/Checkbox';
import { HelperText } from '../Input/styles';
import { ReactNode, useCallback } from 'react';
import { farmerConnectTheme } from '../Theme';

export type SmallSelectProps<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupTypeBase<Option> = GroupTypeBase<Option>
> = {
  error?: string | boolean;
  helperText?: ReactNode;
  footer?: ReactNode;
} & Props<Option, IsMulti, Group>;

const CustomOption = ({ children, ...props }: OptionProps<{}, boolean>) => (
  <components.Option {...props}>
    {props.isMulti ? props.isSelected ? <CheckboxChecked className="checked" /> : <CheckboxUnchecked /> : null}
    {children}
  </components.Option>
);

export type CustomMenuProps = {
  footer: ReactNode;
} & MenuProps<{}, boolean>;

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

function SmallSelect<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupTypeBase<Option> = GroupTypeBase<Option>
>({ footer = null, components = {}, ...props }: SmallSelectProps<Option, IsMulti, Group>) {
  const Menu = useCallback((props: MenuProps<{}, boolean>) => <CustomMenu {...props} footer={footer} />, [footer]);

  return (
    <S.SelectWrapper>
      <S.Select
        components={{
          IndicatorSeparator: null,
          DropdownIndicator: DropdownIcon,
          ClearIndicator: null,
          Option: CustomOption,
          Menu: Menu,
          ...components,
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
}

const DropdownIcon = () => (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9.73692 0.266515C9.38765 -0.0888383 8.82345 -0.0888383 8.47419 0.266515L4.99943 3.80182L1.52468 0.266515C1.17542 -0.0888383 0.611217 -0.0888383 0.26195 0.266515C-0.0873156 0.621868 -0.0873156 1.1959 0.26195 1.55125L4.37255 5.73349C4.72181 6.08884 5.28601 6.08884 5.63528 5.73349L9.74588 1.55125C10.0862 1.20501 10.0862 0.621868 9.73692 0.266515Z"
      fill={farmerConnectTheme.colors.fc_black_70}
    />
  </svg>
);

export default Object.assign(SmallSelect, components);
