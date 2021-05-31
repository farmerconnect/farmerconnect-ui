import React, { useState, useEffect, useRef, ReactNode } from 'react';
import * as Icon from '../Icons';
import CustomButton from '../CustomButton';
import * as S from './styles';

export type SelectProps = {
  content: any[];
  onChange: (c: any[]) => void;
  onConfirmSelection: (c: any[]) => void;
  onCancel: () => void;
  itemRenderer: (item: any) => ReactNode;
  limit?: number;
  headingText: string;
  filterPlaceholderText: string;
  filterSearch: string;
  clearButtonText: string;
  confirmButtonText: string;
  emptyText: string;
  disabled: boolean;
  contentText: string;
};

const DropdownSelect = ({
  content = [] as any[],
  onChange = (c: any[]) => {},
  onConfirmSelection = (c: any[]) => {},
  onCancel,
  itemRenderer = (item: any) => item.id,
  limit = 2,
  headingText,
  clearButtonText,
  confirmButtonText,
  emptyText,
  filterPlaceholderText,
  filterSearch,
  contentText,
}: SelectProps) => {
  const [filterText, setFilterText] = useState('');
  const contentRef = useRef<HTMLDivElement>(null);

  const handleToggleSelectItem = (item: any) => {
    onChange(
      content.map((i) => ({
        ...i,
        checked: i.id === item.id ? !item.checked : i.checked,
      }))
    );
  };

  const handleCancel = () => {
    setFilterText('')
    onCancel();
  }

  const handleConfirm = () => {
    onConfirmSelection(content.filter((item) => item.checked));
  };

  const selectedItems = content.filter((item: any) => item.checked);

  const filteredItems = content.filter((item: any) => item?.[filterSearch].toLowerCase().includes(filterText.toLowerCase()));

  return (
    <S.Wrapper ref={contentRef}>
      <S.Heading>
        {headingText}
        <S.Close onClick={() => handleCancel()}>
          <Icon.Close />
        </S.Close>
      </S.Heading>
      <S.Content>
        <S.ContentText>{contentText}</S.ContentText>
        <S.FilterInputWrapper>
          <div>
            <input
              placeholder={filterPlaceholderText}
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
            />
            {filterText ? (
              <button onClick={() => handleCancel()}>
                <Icon.Close />
              </button>
            ) : (
              <S.MagnifyingGlassIcon />
            )}
          </div>
        </S.FilterInputWrapper>
        <S.ListWrapper>
          {filteredItems.map((item, index) => (
            <S.CustomCheckbox
              checked={content.find((i: any) => i.id === item.id)!.checked}
              onChange={() => handleToggleSelectItem(item)}
              disabled={(!item.checked && selectedItems.length === limit) || item.default}
              key={index}
            >
              {itemRenderer(item)}
            </S.CustomCheckbox>
          ))}
          {filteredItems.length === 0 && filterText && <S.EmptyMessage>{emptyText}</S.EmptyMessage>}
        </S.ListWrapper>
        <S.ButtonContainer>
          <S.CustomizedButton variant="link" onClick={() => handleCancel()}>
            {clearButtonText}
          </S.CustomizedButton>
          <CustomButton onClick={handleConfirm}>{confirmButtonText}</CustomButton>
        </S.ButtonContainer>
      </S.Content>
    </S.Wrapper>
  );
};

export default DropdownSelect;
