import { MouseEvent, useRef } from 'react';
import { DropdownItem, IDropdownListProps } from './interfaces';
import * as S from './styles';

function DropdownList<T extends DropdownItem>({
  isOpen = false,
  items = [],
  onSelect = (_) => {},
  onClose = () => {},
  position = 'top-left',
  className = '',
}: IDropdownListProps<T>) {
  const listRef = useRef<HTMLUListElement>(null);

  const handleSelect = (item: T, e: MouseEvent<HTMLLIElement>) => {
    onSelect(item);
    e.stopPropagation();
    onClose();
  };

  return isOpen ? (
    <>
      <S.Overlay onClick={() => onClose()} data-testid="dropdown-list-overlay" />
      <S.List position={position} ref={listRef} className={className}>
        {items.map((item) => (
          <li key={`dropdown-item-${item.value}`} onClick={(e) => handleSelect(item, e)}>
            {item.label}
          </li>
        ))}
      </S.List>
    </>
  ) : null;
}

export default DropdownList;
