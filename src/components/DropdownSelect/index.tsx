import React, { useState, useRef, ReactNode, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import * as Icon from '../Icons';
import CustomButton from '../CustomButton';
import * as S from './styles';

export type DropdownSelectContentItem = {
  id: string;
  checked: boolean;
  default: boolean;
};
export interface ISelectProps<T extends DropdownSelectContentItem> {
  content?: T[];
  onChange?: (c: T[]) => void;
  onConfirmSelection?: (c: T[]) => void;
  onCancel?: () => void;
  itemRenderer?: (c: T) => ReactNode;
  limit?: number;
  headingText?: string;
  filterPlaceholderText?: string;
  filterSearch?: (filterValue: string, row: T) => boolean;
  clearButtonText?: string;
  confirmButtonText?: string;
  emptyText?: string;
  disabled?: boolean;
  contentText?: string;
  isDraggable?: boolean;
  allowEmptySelection?: boolean;
}

const DropdownSelect = <T extends DropdownSelectContentItem>({
  content = [],
  onChange = (c) => {},
  onConfirmSelection = (c) => {},
  onCancel = () => {},
  itemRenderer = (item) => item.id,
  limit = 2,
  headingText,
  clearButtonText,
  confirmButtonText,
  emptyText,
  filterPlaceholderText,
  filterSearch = (v, r) => r.id.toLowerCase().includes(v.toLowerCase()),
  contentText,
  isDraggable = false,
  allowEmptySelection = true,
}: ISelectProps<T>) => {
  const [innerContent, setInnerContent] = useState<T[]>(content);
  const [filterText, setFilterText] = useState('');
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setInnerContent(content);
  }, [content]);

  const handleToggleSelectItem = (item: T) => {
    onChange(
      innerContent.map((i) => ({
        ...i,
        checked: i.id === item.id ? !item.checked : i.checked,
      }))
    );
  };

  const handleCancel = () => {
    setFilterText('');
    onCancel();
  };

  const handleConfirm = () => {
    onConfirmSelection(innerContent);
  };

  const selectedItems = innerContent.filter((item) => item.checked);

  const filteredItems = innerContent.filter((item) => filterSearch(filterText, item));

  function handleOnDragEnd(result: any) {
    if (!result.destination) return;
    if (result.destination.index === result.source.index) return;

    const items = Array.from(innerContent);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setInnerContent(items);
  }

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
              <button onClick={() => setFilterText('')}>
                <Icon.Close />
              </button>
            ) : (
              <S.MagnifyingGlassIcon />
            )}
          </div>
        </S.FilterInputWrapper>
        {isDraggable && filterText === '' ? (
          <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="columns">
              {(provided) => (
                <S.ListWrapper {...provided.droppableProps} ref={provided.innerRef}>
                  {!!filteredItems.length &&
                    filteredItems.map((item, index) => (
                      <Draggable key={item.id} draggableId={item.id} index={index}>
                        {(provided, snapshot) => (
                          <S.ContainerDrag
                            {...provided.draggableProps}
                            ref={provided.innerRef}
                            isDragging={snapshot.isDragging}
                          >
                            <div {...provided.dragHandleProps}>
                              <S.HandleIcon />
                            </div>
                            <S.CustomCheckbox
                              checked={innerContent.find((i) => i.id === item.id)!.checked}
                              onChange={() => handleToggleSelectItem(item)}
                              disabled={(!item.checked && selectedItems.length === limit) || item.default}
                            >
                              {itemRenderer(item)}
                            </S.CustomCheckbox>
                          </S.ContainerDrag>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                  {filteredItems.length === 0 && filterText && <S.EmptyMessage>{emptyText}</S.EmptyMessage>}
                </S.ListWrapper>
              )}
            </Droppable>
          </DragDropContext>
        ) : (
          <S.ListWrapper>
            {!!filteredItems.length &&
              filteredItems.map((item, index) => (
                <S.ContainerDrag isDragging={false} key={index}>
                  <S.CustomCheckbox
                    checked={innerContent.find((i) => i.id === item.id)!.checked}
                    onChange={() => handleToggleSelectItem(item)}
                    disabled={(!item.checked && selectedItems.length === limit) || item.default}
                  >
                    {itemRenderer(item)}
                  </S.CustomCheckbox>
                </S.ContainerDrag>
              ))}
            {filteredItems.length === 0 && filterText && <S.EmptyMessage>{emptyText}</S.EmptyMessage>}
          </S.ListWrapper>
        )}
        <S.ButtonContainer>
          <S.CustomizedButton variant="link" onClick={() => handleCancel()}>
            {clearButtonText}
          </S.CustomizedButton>
          <CustomButton
            onClick={handleConfirm}
            disabled={!allowEmptySelection && innerContent.every((item) => !item.checked)}
          >
            {confirmButtonText}
          </CustomButton>
        </S.ButtonContainer>
      </S.Content>
    </S.Wrapper>
  );
};

export default DropdownSelect;
