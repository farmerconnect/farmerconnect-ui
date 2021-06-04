import React, { useState, useEffect, useRef, ReactNode } from 'react';
import * as Icon from '../Icons';
import CustomButton from '../CustomButton';
import * as S from './styles';

export type contentType = {
  id: string;
  checked: boolean;
};

export type optionType = {
  value: string;
  label: string;
};

export type filterProps<T extends contentType> =
  | {
      placeholder: string;
      content: (c: T) => string;
      filter: (c: T, s: string[]) => boolean;
    }
  | false;

export type SelectProps<T extends contentType> = {
  content?: T[];
  onChange?: (c: T[]) => void;
  onConfirmSelection?: (c: T[]) => void;
  itemRenderer?: (item: T) => ReactNode;
  limit?: number;
  headingText?: string;
  filterPlaceholderText?: string;
  clearButtonText?: string;
  confirmButtonText?: string;
  emptyText?: string;
  disabled?: boolean;
  selectFilter1?: filterProps<T>;
  selectFilter2?: filterProps<T>;
};

function SingleSelect<T extends contentType>({
  content = [],
  onChange = (_) => {},
  onConfirmSelection = (_) => {},
  itemRenderer = (item) => item.id,
  limit = 2,
  disabled = false,
  headingText,
  clearButtonText,
  confirmButtonText,
  emptyText,
  filterPlaceholderText,
  selectFilter1 = false,
  selectFilter2 = false,
}: SelectProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const [filterText, setFilterText] = useState('');
  const [filterContentSelect1, setFilterContentSelect1] = useState<string[]>([]);
  const [filterContentSelect2, setFilterContentSelect2] = useState<string[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleToggleDropdown = () => {
    if (disabled) return;
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (e: { target: any }) => {
    if (!contentRef?.current?.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const handleClearSelection = () => {
    onChange(content.map((item: T) => ({ ...item, checked: false })));
    setFilterText('');
  };

  const handleToggleSelectItem = (item: T) => {
    onChange(
      content.map((i) => ({
        ...i,
        checked: i.id === item.id ? !item.checked : i.checked,
      }))
    );
  };

  const handleConfirm = () => {
    onConfirmSelection(content.filter((item) => item.checked));
    setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const selectedItems = content.filter((item: contentType) => item.checked);

  const filteredText = content.filter((item: contentType) => item.id.toLowerCase().includes(filterText.toLowerCase()));

  const filteredTextSelect1 =
    selectFilter1 === false
      ? filteredText
      : filterContentSelect1.length
      ? filteredText.filter((item) => selectFilter1.filter(item, filterContentSelect1))
      : filteredText;

  const filteredTextSelect2 =
    selectFilter2 === false
      ? filteredTextSelect1
      : filterContentSelect2.length
      ? filteredText.filter((item) => selectFilter2.filter(item, filterContentSelect2))
      : filteredText;

  const filteredTextSelect1Select2 =
    filterContentSelect2.length && selectFilter2 !== false
      ? filteredTextSelect1.filter((item) => selectFilter2.filter(item, filterContentSelect2))
      : filteredTextSelect1;

  return (
    <S.Wrapper ref={contentRef}>
      <S.Heading onClick={handleToggleDropdown} isOpen={isOpen} disabled={disabled}>
        {headingText}
        <S.Chevron />
      </S.Heading>
      <S.Content isOpen={isOpen} aria-hidden={!isOpen}>
        <S.FilterInputWrapper>
          <div className="input-wrapper">
            <input
              placeholder={filterPlaceholderText}
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
            />
            {filterText ? (
              <button onClick={() => setFilterText('')}>
                <Icon.Close />
              </button>
            ) : (
              <S.MagnifyingGlassIcon />
            )}
          </div>
          {!!selectFilter1 && (
            <S.FilterSelect
              options={
                filterContentSelect2.length
                  ? [...new Set(filteredTextSelect2.map(selectFilter1.content))].map((item) => ({
                      label: item,
                      value: item,
                    }))
                  : [...new Set(filteredText.map(selectFilter1.content))].map((item) => ({
                      label: item,
                      value: item,
                    }))
              }
              placeholder={selectFilter1.placeholder}
              isMulti
              onChange={(value: optionType[] | null) =>
                value ? setFilterContentSelect1(value.map((option) => option.value)) : setFilterContentSelect1([])
              }
              value={filterContentSelect1.map((item) => ({ label: item, value: item }))}
              inputId="single-select-dropdown-filter-1"
            />
          )}
          {!!selectFilter2 && (
            <S.FilterSelect
              options={[...new Set(filteredTextSelect1.map(selectFilter2.content))].map((item) => ({
                label: item,
                value: item,
              }))}
              placeholder={selectFilter2.placeholder}
              isMulti
              onChange={(value: optionType[] | null) =>
                value ? setFilterContentSelect2(value.map((option) => option.value)) : setFilterContentSelect2([])
              }
              value={filterContentSelect2.map((item) => ({ label: item, value: item }))}
              inputId="single-select-dropdown-filter-2"
            />
          )}
        </S.FilterInputWrapper>
        <S.ListWrapper>
          {filteredTextSelect1Select2.map((item) => (
            <S.CustomCheckbox
              checked={content.find((i: contentType) => i.id === item.id)!.checked}
              onChange={() => handleToggleSelectItem(item)}
              disabled={!item.checked && selectedItems.length === limit}
              value={item.id}
              key={item.id}
            >
              {itemRenderer(item)}
            </S.CustomCheckbox>
          ))}
          {filteredTextSelect1Select2.length === 0 && <S.EmptyMessage>{emptyText}</S.EmptyMessage>}
        </S.ListWrapper>
        <S.ButtonContainer>
          <CustomButton variant="outline" disabled={selectedItems.length === 0} onClick={handleClearSelection}>
            {clearButtonText}
          </CustomButton>
          <CustomButton disabled={selectedItems.length === 0} onClick={handleConfirm}>
            {confirmButtonText}
          </CustomButton>
        </S.ButtonContainer>
      </S.Content>
    </S.Wrapper>
  );
}

export default SingleSelect;
