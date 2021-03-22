import React, { Fragment, useEffect, useState } from 'react';
import { Container, ContainerSearch, Search, ButtonSearch, ButtonCancelSearch, ContainerContent, ContainerButtons, ButtonClear, ButtonConfirm, ErrorMessage } from './styles';
import ItemMultiple from './ItemMultiple';
import ItemSingle from './ItemSingle';
import {IContentProps} from '../interfaces';

const renderSingle = (content: any, itemSelect: any, firstContentItemRender: any) => {
  return (
    <Container>
      <ContainerContent>
      {
        content.map((item: any, index: number) => (
          <ItemSingle 
            key={index}
            content={item}
            handleSelected={(e:any, item: any) => itemSelect(e, item)}
            contentRender={firstContentItemRender(item)}
          />
        ))
      }
      </ContainerContent>
    </Container>
  )
}

function renderMultiple (
  content: any,
  itemSelect: any,
  disabled: boolean,
  handleClear: any,
  handleConfirm: any,
  search: string,
  handleSearchInput: any,
  handleClearSearch: any,
  searchStatus: boolean,
  handleSearch: any,
  textSearch: string,
  textButtonClear: string,
  textButtonConfirm: string,
  limitReached: boolean,
  secondContentItemRender: any
) {
  return (
    <Fragment>
      <Container>
        <ContainerSearch>
          <Search 
            placeholder={textSearch}
            value={search}
            onChange={(e) => handleSearchInput(e.target.value)}
            onKeyPress={event => {
              if (event.key === 'Enter') {
                handleSearch()
              }
            }}
          />
          <ButtonSearch
            onClick={() => handleSearch()}
            searchStatus={searchStatus}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M12.6553 12.0596H13.3137L16.847 15.6096C17.1887 15.9513 17.1887 16.5096 16.847 16.8513C16.5053 17.193 15.947 17.193 15.6053 16.8513L12.0637 13.3096V12.6513L11.8387 12.418C10.672 13.418 9.08034 13.9346 7.38867 13.6513C5.07201 13.2596 3.22201 11.3263 2.93867 8.99298C2.50534 5.46798 5.47201 2.50131 8.99701 2.93464C11.3303 3.21798 13.2637 5.06798 13.6553 7.38464C13.9387 9.07631 13.422 10.668 12.422 11.8346L12.6553 12.0596ZM4.56366 8.30965C4.56366 10.3846 6.23866 12.0596 8.31365 12.0596C10.3887 12.0596 12.0637 10.3846 12.0637 8.30965C12.0637 6.23465 10.3887 4.55965 8.31365 4.55965C6.23866 4.55965 4.56366 6.23465 4.56366 8.30965Z" fill="#141414"/>
            </svg>
          </ButtonSearch>
          <ButtonCancelSearch
            onClick={() => handleClearSearch()}
            searchStatus={searchStatus}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.2496 0.758297C11.0939 0.602253 10.8825 0.514559 10.6621 0.514559C10.4417 0.514559 10.2303 0.602253 10.0746 0.758297L5.99961 4.82496L1.92461 0.749964C1.76892 0.59392 1.55754 0.506226 1.33711 0.506226C1.11668 0.506226 0.905302 0.59392 0.749609 0.749964C0.424609 1.07496 0.424609 1.59996 0.749609 1.92496L4.82461 5.99996L0.749609 10.075C0.424609 10.4 0.424609 10.925 0.749609 11.25C1.07461 11.575 1.59961 11.575 1.92461 11.25L5.99961 7.17496L10.0746 11.25C10.3996 11.575 10.9246 11.575 11.2496 11.25C11.5746 10.925 11.5746 10.4 11.2496 10.075L7.17461 5.99996L11.2496 1.92496C11.5663 1.6083 11.5663 1.07496 11.2496 0.758297Z" fill="black"/>
            </svg>
          </ButtonCancelSearch>
        </ContainerSearch>
        <ContainerContent>
          {
            !!content.length ? (
              content.map((item:any, index:number) => (
                <ItemMultiple
                  key={index}
                  content={item}
                  contentRender={secondContentItemRender(item)}
                  limitReached={limitReached}
                  handleSelected={
                    (e:any, item:any) => {
                      itemSelect(e, item);
                    }
                  }
                />
              ))
            ) : (
              <ErrorMessage>There are no results matching your search.</ErrorMessage>
            )
          }
        </ContainerContent>
        <ContainerButtons>
          <ButtonClear
            disabled={disabled}
            onClick={() => handleClear()}
          >
            {textButtonClear}
          </ButtonClear>
          <ButtonConfirm
            disabled={disabled}
            onClick={() => handleConfirm()}
          >
            {textButtonConfirm}
          </ButtonConfirm>
        </ContainerButtons>
      </Container>
    </Fragment>
  )
};

const Content: React.FC<IContentProps> = ({
  open,
  content,
  itemSelect,
  multiple,
  handleClear,
  handleConfirm,
  disableButtons,
  onSearch,
  textSearch,
  textButtonClear,
  textButtonConfirm,
  limitReached,
  firstContentItemRender,
  secondContentItemRender,
  ...props
}) => {

  const [disabled, setDisabled] = useState(disableButtons)
  const [searchValue, setSearchValue] = useState('')
  const [searchStatus, setSearchStatus] = useState(false)

  useEffect(() => {
    setDisabled(disableButtons)
  }, [disableButtons])

  useEffect(() => {
    if(searchValue.length > 0) {
      setSearchStatus(true)
    } else {
      setSearchStatus(false)
    }
  }, [searchValue])

  const handleSearchType = (value: string) => {
    setSearchValue(value)
    onSearch(value) 
  }

  const handleClearSearch = () => {
    setSearchValue('')
    onSearch('') 
  }

  const handleSearch = () => {
    onSearch(searchValue)
  }

  if (open && multiple) return renderMultiple(content, itemSelect, disabled, handleClear, handleConfirm, searchValue, handleSearchType, handleClearSearch, searchStatus, handleSearch, textSearch, textButtonClear, textButtonConfirm, limitReached, secondContentItemRender)
  if (open && !multiple) return renderSingle(content, itemSelect, firstContentItemRender)

  return <div></div>
}

export default Content;
