import React, { useState, useEffect, useRef, ReactNode } from "react";
import { Icon } from "../..";
import CustomButton from "../CustomButton";
import * as S from "./styles";
import {
  ButtonContainer,
  Chevron,
  CustomCheckbox,
  EmptyMessage,
  FilterInputWrapper,
  MagnifyingGlassIcon,
  ListWrapper,
} from "../OrderSelect/styles";

export type itemType = {
  id: string;
  checked: boolean;
};

export type productType = {
  id: string;
};

export type isOpenType = "products" | "items" | false;

export type SelectProps = {
  items: itemType[];
  products: productType[];
  onChange: (c: itemType[]) => void;
  onConfirmSelection: (c: itemType[]) => void;
  onSelectProduct: (p: productType) => void;
  itemRenderer: (item: itemType) => ReactNode;
  productRenderer: (product: productType) => ReactNode;
  limit?: number;
  disableProducts: boolean;
  disableItems: boolean;
};

const DoubleSelect = ({
  items = [],
  products = [],
  limit = 2,
  disableProducts = false,
  disableItems = true,
  onConfirmSelection,
  itemRenderer,
  onChange,
  onSelectProduct,
  productRenderer,
}: SelectProps) => {
  const [isOpen, setIsOpen] = useState<isOpenType>(false);
  const [filterText, setFilterText] = useState("");
  const contentRef = useRef<HTMLDivElement>(null);

  const handleToggleDropdown = (dropdown: isOpenType) => {
    if (dropdown === "products") {
      if (disableProducts) return;
      isOpen === false ? setIsOpen("products") : setIsOpen(false);
    } else {
      if (disableItems) return;
      isOpen === false ? setIsOpen("items") : setIsOpen(false);
    }
  };

  const handleClickOutside = (e: { target: any }) => {
    if (!contentRef?.current?.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const handleClearSelection = () => {
    onChange(items.map((item: itemType) => ({ ...item, checked: false })));
    setFilterText("");
  };

  const handleToggleSelectItem = (item: itemType) => {
    onChange(
      items.map((i) => ({
        ...i,
        checked: i.id === item.id ? !item.checked : i.checked,
      }))
    );
  };

  const handleConfirm = () => {
    onConfirmSelection(items.filter((item) => item.checked));
    setIsOpen(false);
  };

  const handleSelectProduct = (product: productType) => {
    onSelectProduct(product);
    setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectedItems = items.filter((item: itemType) => item.checked);

  const filteredItems = items.filter((item: itemType) =>
    item.id.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <S.Wrapper ref={contentRef}>
      <S.Heading
        onClick={() => handleToggleDropdown("products")}
        isOpen={isOpen}
        disabled={disableProducts}
      >
        Select one product
        <Chevron />
      </S.Heading>
      <S.Heading
        onClick={() => handleToggleDropdown("items")}
        isOpen={isOpen}
        disabled={disableItems}
      >
        Select up to 2 items
        <Chevron />
      </S.Heading>
      <S.Content isOpen={isOpen}>
        {isOpen === "items" && (
          <>
            <FilterInputWrapper>
              <div>
                <input
                  placeholder="Search product"
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
            <ListWrapper>
              {filteredItems.map((item) => (
                <CustomCheckbox
                  checked={
                    items.find((i: itemType) => i.id === item.id)!.checked
                  }
                  onChange={() => handleToggleSelectItem(item)}
                  disabled={!item.checked && selectedItems.length === limit}
                >
                  {itemRenderer(item)}
                </CustomCheckbox>
              ))}
              {filteredItems.length === 0 && filterText && (
                <EmptyMessage>There are no matches</EmptyMessage>
              )}
            </ListWrapper>
            <ButtonContainer>
              <CustomButton
                variant="outline"
                disabled={selectedItems.length === 0}
                onClick={handleClearSelection}
              >
                Clear selection
              </CustomButton>
              <CustomButton
                disabled={selectedItems.length === 0}
                onClick={handleConfirm}
              >
                Confirm selection
              </CustomButton>
            </ButtonContainer>
          </>
        )}
        {isOpen === "products" && (
          <S.ProductList>
            {products.map((product) => (
              <li onClick={() => handleSelectProduct(product)}>
                {productRenderer(product)}
              </li>
            ))}
          </S.ProductList>
        )}
      </S.Content>
    </S.Wrapper>
  );
};

export default DoubleSelect;
