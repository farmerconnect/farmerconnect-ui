import { useState, useEffect, useRef } from 'react';
import { ITagSelectProps, tagOption } from './interfaces';
import * as S from './styles';

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
      <Arrow color={isOpen ? '#141414' : selected.color} />
    </S.Container>
  );
};

type ArrowProps = {
  color: string;
};
const Arrow = ({ color = '#141414' }: ArrowProps) => (
  <svg fill="none" width="8" xmlns="http://www.w3.org/2000/svg" height="5" viewBox="0 0 8 5">
    <path
      d="M0.474162 4.19563C0.734162 4.45562 1.15416 4.45563 1.41416 4.19563L4.00083 1.60896L6.5875 4.19563C6.8475 4.45563 7.2675 4.45563 7.5275 4.19563C7.7875 3.93563 7.7875 3.51563 7.5275 3.25563L4.4675 0.195625C4.2075 -0.0643749 3.7875 -0.0643749 3.5275 0.195625L0.467495 3.25563C0.214162 3.50896 0.214162 3.93563 0.474162 4.19563Z"
      fill={color}
    />
  </svg>
);

export default TagSelect;
