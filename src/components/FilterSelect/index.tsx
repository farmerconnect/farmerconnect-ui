import React, { useState, useEffect, useRef, ReactNode } from 'react';
import * as S from './styles';
import { Chevron} from '../SingleSelect/styles';

interface FilterSelectProps {
  itemList: any[];
  onSelectItem: (item:any) => void;
  resolveItemName: (item:any) => string;
  listItemRender: (item: any) => ReactNode;
  placeholder:string;
  noResultsMessage:string;
}

const FilterSelect:React.FC<FilterSelectProps> = ({itemList, onSelectItem, listItemRender, resolveItemName, placeholder, noResultsMessage}: FilterSelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [hasResults, sethasResults] = useState<boolean>(true);
  const [outputList, setoutputList] = useState<any[]>(itemList);
  const [inputValue, setinputValue] = useState<string>('');  
  const contentRef = useRef<HTMLDivElement>(null);

  const handleToggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectItem = (item: any) => {
    if(inputValue === '') {
      setoutputList(itemList);
    }
    onSelectItem(item);  
    setinputValue(resolveItemName(item));   
    setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener('mousedown', (e: { target: any }) => {
      if (!contentRef?.current?.contains(e.target)) {
        setIsOpen(false);
      }
    });
  }, []);

  const onInputChange = (html: any) => {
    var searchedText:string = html.target.value;
    let filteredList:any[] = itemList;
    
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
      <S.Heading onClick={() => handleToggleDropdown()} isOpen={isOpen}>
        <input placeholder={placeholder} onChange={onInputChange} value={inputValue} alt="filter-select-input"></input>
        <Chevron />
      </S.Heading>
      <S.Content isOpen={isOpen}>
        {
          hasResults ?
            <S.ItemList>
            {outputList.map((product, i) => (
              <li onClick={() => handleSelectItem(product)} key={`left-content-${product.id}-${i}`}>
                {listItemRender(product)}
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
