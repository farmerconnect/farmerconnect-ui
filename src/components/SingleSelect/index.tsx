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

export type filterProps =
  | {
      enable: true;
      placeholder: string;
      content: (c: contentType) => string;
      filter: (c: contentType, s: string[]) => boolean;
    }
  | false;

export type SelectProps = {
  content: contentType[];
  onChange: (c: contentType[]) => void;
  onConfirmSelection: (c: contentType[]) => void;
  itemRenderer: (item: contentType) => ReactNode;
  limit?: number;
  headingText: string;
  filterPlaceholderText: string;
  clearButtonText: string;
  confirmButtonText: string;
  emptyText: string;
  disabled: boolean;
  selectFilter1: filterProps;
  selectFilter2: filterProps;
};

const SingleSelect = ({
  content = [] as contentType[],
  onChange = (c: contentType[]) => {},
  onConfirmSelection = (c: contentType[]) => {},
  itemRenderer = (item: contentType) => item.id,
  limit = 2,
  disabled = false,
  headingText,
  clearButtonText,
  confirmButtonText,
  emptyText,
  filterPlaceholderText,
  selectFilter1 = false,
  selectFilter2 = false,
}: SelectProps) => {
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
    onChange(content.map((item: contentType) => ({ ...item, checked: false })));
    setFilterText('');
  };

  const handleToggleSelectItem = (item: contentType) => {
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

  const filteredItems = content.filter((item: contentType) => item.id.toLowerCase().includes(filterText.toLowerCase()));

  const filteredSelect1 = filterContentSelect1.length
    ? filteredItems.filter((item) => selectFilter1.filter(item, filterContentSelect1))
    : filteredItems;

  const filteredSelect2 = filterContentSelect2.length
    ? filteredSelect1.filter((item) => selectFilter2.filter(item, filterContentSelect2))
    : filteredSelect1;

  return (
    <S.Wrapper ref={contentRef}>
      <S.Heading onClick={handleToggleDropdown} isOpen={isOpen} disabled={disabled}>
        {headingText}
        <S.Chevron />
      </S.Heading>
      <S.Content isOpen={isOpen}>
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
              options={[...new Set(filteredItems.map(selectFilter1.content))].map((item) => ({
                label: item,
                value: item,
              }))}
              placeholder={selectFilter1.placeholder}
              isMulti
              onChange={(value: optionType[] | null) =>
                value ? setFilterContentSelect1(value.map((option) => option.value)) : setFilterContentSelect1([])
              }
              value={filterContentSelect1.map((item) => ({ label: item, value: item }))}
            />
          )}
          {!!selectFilter2 && (
            <S.FilterSelect
              options={[...new Set(filteredSelect1.map(selectFilter2.content))].map((item) => ({
                label: item,
                value: item,
              }))}
              placeholder={selectFilter2.placeholder}
              isMulti
              onChange={(value: optionType[] | null) =>
                value ? setFilterContentSelect2(value.map((option) => option.value)) : setFilterContentSelect2([])
              }
              value={filterContentSelect2.map((item) => ({ label: item, value: item }))}
            />
          )}
        </S.FilterInputWrapper>
        <S.ListWrapper>
          {filteredSelect2.map((item) => (
            <S.CustomCheckbox
              checked={content.find((i: contentType) => i.id === item.id)!.checked}
              onChange={() => handleToggleSelectItem(item)}
              disabled={!item.checked && selectedItems.length === limit}
            >
              {itemRenderer(item)}
            </S.CustomCheckbox>
          ))}
          {filteredSelect2.length === 0 && <S.EmptyMessage>{emptyText}</S.EmptyMessage>}
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
};

export default SingleSelect;
