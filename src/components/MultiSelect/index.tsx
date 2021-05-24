import React, { useState, useEffect, useRef, ReactNode } from "react";
import * as Icon from "../Icons";
import CustomButton from "../CustomButton";
import * as S from "./styles";
import {
  ButtonContainer,
  Chevron,
  CustomCheckbox,
  EmptyMessage,
  FilterInputWrapper,
  MagnifyingGlassIcon,
} from "../SingleSelect/styles";

export type itemType = {
  id: string;
  checked: boolean;
};

export type productType = {
  id: string;
};

export type textType = {
  leftComboHeading: string;
  rightComboHeading: string;
  filterPlaceholder: string;
  clearButton: string;
  confirmButton: string;
  emptyList: string;
};

export type isOpenType = "left" | "right" | false;

export type SelectProps = {
  leftContent: productType[];
  rightContent: itemType[];
  onChange: (c: itemType[]) => void;
  onConfirmSelection: (c: itemType[]) => void;
  onSelectLeft: (p: productType) => void;
  rightListRenderer: (item: itemType) => ReactNode;
  leftListRenderer: (product: productType) => ReactNode;
  limit?: number;
  disableLeftCombo: boolean;
  disableRightCombo: boolean;
  text: textType;
};

const DoubleSelect = ({
  leftContent = [],
  rightContent = [],
  limit = 2,
  disableLeftCombo = false,
  disableRightCombo = true,
  onConfirmSelection,
  rightListRenderer,
  onChange,
  onSelectLeft,
  leftListRenderer,
  text,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState<isOpenType>(false);
  const [filterText, setFilterText] = useState("");
  const contentRef = useRef<HTMLDivElement>(null);

  const handleToggleDropdown = (dropdown: isOpenType) => {
    if (dropdown === "left") {
      if (disableLeftCombo) return;
      isOpen === false ? setIsOpen("left") : setIsOpen(false);
    } else {
      if (disableRightCombo) return;
      isOpen === false ? setIsOpen("right") : setIsOpen(false);
    }
  };

  const handleClickOutside = (e: { target: any }) => {
    if (!contentRef?.current?.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const handleClearSelection = () => {
    onChange(
      rightContent.map((item: itemType) => ({ ...item, checked: false }))
    );
    setFilterText("");
  };

  const handleToggleSelectItem = (item: itemType) => {
    onChange(
      rightContent.map((i) => ({
        ...i,
        checked: i.id === item.id ? !item.checked : i.checked,
      }))
    );
  };

  const handleConfirm = () => {
    onConfirmSelection(rightContent.filter((item) => item.checked));
    setIsOpen(false);
  };

  const handleSelectProduct = (product: productType) => {
    onSelectLeft(product);
    setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectedItems = rightContent.filter((item: itemType) => item.checked);

  const filteredItems = rightContent.filter((item: itemType) =>
    item.id.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <S.Wrapper ref={contentRef}>
      <S.Heading
        onClick={() => handleToggleDropdown("left")}
        isOpen={isOpen}
        disabled={disableLeftCombo}
      >
        {text.leftComboHeading}
        <Chevron />
      </S.Heading>
      <S.Heading
        onClick={() => handleToggleDropdown("right")}
        isOpen={isOpen}
        disabled={disableRightCombo}
      >
        {text.rightComboHeading}
        <Chevron />
      </S.Heading>
      <S.Content isOpen={isOpen}>
        {isOpen === "right" && (
          <>
            <FilterInputWrapper>
              <div>
                <input
                  placeholder={text.filterPlaceholder}
                  value={filterText}
                  onChange={(e) => setFilterText(e.target.value)}
                />
                {filterText ? (
                  <button onClick={() => setFilterText("")}>
                    <Icon.Close />
                  </button>
                ) : (
                  <MagnifyingGlassIcon />
                )}
              </div>
            </FilterInputWrapper>
            <S.ListWrapper>
              {filteredItems.map((item) => (
                <CustomCheckbox
                  checked={
                    rightContent.find((i: itemType) => i.id === item.id)!
                      .checked
                  }
                  onChange={() => handleToggleSelectItem(item)}
                  disabled={!item.checked && selectedItems.length === limit}
                >
                  {rightListRenderer(item)}
                </CustomCheckbox>
              ))}
              {filteredItems.length === 0 && filterText && (
                <EmptyMessage>{text.emptyList}</EmptyMessage>
              )}
            </S.ListWrapper>
            <ButtonContainer>
              <CustomButton
                variant="outline"
                disabled={selectedItems.length === 0}
                onClick={handleClearSelection}
              >
                {text.clearButton}
              </CustomButton>
              <CustomButton
                disabled={selectedItems.length === 0}
                onClick={handleConfirm}
              >
                {text.confirmButton}
              </CustomButton>
            </ButtonContainer>
          </>
        )}
        {isOpen === "left" && (
          <S.ProductList>
            {leftContent.map((product) => (
              <li onClick={() => handleSelectProduct(product)}>
                {leftListRenderer(product)}
              </li>
            ))}
          </S.ProductList>
        )}
      </S.Content>
    </S.Wrapper>
  );
};

export default DoubleSelect;
