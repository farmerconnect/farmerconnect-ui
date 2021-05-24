import React, { useState, useEffect, useRef, ReactNode } from "react";
import { Icon } from "../../";
import CustomButton from "../CustomButton";
import * as S from "./styles";

export type contentType = {
  id: string;
  checked: boolean;
};

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
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filterText, setFilterText] = useState("");
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
    setFilterText("");
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
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectedItems = content.filter((item: contentType) => item.checked);

  const filteredItems = content.filter((item: contentType) =>
    item.id.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <S.Wrapper ref={contentRef}>
      <S.Heading
        onClick={handleToggleDropdown}
        isOpen={isOpen}
        disabled={disabled}
      >
        {headingText}
        <S.Chevron />
      </S.Heading>
      <S.Content isOpen={isOpen}>
        <S.FilterInputWrapper>
          <div>
            <input
              placeholder={filterPlaceholderText}
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
            />
            {filterText ? (
              <button onClick={() => setFilterText("")}>
                <Icon.Close />
              </button>
            ) : (
              <S.MagnifyingGlassIcon />
            )}
          </div>
        </S.FilterInputWrapper>
        <S.ListWrapper>
          {filteredItems.map((item) => (
            <S.CustomCheckbox
              checked={
                content.find((i: contentType) => i.id === item.id)!.checked
              }
              onChange={() => handleToggleSelectItem(item)}
              disabled={!item.checked && selectedItems.length === limit}
            >
              {itemRenderer(item)}
            </S.CustomCheckbox>
          ))}
          {filteredItems.length === 0 && filterText && (
            <S.EmptyMessage>{emptyText}</S.EmptyMessage>
          )}
        </S.ListWrapper>
        <S.ButtonContainer>
          <CustomButton
            variant="outline"
            disabled={selectedItems.length === 0}
            onClick={handleClearSelection}
          >
            {clearButtonText}
          </CustomButton>
          <CustomButton
            disabled={selectedItems.length === 0}
            onClick={handleConfirm}
          >
            {confirmButtonText}
          </CustomButton>
        </S.ButtonContainer>
      </S.Content>
    </S.Wrapper>
  );
};

export default SingleSelect;
