import React, { useState, useRef, ReactNode, useEffect, ChangeEvent } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import * as Icon from '../Icons';
import CustomButton from '../CustomButton';
import Radio from '../Radio';
import * as S from './styles';
import { AnimatePresence } from 'framer-motion';

export type DropdownSelectContentItem = {
  id: string;
  checked: string | boolean;
  default: boolean;
  items?: { id: string; label: ReactNode }[];
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

  const handleSelectSubItem = (itemId: string | false, subItemId: string | boolean) => {
    onChange(innerContent.map((item) => (item.id !== itemId ? item : { ...item, checked: subItemId })));
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
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="columns">
            {(provided) => (
              <S.ListWrapper {...provided.droppableProps} ref={provided.innerRef}>
                {!!filteredItems.length &&
                  filteredItems.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                      isDragDisabled={!!filterText || !isDraggable}
                    >
                      {(provided, snapshot) => (
                        <S.ContainerDrag
                          {...provided.draggableProps}
                          ref={provided.innerRef}
                          isDragging={snapshot.isDragging}
                        >
                          {!filterText && isDraggable && (
                            <div {...provided.dragHandleProps}>
                              <S.HandleIcon />
                            </div>
                          )}
                          {!item.items ? (
                            <S.CustomCheckbox
                              checked={!!innerContent.find((i) => i.id === item.id)!.checked}
                              onChange={() => handleToggleSelectItem(item)}
                              disabled={(!item.checked && selectedItems.length === limit) || item.default}
                            >
                              {itemRenderer(item)}
                            </S.CustomCheckbox>
                          ) : (
                            <AccordionList
                              id={item.id}
                              items={item.items}
                              selected={item.checked}
                              label={itemRenderer(item)}
                              onSelect={(subItemId) => handleSelectSubItem(item.id, subItemId)}
                            />
                          )}
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

type AccordionListProps<T extends { id: string; label: ReactNode }> = {
  id: string;
  label?: ReactNode;
  items?: T[];
  onSelect?: (t: string | boolean) => void;
  selected?: string | boolean;
};
const AccordionList = <T extends { id: string; label: ReactNode }>({
  label,
  id,
  items = [] as T[],
  selected = false,
  onSelect = (_) => {},
}: AccordionListProps<T>) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleFormChange = (e: ChangeEvent<HTMLInputElement>) => {
    onSelect(e.target.value || false);
  };

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <S.CollapsableItem onClick={handleToggleOpen} className={isOpen ? 'open' : ''}>
        <S.ChevronRight /> {label}
      </S.CollapsableItem>
      <AnimatePresence>
        {isOpen && (
          <S.AccordionContainer
            animate={{ height: 'auto' }}
            initial={{ height: 0 }}
            exit={{ height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Radio name={id} value="" checked={!selected} onChange={handleFormChange}>
              <span>none</span>
            </Radio>
            {items.map((item) => (
              <Radio name={id} value={item.id} checked={selected === item.id} onChange={handleFormChange}>
                <span>{item.label}</span>
              </Radio>
            ))}
          </S.AccordionContainer>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownSelect;
