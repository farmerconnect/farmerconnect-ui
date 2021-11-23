import { useState, useEffect, useRef } from 'react';
import { ITagSelectProps, tagOption } from './interfaces';
import * as S from './styles';
import { Arrow } from '../Icons';

const TagSelect = ({ options = [], onChange = () => {}, selected, ...props }: ITagSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside: EventListener = (e) => {
    if (!containerRef.current?.contains(e.target as Node)) setIsOpen(false);
  };

  const handleSelectOption = (option: tagOption) => {
    onChange(option);
    setIsOpen(false);
  };

  useEffect(() => {
    window.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <S.Container isOpen={isOpen} ref={containerRef} {...props}>
      <S.Dropdown isOpen={isOpen}>
        {isOpen ? (
          <>
            <li onClick={() => handleSelectOption(selected)} key={selected.id} data-cy={selected.id}>
              <S.TagItem color={selected.color} background={selected.background} faded>
                {selected.text}
              </S.TagItem>
            </li>
            {options
              .filter((option) => option !== selected)
              .map((option) => (
                <li onClick={() => handleSelectOption(option)} key={option.id} data-cy={option.id}>
                  <S.TagItem color={option.color} background={option.background}>
                    {option.text}
                  </S.TagItem>
                </li>
              ))}
          </>
        ) : (
          <li>
            <S.TagItem
              selected
              onClick={handleToggleOpen}
              color={selected.color}
              background={selected.background}
              data-cy={selected.id}
            >
              {selected.text}
            </S.TagItem>
          </li>
        )}
      </S.Dropdown>
      <Arrow direction="down" size="small" fill={isOpen ? '#141414' : selected.color} />
    </S.Container>
  );
};

export default TagSelect;
