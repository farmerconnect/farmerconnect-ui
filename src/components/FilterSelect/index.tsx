import React, { useState, useEffect, useRef, ReactNode } from 'react';
import * as S from './styles';
import { Chevron} from '../SingleSelect/styles';

interface FilterSelectProps<T> {
  itemList: T[];
  onSelectItem: (item:T) => void;
  resolveItemName: (item:T) => string;
  listItemRender: (item: T) => ReactNode;
  placeholder: string;
  noResultsMessage: string;
  disabled?: boolean;
}

const FilterSelect = <T extends unknown>({itemList, onSelectItem, listItemRender, resolveItemName, placeholder, noResultsMessage, disabled = false}: FilterSelectProps<T>) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hasResults, sethasResults] = useState<boolean>(true);
  const [outputList, setoutputList] = useState<T[]>(itemList);
  const [inputValue, setinputValue] = useState<string>('');  
  const contentRef = useRef<HTMLDivElement>(null);

  const handleToggleDropdown = () => {
    if (disabled) return;
    setIsOpen(!isOpen);
  };

  const handleSelectItem = (item: T) => {
    if(inputValue === '') {
      setoutputList(itemList);
    }
    onSelectItem(item);  
    setinputValue(resolveItemName(item));   
    setIsOpen(false);
  };

  const handleClickOutside = (e: { target: any }) => {
    if (!contentRef?.current?.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const onInputChange = (html: React.FormEvent<HTMLInputElement>) => {
    var searchedText:string = html.currentTarget.value;
    let filteredList:T[] = itemList;
    
    if(searchedText === '') {
      onSelectItem(null as T);
    } 
    if(searchedText !== undefined) {
      filteredList = itemList.filter((item) => resolveItemName(item).toLowerCase().includes(searchedText.toLowerCase()));
      sethasResults(filteredList.length !== 0);
      setIsOpen(true);
    }
    setinputValue(searchedText);
    setoutputList(filteredList);
  }

  return (
    <S.Wrapper ref={contentRef}>
      <S.Heading onClick={() => handleToggleDropdown()} isOpen={isOpen} disabled={disabled}>
        <input placeholder={placeholder} onChange={onInputChange} value={inputValue} alt="filter-select-input" disabled={disabled} />
        <Chevron />
      </S.Heading>
      <S.Content isOpen={isOpen}>
        {
          hasResults ?
            <S.ItemList>
            {outputList.map((item, index) => (
              <li onClick={() => handleSelectItem(item)} key={`left-content-${index}`}>
                {listItemRender(item)}
              </li>
            ))}
          </S.ItemList>
          :
          <S.EmptyResult>{noResultsMessage}</S.EmptyResult>
        }

      </S.Content>
    </S.Wrapper>
  );
};

export default FilterSelect;
