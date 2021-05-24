import React, { useEffect, useState } from 'react';
import { Container, Icon } from './styles';
import { IComboProps } from '../interfaces';

const Combo: React.FC<IComboProps> = ({ openContent, open, disabled, textCombo, id, ...props }) => {
  const [opened, setOpened] = useState<boolean>(false);

  useEffect(() => {
    if (open) {
      setOpened(true);
      return;
    }
    setOpened(false);
  }, [open]);

  const handleOpenContent = (e: any) => {
    if (disabled) return;
    openContent(id);
  };

  return (
    <Container onClick={(e) => handleOpenContent(e)} open={open} disabled={disabled} {...props}>
      {textCombo}
      <Icon className={opened ? 'open' : ''}>
        <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.2895 1.00002C10.8995 0.61002 10.2695 0.61002 9.87949 1.00002L5.99949 4.88002L2.11949 1.00002C1.72949 0.61002 1.09949 0.61002 0.70949 1.00002C0.319489 1.39002 0.319489 2.02002 0.70949 2.41002L5.29949 7.00002C5.68949 7.39002 6.31949 7.39002 6.70949 7.00002L11.2995 2.41002C11.6795 2.03002 11.6795 1.39002 11.2895 1.00002Z" />
        </svg>
      </Icon>
    </Container>
  );
};

export default Combo;
