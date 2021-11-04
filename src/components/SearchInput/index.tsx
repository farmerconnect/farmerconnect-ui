import { useEffect, useMemo } from 'react';
import { ISearchInputProps, isISearchInputProps } from './interfaces';
import * as Icon from '../Icons';
import * as S from './styles';
import { debounce } from './utils';
import { farmerConnectTheme } from '../Theme';

const SearchInput = (props: ISearchInputProps) => {
  const {
    className,
    value,
    onChange,
    onClear,
    onSearch,
    debounceTime = 0,
    placeholder = 'Search here...',
    ...incomingProps
  } = props;

  if (!isISearchInputProps(props)) {
    console.error('SearchInput props are not valid.');
  }

  const [debouncedFn, teardown] = useMemo(() => debounce<string>(onSearch, debounceTime), [debounceTime, onSearch]);

  useEffect(() => {
    debouncedFn(value as string);

    return () => {
      teardown();
    };
  }, [debouncedFn, teardown, value]);

  return (
    <S.SearchInputWrapper className={className}>
      <input aria-label={placeholder} placeholder={placeholder} value={value} onChange={onChange} {...incomingProps} />
      {value && onClear ? (
        <button type="button" onClick={onClear}>
          <Icon.Close data-testid="clear-icon" />
        </button>
      ) : (
        <Icon.MagnifyingGlass height="16" width="16" fill={farmerConnectTheme.colors.fc_black_70} />
      )}
    </S.SearchInputWrapper>
  );
};

export default SearchInput;
